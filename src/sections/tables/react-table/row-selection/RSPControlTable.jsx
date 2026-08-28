import PropTypes from 'prop-types';
import { useEffect, useMemo, useRef, useState } from 'react';

// react-bootstrap
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import Table from 'react-bootstrap/Table';

// third-party
import { useReactTable, flexRender, getCoreRowModel } from '@tanstack/react-table';
import { keepPreviousData, useQuery, QueryClient, QueryClientProvider } from '@tanstack/react-query';

// project-imports
import MainCard from 'components/MainCard';
import makeData from 'data/react-table';
import LinearWithLabel from 'components/@extended/progress/LinearWithLabel';
import { CSVExport, DebouncedInput, StatusPill, SortingData, TablePagination } from 'components/third-party/react-table';

const queryClient = new QueryClient();

async function fetchData(options) {
  // simulate some network latency
  await new Promise((r) => setTimeout(r, 500));

  const data = makeData(100);

  return {
    rows: data.slice(options.pageIndex * options.pageSize, (options.pageIndex + 1) * options.pageSize),
    pageCount: Math.ceil(data.length / options.pageSize)
  };
}

// ==============================|| REACT TABLE ||============================== //

function SelectAllCheckbox({ table }) {
  const ref = useRef(null);
  const isIndeterminate = table.getIsSomeRowsSelected() && !table.getIsAllRowsSelected();

  useEffect(() => {
    if (ref.current) {
      ref.current.indeterminate = isIndeterminate;
    }
  }, [isIndeterminate]);

  return <Form.Check type="checkbox" ref={ref} checked={table.getIsAllRowsSelected()} onChange={table.getToggleAllRowsSelectedHandler()} />;
}

function ReactTable({ title }) {
  const columns = useMemo(
    () => [
      {
        id: 'select',
        header: ({ table }) => <SelectAllCheckbox table={table} />,
        cell: ({ row }) => (
          <Form.Check
            type="checkbox"
            checked={row.getIsSelected()}
            disabled={!row.getCanSelect()}
            onChange={row.getToggleSelectedHandler()}
          />
        )
      },
      { header: 'Name', accessorKey: 'fullName' },
      { header: 'Email', accessorKey: 'email' },
      { header: 'Age', accessorKey: 'age', meta: { className: 'text-end' } },
      { header: 'Status', accessorKey: 'status', cell: (cell) => <StatusPill status={cell.getValue()} /> },
      {
        header: 'Profile Progress',
        accessorKey: 'progress',
        cell: ({ getValue }) => <LinearWithLabel value={getValue()} />
      }
    ],
    []
  );

  const [rowSelection, setRowSelection] = useState({});
  const [globalFilter, setGlobalFilter] = useState('');

  const [{ pageIndex, pageSize }, setPagination] = useState({ pageIndex: 0, pageSize: 10 });

  const defaultData = useMemo(() => [], []);

  const pagination = useMemo(() => ({ pageIndex, pageSize }), [pageIndex, pageSize]);

  const fetchDataOptions = { pageIndex, pageSize };

  const { data } = useQuery({
    queryKey: ['data', fetchDataOptions],
    queryFn: () => fetchData(fetchDataOptions),
    placeholderData: keepPreviousData
  });

  const table = useReactTable({
    data: data?.rows ?? defaultData,
    columns,
    pageCount: data?.pageCount ?? -1,
    state: { pagination, rowSelection },
    getRowId: (row) => row.id.toString(),
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    debugTable: true
  });

  useEffect(() => setRowSelection({ 1: true, 5: true, 7: true }), []);

  const headers = [];

  columns.forEach((column) => {
    const accessorKey = column.accessorKey;

    if (accessorKey) {
      headers.push({
        label: typeof column.header === 'string' ? column.header : '#',
        key: accessorKey ?? ''
      });
    }
  });

  return (
    <MainCard
      title={
        <Stack direction="horizontal" className="align-items-center justify-content-between">
          <h5 className="mb-0">{title}</h5>
          <CSVExport
            {...{
              data:
                table.getSelectedRowModel().flatRows.map((row) => row.original).length === 0
                  ? table.getRowModel().rows.map((row) => row.original)
                  : table.getSelectedRowModel().flatRows.map((row) => row.original),
              headers,
              filename: 'rsp-control.csv'
            }}
          />
        </Stack>
      }
      className="table-card"
    >
      {/* toolbar */}
      <Stack direction="horizontal" className="justify-content-between align-items-center flex-wrap p-4" gap={2}>
        <SortingData getState={table.getState} setPageSize={table.setPageSize} />
        <div className="datatable-search">
          <DebouncedInput value={globalFilter ?? ''} onFilterChange={(value) => setGlobalFilter(String(value))} />
        </div>
      </Stack>

      {/* table */}
      <Table hover responsive className="mb-0 border-top">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>{header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}</th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>

      {/* pagination */}
      <TablePagination
        setPageSize={table.setPageSize}
        setPageIndex={table.setPageIndex}
        getState={table.getState}
        getPageCount={table.getPageCount}
        initialPageSize={10}
        totalEntries={100}
      />
    </MainCard>
  );
}

// ==============================|| ROW SELECTION - RSP CONTROL TABLE ||============================== //

export default function RSPControl({ title }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactTable {...{ title }} />
    </QueryClientProvider>
  );
}

ReactTable.propTypes = { title: PropTypes.string };

RSPControl.propTypes = { title: PropTypes.string };
