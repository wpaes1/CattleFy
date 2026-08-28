import PropTypes from 'prop-types';
import { Fragment, useMemo, useState, useEffect, useCallback  } from 'react';
import { Navigate } from 'react-router-dom';

// react-bootstrap
import Stack from 'react-bootstrap/Stack';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// third-party
import {
  useReactTable,
  flexRender,
  getExpandedRowModel,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel
} from '@tanstack/react-table';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import NotificationColored from 'sections/components/advance/notification/ColoredNotification';
import { format } from 'date-fns';


// project-imports
import LotAnimalsExpandingDetails from 'sections/farms/LotAnimalsExpandingDetails';
import MainCard from 'components/MainCard';
import LinearWithLabel from 'components/@extended/progress/LinearWithLabel';
import makeData from 'data/react-table';
import { CSVExport, DebouncedInput, SortingData, StatusPill, TablePagination, EmptyTable, } from 'components/third-party/react-table';
import Swal from 'sweetalert2';


import useConfig from 'hooks/useConfig';
import { ThemeMode } from 'config';
import { getResolvedTheme, setResolvedTheme } from 'components/setResolvedTheme';

//utils
import { fetcher, fetcherDelete } from '../../utils/axios';

// assets
import LightLogo from 'assets/images/logo-white.png';
import DarkLogo from 'assets/images/logo-dark.png';


// ==============================|| REACT TABLE ||============================== //

function ReactTable({ data, columns, title }) {
  const [globalFilter, setGlobalFilter] = useState('');

  const table = useReactTable({
    data,
    state: { globalFilter },
    columns,
    getRowCanExpand: () => true,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel()
  });

  const headers = useMemo(
    () =>
      table.getAllColumns().map((column) => ({
        label: typeof column.columnDef.header === 'string' ? column.columnDef.header : '#',
        key: column.columnDef.accessorKey ?? ''
      })),
    [table]
  );


  const handleClick = (path) => {
   window.location.href = path;   
  };  

  return (
    <MainCard title={title} secondary={<CSVExport data={data} headers={headers} filename="expanding-details.csv" />} className="table-card">
      <ToastContainer />
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
              
            <Button variant="success" onClick={() => handleClick("/farms/lotanimaladd")} >
                {'ADD LOT'}
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
      <Table responsive className="border-top">
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
          {
            table.getRowModel().rows.length > 0 ? (    
                table.getRowModel().rows.map((row) => {
                    return (
                        <Fragment key={row.id}>
                        <tr>
                            {row.getVisibleCells().map((cell) => (
                            <td key={cell.id} {...cell.column.columnDef.meta}>
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </td>
                            ))}
                        </tr>
                        {row.getIsExpanded() && !row.getIsGrouped() && (
                            <tr>
                            <td colSpan={row.getVisibleCells().length + 2}>
                                <LotAnimalsExpandingDetails data={row.original} />
                            </td>
                            </tr>
                        )}
                        </Fragment>
                    );                  
                })
            ) : (
                <tr>
                  <td colSpan={table.getAllColumns().length}>
                    <EmptyTable msg="No Data" themeMode="light" />
                  </td>
                </tr>
            )}
        </tbody>
      </Table>

      {/* pagination */}
      <TablePagination
        setPageSize={table.setPageSize}
        setPageIndex={table.setPageIndex}
        getState={table.getState}
        getPageCount={table.getPageCount}
        initialPageSize={10}
        totalEntries={table.getRowModel().rows.length ===0 ? 0 : data.length}
      />
    </MainCard>
  );
}

// ==============================|| EXPANDING - EXPANDING DETAILS ||============================== //

export default function ExpandingDetails({ title }) {
  //const data = makeData(50);
  const [data, setData] = useState([]);
  const { themeDirection, mode } = useConfig();
  const resolvedTheme = getResolvedTheme(mode);
  setResolvedTheme(mode);
  const logo = resolvedTheme === ThemeMode.DARK ? LightLogo : window.location.pathname.includes('v3') ? LightLogo : DarkLogo;



    useEffect(() => {
        const controller = new AbortController();
        const fetchData = async () => {
            try {
                const response = await fetcher(['lotanimals?current_page=1&regs_per_page=10000', {}]);   
                setData(response.data );
            } catch (error) {
                if(error.response)
                      toast.error(error.response.data.message, {
                        rtl: themeDirection === 'rtl' ? true : false,
                        icon: false,
                        position: themeDirection === 'rtl' ? 'top-left' : 'top-right',
                        theme: 'colored'
                      });
                      else
                      toast.error(error.message, {
                        rtl: themeDirection === 'rtl' ? true : false,
                        icon: false,
                        position: themeDirection === 'rtl' ? 'top-left' : 'top-right',
                        theme: 'colored'
                      });
            }
        };

        fetchData();

        // Cleanup: Abort request on unmount
        return () => {
            controller.abort();
        };
    }, []);



// ==============================|| ACTION ICON DATA ||============================== //

const actionIcons = [
  { bg: 'btn-link-secondary', icon: 'ti ti-eye', name: 'Lot closing', func: (id) => handleClosing(id) },
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
                  const response = await fetcherDelete(['lotanimals/' + id, {}]);
                  // Refresh the data after deletion
                  const updatedData = await fetcher(['lotanimals?current_page=1&regs_per_page=5', {}]);
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
      window.location.href = `/farms/lotanimaladd/${id}`;
    };  
    const handleClosing = (id) => {
      alert(`Closing lot with id: ${id}`);
    }

  const columns = useMemo(
    () => [
      {
        id: 'expander',
        header: () => null,
        cell: ({ row }) => (
          <i
            className={`ti ${row.getIsExpanded() ? 'ti-chevron-down' : 'ti-chevron-right'} fs-5`}
            onClick={row.getToggleExpandedHandler()}
          />
        )
      },
      { 
        id: 'lot_number',
        header: 'Lot Number', 
        accessorKey: 'lot_number', 
        enableColumnFilter: false,
        enableGrouping: false,
        meta: { width: '20px', className: 'text-end' }
      },         
      {
        id: 'lot_Description',
        header: 'Lot Description',
        accessorKey: 'lot_description',
        dataType: 'text',
        enableColumnFilter: false,
        enableGrouping: false,
      },  
      {
        id: 'status',
        header: 'Status',
        accessorKey: 'status',
        dataType: 'select',
        enableColumnFilter: false,
        enableGrouping: false,
        cell: (cell) => {
          let bg = 'light-primary';
          switch (cell.getValue()) {
            case 'A':
              bg = 'light-success';
              break;
            case 'T':
              bg = 'light-warning';
              break;
            case 'D':
              bg = 'light-warning';
              break;
            case 'G':
              bg = 'light-info';
              break;
            case 'V':
            default:
              bg = 'light-primary';
          }
          return <Badge bg={bg}>{cell.row.original.status_description}</Badge>;
        }           
      },
      {
        id: 'progress',
        header: 'Profile Progress',
        accessorKey: 'progress',
        dataType: 'progress',
        enableColumnFilter: false,
        enableGrouping: false,
        cell: ({getValue}) => {          
          const class_name = getValue() > 99 ? 'progress-success' : getValue() < 83 ? 'progress-warning': 'progress-primary' ;
          return <LinearWithLabel value={getValue()} className={class_name} />;
        }
      },
      {
        header: 'Action',
        meta: {width: '60px', className: 'text-center'} ,
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

  return <ReactTable {...{ columns, data, title }} />;
}

ReactTable.propTypes = { data: PropTypes.array, columns: PropTypes.array, title: PropTypes.string };

ExpandingDetails.propTypes = { title: PropTypes.string };
