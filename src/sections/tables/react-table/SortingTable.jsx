import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';

// react-bootstrap
import Stack from 'react-bootstrap/Stack';
import Table from 'react-bootstrap/Table';

// third-party
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable
} from '@tanstack/react-table';

// project-imports
import MainCard from 'components/MainCard';
import LinearWithLabel from 'components/@extended/progress/LinearWithLabel';
import makeData from 'data/react-table';
import useConfig from 'hooks/useConfig';
import {
  CSVExport,
  DebouncedInput,
  HeaderSort,
  SelectColumnSorting,
  SortingData,
  StatusPill,
  TablePagination
} from 'components/third-party/react-table';

// ==============================|| REACT TABLE ||============================== //

function ReactTable({ columns, data, title }) {
  const [globalFilter, setGlobalFilter] = useState('');
  const [sorting, setSorting] = useState([{ id: 'age', desc: false }]);

  const { themeDirection } = useConfig();

  const table = useReactTable({
    data,
    columns,
    state: { sorting, globalFilter },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel()
  });

  const headers = useMemo(() => {
    return table.getAllLeafColumns().map((col) => ({
      label: typeof col.columnDef.header === 'string' ? col.columnDef.header : '#',
      key: col.columnDef.accessorKey ?? col.id
    }));
  }, [table]);

  return (
    <MainCard
      title={title}
      secondary={
        <>
          <SelectColumnSorting getState={table.getState} getAllColumns={table.getAllColumns} setSorting={setSorting} />
          <CSVExport data={table.getSortedRowModel().rows.map((d) => d.original)} headers={headers} filename="sorting.csv" />
        </>
      }
      className="table-card"
    >
      {/* Toolbar */}
      <Stack direction="horizontal" className="justify-content-between align-items-center flex-wrap p-4" gap={2}>
        <SortingData getState={table.getState} setPageSize={table.setPageSize} />
        <div className="datatable-search">
          <DebouncedInput value={globalFilter} onFilterChange={(v) => setGlobalFilter(String(v))} />
        </div>
      </Stack>

      {/* Table */}
      <Table hover responsive className="mb-0 border-top">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                if (header.isPlaceholder) return null;
                const meta = header.column.columnDef.meta;
                return (
                  <th key={header.id} onClick={header.column.getToggleSortingHandler()} className={meta?.className}>
                    <Stack
                      direction="horizontal"
                      className={
                        meta?.className?.includes('text-end')
                          ? themeDirection === 'rtl'
                            ? 'justify-content-start'
                            : 'justify-content-end'
                          : undefined
                      }
                    >
                      {flexRender(header.column.columnDef.header, header.getContext())}
                      {header.column.getCanSort() && <HeaderSort column={header.column} />}
                    </Stack>
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} {...(cell.column.columnDef.meta ?? {})}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Pagination */}
      <TablePagination
        setPageSize={table.setPageSize}
        setPageIndex={table.setPageIndex}
        getState={table.getState}
        getPageCount={table.getPageCount}
        initialPageSize={10}
        totalEntries={data.length}
      />
    </MainCard>
  );
}

// ==============================|| SORTING TABLE ||============================== //

export default function SortingTable({ title }) {
  const data = makeData(20);

  const columns = useMemo(
    () => [
      { header: 'Name', accessorKey: 'fullName', meta: { className: 'text-nowrap' } },
      { header: 'Email', accessorKey: 'email' },
      {
        header: 'Age',
        accessorKey: 'age',
        meta: {
          className: 'text-end'
        }
      },
      { header: 'Role', footer: 'Role', accessorKey: 'role' },
      {
        header: 'Visits',
        accessorKey: 'visits',
        meta: {
          className: 'text-end'
        }
      },
      { header: 'Status', accessorKey: 'status', cell: (cell) => <StatusPill status={cell.getValue()} /> },
      {
        header: 'Profile Progress',
        accessorKey: 'progress',
        cell: ({ getValue }) => <LinearWithLabel value={getValue()} />
      }
    ],
    []
  );

  return <ReactTable {...{ data, columns, title }} />;
}

ReactTable.propTypes = { columns: PropTypes.array, data: PropTypes.array, title: PropTypes.string };

SortingTable.propTypes = { title: PropTypes.string };
