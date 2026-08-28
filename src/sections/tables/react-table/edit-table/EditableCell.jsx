import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';

// react-bootstrap
import Table from 'react-bootstrap/Table';

// project-imports
import MainCard from 'components/MainCard';
import makeData from 'data/react-table';
import { CSVExport, EditCell } from 'components/third-party/react-table';

// third party
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';

// =============================|| REACT TABLE ||============================== //

function ReactTable({ columns, data, setData, title }) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
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
      secondary={
        <CSVExport {...{ data: table.getRowModel().flatRows.map((row) => row.original), headers, filename: 'editable-cell.csv' }} />
      }
      className="table-card"
    >
      {/* table */}
      <Table hover responsive className="mb-0">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} {...header.column.columnDef.meta}>
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
                <EditCell
                  key={cell.id}
                  cell={cell}
                  onSave={(updatedValue) => {
                    setData((prevData) =>
                      prevData.map((item) => (item.id === row.original.id ? { ...item, [cell.column.id]: updatedValue } : item))
                    );
                  }}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </MainCard>
  );
}

// ==============================|| EDIT TABLE - EDITABLE CELL ||============================== //

export default function EditableCellTable({ title }) {
  const [data, setData] = useState(() => makeData(10));

  const columns = useMemo(
    () => [
      { header: 'Name', accessorKey: 'fullName', dataType: 'text', meta: { className: 'text-nowrap' } },
      { header: 'Email', accessorKey: 'email', dataType: 'text' },
      { header: 'Age', accessorKey: 'age', dataType: 'number', meta: { className: 'text-end' } },
      { header: 'Visits', accessorKey: 'visits', dataType: 'number', meta: { className: 'text-end' } },
      { header: 'Status', accessorKey: 'status', dataType: 'select' },
      { header: 'Profile Progress', accessorKey: 'progress', dataType: 'progress' }
    ],
    []
  );

  return <ReactTable {...{ data, columns, setData, title }} />;
}

ReactTable.propTypes = { columns: PropTypes.array, data: PropTypes.array, setData: PropTypes.array, title: PropTypes.string };

EditableCellTable.propTypes = { title: PropTypes.string };
