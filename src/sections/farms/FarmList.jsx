import PropTypes from 'prop-types';
import { useMemo, useState, useEffect } from 'react';

// react-bootstrap
import Stack from 'react-bootstrap/Stack';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';  

// third-party
import { flexRender, useReactTable, getCoreRowModel, getPaginationRowModel, getFilteredRowModel } from '@tanstack/react-table';
import Swal from 'sweetalert2';
import { format } from 'date-fns';

// project-imports
import MainCard from 'components/MainCard';
import { CSVExport, DebouncedInput, SortingData, StatusPill, TablePagination, EmptyTable } from 'components/third-party/react-table';
import LinearWithLabel from 'components/@extended/progress/LinearWithLabel';
import { handleConfirmDialog } from '../components/advance/sweet-alert/utils/ConfirmDialog';

//utils
import { fetcher, fetcherDelete } from '../../utils/axios';
import { getImageUrl, ImagePath } from 'utils/getImageUrl';


// ==============================|| FARM LIST ||============================== //

function ReactTable({ columns, data, title, striped, footer }) {
  const [globalFilter, setGlobalFilter] = useState('');

  const table = useReactTable({
    data,
    columns,
    state: { globalFilter, columnVisibility: !footer ? { visits: false, role: false } : {} },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel()
  });

  const headers = useMemo(
    () =>
      table.getAllColumns().map((col) => ({
        label: typeof col.columnDef.header === 'string' ? col.columnDef.header : '#',
        key: col.columnDef.accessorKey ?? col.id
      })),
    [table]
  );

  const handleClick = (path) => {
    window.location.href = path;
  };

  return (
    <MainCard title={title} secondary={<CSVExport {...{ data, headers, filename: 'data.csv' }} />} className="table-card">
      {/* Toolbar */}
      <Row>
        <Col xs={9}  direction="horizontal" className="justify-content-between align-items-center flex-wrap p-4" gap={2}>
           <Stack direction="horizontal" className="justify-content-start align-items-center flex-wrap" gap={2}>
              
              <Col xs={3}>
                <SortingData getState={table.getState} setPageSize={table.setPageSize} />
              </Col>
              <Col xs={8} >
                <div className="datatable-search">
                  <DebouncedInput value={globalFilter ?? ''} onFilterChange={(value) => setGlobalFilter(String(value))}  />
                </div>
              </Col>

            </Stack>
        </Col>
        <Col xs={3} className="justify-content-end align-items-center">
        <Stack direction="horizontal" className="justify-content-end align-items-center flex-wrap p-4" gap={2}>        
              
          <Button variant="success" onClick={() => handleClick("/farms/farmadd")} >
                {'ADD FARM'}
            </Button>
       
            <CSVExport
                {...{
                data:
                    //table.getSelectedRowModel().flatRows.map((row) => row.original).length === 0
                    table.getSelectedRowModel().rows.length ===0
                    ? data
                    : table.getSelectedRowModel().flatRows.map((row) => row.original),
                headers,
                filename: `${format(new Date(), 'yyyyMMdd')}_${Math.floor(Math.random()* (1000 - 100 + 1) + 100)}.csv`
                }}
            />
        </Stack>

        </Col>
      </Row>


      {/* Table */}
      <Table hover responsive className="mb-0 border-top" striped={striped}>
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

        <tbody className={striped ? 'striped' : undefined}>
          
          {table.getRowModel().rows.length > 0 ? (
            table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className={cell.column.columnDef.meta?.className ?? ''}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={table.getAllColumns().length}>
                <EmptyTable msg="No Data" themeMode="light" />
              </td>
            </tr>
          )}
        </tbody>


        {footer && (
          <tfoot className="footer-bg">
            {table.getFooterGroups().map((footerGroup) => (
              <tr key={footerGroup.id}>
                {footerGroup.headers.map((footer) => (
                  <td key={footer.id} {...(footer.column.columnDef.meta ?? {})}>
                    {footer.isPlaceholder ? null : flexRender(footer.column.columnDef.header, footer.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tfoot>
        )}
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

// ==============================|| BASIC TABLE ||============================== //

export default function BasicTable({ title, striped, footer = false }) {
  //const data = makeData(20);
  const [data, setData] = useState([]);

  //FARM DATA LIST
  useEffect(() => {
    // Define async function inside useEffect
    const fetchData = async () => {
      try {
        const response = await fetcher(['farms?current_page=1&regs_per_page=1000', {}]);     

        //console.log('DATA', response);

        setData(response.data );

      } catch (err) {
        console.log(err.message);
      } 
    };
    fetchData();
  }, []); // Empty dependency array ensures this runs only once on mount


// ==============================|| ACTION ICON DATA ||============================== //

const actionIcons = [ 
  { bg: 'btn-link-primary', icon: 'ti ti-edit text-primary', name: 'Edit', func: (id) => handleEdit(id) },
  { bg: 'btn-link-danger', icon: 'ti ti-trash text-danger', name: 'Delete', func: (id) => handleDelete(id) }
];


  const handleDelete = (id) => {
    // Implement delete functionality here  
    //const res = handleConfirmDialog();
    //console.log('Delete row with id:', id); 

    const swalWithBootstrapButtons =  Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      });

      swalWithBootstrapButtons
        .fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, delete it!',
          cancelButtonText: 'No, cancel!',
          reverseButtons: true
        })
        .then(async(result) => {
          if (result.isConfirmed) {
            try {
                const response = await fetcherDelete(['farms/' + id, {}]);
                // Refresh the data after deletion
                const updatedData = await fetcher(['farms?current_page=1&regs_per_page=5', {}]);
                setData(updatedData.data);

            } catch (err) {
              console.log(err.message);
            }


          } 
          //else if (result.dismiss === Swal.DismissReason.cancel) {
          //   swalWithBootstrapButtons.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
          // } 
        });    

  };

  const handleEdit = (id) => {
    // Implement edit functionality here
    window.location.href = `/farms/farmadd/${id}`;
  };  


  const columns = useMemo(
    () => [
      
      {
        header: '',
        accessorKey: 'trademark',
        cell: (cell) => (
          <Image
            className="avatar avatar-xs"
            alt={`Trademark`}
            src={getImageUrl(`${cell.getValue()}`, ImagePath.TRADEMARK, 'public')}
          />
        )
      },
      { header: 'Farm Name', accessorKey: 'farm_name', meta: { className: 'text-nowrap' } },
      { header: 'Registration Number', accessorKey: 'registration_number' },
      {
        header: 'City',  
        accessorKey: 'city'
      },
      { header: 'Owner', footer: 'owner_name', accessorKey: 'owner_name' },     
      {
        header: 'Total Area',
        accessorKey: 'total_area',
        meta: {
          className: 'text-end'
        }
      },
     
      {
        header: 'Profile Progress',
        accessorKey: 'progress',
        //cell: ({ getValue }) => <LinearWithLabel value={getValue()} />
        cell: ({getValue}) => {          
          const class_name = getValue() == 100 ? 'progress-success' : getValue() < 23 ? 'progress-warning': 'progress-primary' ;
          return <LinearWithLabel value={getValue()} className={class_name} />;
        }

      },
      {
        header: 'Action',
        meta: {width: '30px', className: 'text-center'} ,
        cell: (row) => (
          <Stack direction="horizontal" gap={1}>
            {actionIcons.map((action, idx) => (
               <OverlayTrigger key={idx} overlay={<Tooltip>{action.name}</Tooltip>}>
                <Button href="#" className={`${action.bg} avatar avatar-xs mx-1`} onClick={() => action.func(row.row.original.id)}>
                  <i className={`${action.icon} f-20`} />
                </Button>
              </OverlayTrigger>
            ))}
          </Stack>
        )
      }

      
    ],
    []
  );

  return <ReactTable {...{ data, columns, title, striped, footer }} />;
}

ReactTable.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array,
  title: PropTypes.string,
  striped: PropTypes.bool,
  footer: PropTypes.bool
};

BasicTable.propTypes = { title: PropTypes.string, striped: PropTypes.bool, footer: PropTypes.bool };
