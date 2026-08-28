import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';

// react-bootstrap
import Table from 'react-bootstrap/Table';

// third-party
import { useReactTable, getCoreRowModel, getPaginationRowModel, flexRender, getFilteredRowModel } from '@tanstack/react-table';

// project-imports
import MainCard from 'components/MainCard';
import makeData from 'data/react-table';
import LinearWithLabel from 'components/@extended/progress/LinearWithLabel';
import { CSVExport, StatusPill, TablePagination } from 'components/third-party/react-table';

// ==============================|| REACT TABLE ||============================== //

function ReactTable({ columns, data, position, title }) {
  const [globalFilter, setGlobalFilter] = useState('');

  const table = useReactTable({
    data,
    state: { globalFilter },
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    getFilteredRowModel: getFilteredRowModel(),
    debugTable: true
  });

  const headers = useMemo(
    () =>
      table.getAllColumns().map((col) => ({
        label: typeof col.columnDef.header === 'string' ? col.columnDef.header : '#',
        key: col.columnDef.accessorKey ?? col.id
      })),
    [table]
  );

  return (
    <MainCard
      title={title}
      secondary={<CSVExport {...{ data, headers, filename: position === 'top' ? 'pagination-top.csv' : 'pagination-bottom.csv' }} />}
      className="table-card"
    >
      {position === 'top' && (
        <TablePagination
          setPageSize={table.setPageSize}
          setPageIndex={table.setPageIndex}
          getState={table.getState}
          getPageCount={table.getPageCount}
          initialPageSize={10}
          totalEntries={data.length}
          className="p-4 pb-4 border-top-0"
        />
      )}

      {/* Table */}
      <Table hover responsive className="mb-0 border-top">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} {...(header.column.columnDef.meta ?? {})}>
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
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

      {position === 'bottom' && (
        <TablePagination
          setPageSize={table.setPageSize}
          setPageIndex={table.setPageIndex}
          getState={table.getState}
          getPageCount={table.getPageCount}
          initialPageSize={10}
          totalEntries={100}
        />
      )}
    </MainCard>
  );
}

// ==============================|| PAGINATION - PAGINATION BOTTOM ||============================== //

export default function PaginationTable({ title, position }) {
  const data = makeData(100);

  const columns = useMemo(
    () => [
      { header: 'Name', accessorKey: 'fullName', meta: { className: 'text-nowrap' } },
      { header: 'Email', accessorKey: 'email' },
      { header: 'Age', accessorKey: 'age', meta: { className: 'text-end' } },
      { header: 'Status', accessorKey: 'status', cell: (cell) => <StatusPill status={cell.getValue()} /> },
      {
        header: 'Profile Progress',
        accessorKey: 'progress',
        cell: (cell) => <LinearWithLabel value={cell.getValue()} />
      }
    ],
    []
  );

  return <ReactTable {...{ data, columns, position, title }} />;
}

ReactTable.propTypes = { columns: PropTypes.array, data: PropTypes.array, position: PropTypes.string, title: PropTypes.string };

PaginationTable.propTypes = { title: PropTypes.string, position: PropTypes.string };
