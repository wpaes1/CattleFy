import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';

// react-bootstrap
import Stack from 'react-bootstrap/Stack';
import Table from 'react-bootstrap/Table';

// third-party
import { flexRender, useReactTable, getCoreRowModel, getPaginationRowModel, getFilteredRowModel } from '@tanstack/react-table';

// project-imports
import MainCard from 'components/MainCard';
import LinearWithLabel from 'components/@extended/progress/LinearWithLabel';
import makeData from 'data/react-table';
import { CSVExport, DebouncedInput, SortingData, StatusPill, TablePagination } from 'components/third-party/react-table';

// ==============================|| REACT TABLE ||============================== //

function ReactTable({ columns, data, title }) {
  const [globalFilter, setGlobalFilter] = useState('');

  const table = useReactTable({
    data,
    state: { globalFilter },
    columns,
    columnResizeMode: 'onChange',
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    debugTable: true,
    debugHeaders: true,
    debugColumns: true
  });

  const headers = [];
  table.getAllColumns().map((column) => {
    const accessorKey = column.columnDef.accessorKey;
    headers.push({
      label: typeof column.columnDef.header === 'string' ? column.columnDef.header : '#',
      key: accessorKey ?? ''
    });
  });

  return (
    <MainCard title={title} className="table-card" secondary={<CSVExport {...{ data, headers, filename: 'column-resizing.csv' }} />}>
      {/* toolbar */}
      <Stack direction="horizontal" className="justify-content-between align-items-center flex-wrap p-4" gap={2}>
        <SortingData getState={table.getState} setPageSize={table.setPageSize} />
        <div className="datatable-search">
          <DebouncedInput value={globalFilter ?? ''} onFilterChange={(value) => setGlobalFilter(String(value))} />
        </div>
      </Stack>

      {/* table */}
      <Table hover responsive className="mb-0 border-top" style={{ width: table.getCenterTotalSize() }}>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th key={header.id} {...header.column.columnDef.meta} style={{ position: 'relative', minWidth: header.column.getSize() }}>
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    <Stack
                      direction="horizontal"
                      onMouseDown={header.getResizeHandler()}
                      onTouchStart={header.getResizeHandler()}
                      style={{
                        position: 'absolute',
                        right: 10,
                        top: 25,
                        height: 1,
                        width: 5,
                        cursor: 'col-resize',
                        userSelect: 'none',
                        touchAction: 'none',
                        zIndex: 1,
                        opacity: 0,
                        transition: 'opacity 0.2s ease'
                      }}
                    >
                      <i className="ti ti-minus-vertical f-18"></i>
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
                <td key={cell.id} {...cell.column.columnDef.meta} style={{ width: cell.column.getSize() }}>
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

// ==============================|| REACT TABLE - COLUMN RESIZING ||============================== //

export default function ColumnResizing({ title }) {
  const data = makeData(15);

  const columns = useMemo(
    () => [
      { header: '#', accessorKey: 'id' },
      { header: 'Name', accessorKey: 'fullName' },
      { header: 'Email', accessorKey: 'email' },
      { header: 'Age', accessorKey: 'age', meta: { className: 'text-end' } },
      { header: 'Role', accessorKey: 'role' },
      { header: 'Contact', accessorKey: 'contact' },
      { header: 'Country', accessorKey: 'country' },
      { header: 'Visits', accessorKey: 'visits', meta: { className: 'text-end' } },
      { header: 'Status', accessorKey: 'status', cell: (cell) => <StatusPill status={cell.getValue()} /> },
      {
        header: 'Progress',
        accessorKey: 'progress',
        cell: (cell) => <LinearWithLabel value={cell.getValue()} />
      }
    ],
    []
  );

  return <ReactTable {...{ columns, data, title }} />;
}

ReactTable.propTypes = { columns: PropTypes.array, data: PropTypes.array, title: PropTypes.string };

ColumnResizing.propTypes = { title: PropTypes.string };
