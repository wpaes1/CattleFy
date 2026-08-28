import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';

// react-bootstrap
import Stack from 'react-bootstrap/Stack';
import Table from 'react-bootstrap/Table';

// third-party
import { DndContext, closestCenter, useSensor, useSensors, TouchSensor, MouseSensor, KeyboardSensor } from '@dnd-kit/core';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import { arrayMove, SortableContext, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, useReactTable } from '@tanstack/react-table';

// project-imports
import MainCard from 'components/MainCard';
import LinearWithLabel from 'components/@extended/progress/LinearWithLabel';
import makeData from 'data/react-table';
import { CSVExport, DebouncedInput, SortingData, StatusPill, TablePagination } from 'components/third-party/react-table';

// ==============================|| DRAGGABLE ROW ||============================== //

function DraggableRow({ row }) {
  const { transform, transition, setNodeRef, isDragging, attributes, listeners, setActivatorNodeRef } = useSortable({
    id: row.original.id
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    zIndex: isDragging ? 1 : 0,
    position: 'relative'
  };

  return (
    <tr ref={setNodeRef} style={style}>
      {row.getVisibleCells().map((cell) => {
        if (cell.column.id === 'drag-handle') {
          return (
            <td key={cell.id} className="wid-55">
              <div ref={setActivatorNodeRef} {...listeners} {...attributes}>
                <i
                  {...attributes}
                  {...listeners}
                  className="ti ti-drag-drop-2 text-secondary f-18 wid-25 hei-25 f-16"
                  style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
                />
              </div>
            </td>
          );
        }
        return (
          <td key={cell.id} {...cell.column.columnDef.meta}>
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </td>
        );
      })}
    </tr>
  );
}

// ==============================|| REACT TABLE ||============================== //

function ReactTable({ defaultColumns, defaultData, title }) {
  const [columns] = useState(() => [...defaultColumns]);
  const [data, setData] = useState([...defaultData]);
  const [globalFilter, setGlobalFilter] = useState('');

  const dataIds = useMemo(() => data?.map(({ id }) => id), [data]);

  const table = useReactTable({
    data,
    state: { globalFilter },
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getRowId: (row) => row.id.toString(), // good to have guaranteed unique row ids/keys for rendering
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

  const sensors = useSensors(useSensor(MouseSensor, {}), useSensor(TouchSensor, {}), useSensor(KeyboardSensor, {}));

  // reorder rows after drag & drop
  function handleDragEnd(event) {
    const { active, over } = event;
    if (active && over && active.id !== over.id) {
      setData((data) => {
        const oldIndex = dataIds.indexOf(active.id);
        const newIndex = dataIds.indexOf(over.id);
        return arrayMove(data, oldIndex, newIndex);
      });
    }
  }

  return (
    <MainCard
      title={title}
      className="table-card"
      secondary={
        <CSVExport {...{ data: table.getRowModel().flatRows.map((row) => row.original), headers, filename: 'row-dragable.csv' }} />
      }
    >
      {/* Toolbar */}
      <Stack direction="horizontal" className="justify-content-between align-items-center flex-wrap p-4" gap={2}>
        <SortingData getState={table.getState} setPageSize={table.setPageSize} />
        <div className="datatable-search">
          <DebouncedInput value={globalFilter ?? ''} onFilterChange={(value) => setGlobalFilter(String(value))} />
        </div>
      </Stack>

      {/* Table */}
      <DndContext collisionDetection={closestCenter} modifiers={[restrictToVerticalAxis]} onDragEnd={handleDragEnd} sensors={sensors}>
        <Table responsive hover className="mb-0 border-top">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} {...header.column.columnDef.meta} className={`${header.column.columnDef.meta?.className} `}>
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            <SortableContext items={dataIds} strategy={verticalListSortingStrategy}>
              {table.getRowModel().rows.map((row) => (
                <DraggableRow key={row.id} row={row} />
              ))}
            </SortableContext>
          </tbody>
        </Table>
      </DndContext>

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

// ==============================||  DRAG & DROP - ROW DRAG & DROP TABLE ||============================== //

export default function RowDragDrop({ title }) {
  const data = useMemo(() => makeData(10), []);

  const defaultColumns = [
    { id: 'drag-handle' },
    { id: 'fullName', header: 'Name', accessorKey: 'fullName', meta: { className: 'text-nowrap' } },
    { id: 'email', header: 'Email', accessorKey: 'email' },
    { id: 'age', header: 'Age', accessorKey: 'age', meta: { className: 'text-end' } },
    { id: 'role', header: 'Role', accessorKey: 'role' },
    { id: 'visits', header: 'Visits', accessorKey: 'visits', meta: { className: 'text-end' } },
    { id: 'status', header: 'Status', accessorKey: 'status', cell: (cell) => <StatusPill status={cell.getValue()} /> },
    {
      id: 'progress',
      header: 'Profile Progress',
      accessorKey: 'progress',
      cell: (props) => <LinearWithLabel value={props.getValue()} />
    }
  ];

  return <ReactTable {...{ defaultColumns, defaultData: data, title }} />;
}

DraggableRow.propTypes = { row: PropTypes.object };

ReactTable.propTypes = { defaultColumns: PropTypes.array, defaultData: PropTypes.array, title: PropTypes.string };

RowDragDrop.propTypes = { title: PropTypes.string };
