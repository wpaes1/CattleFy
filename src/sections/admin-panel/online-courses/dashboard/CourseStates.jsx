import { useEffect, useState } from 'react';

// react-bootstrap
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Stack from 'react-bootstrap/Stack';
import Table from 'react-bootstrap/Table';
import Tooltip from 'react-bootstrap/Tooltip';

// project-imports
import { ThemeMode } from 'config';
import { getResolvedTheme, setResolvedTheme } from 'components/setResolvedTheme';
import MainCard from 'components/MainCard';
import useConfig from 'hooks/useConfig';

// third-party
import ReactApexChart from 'react-apexcharts';

// user data
function createData(name, teacher, amount, rating, sale) {
  return { name, teacher, amount, rating, sale };
}

// chart-options
const redialBarChartOptions = {
  chart: {
    type: 'radialBar',
    height: 50,
    background: 'transparent',
    sparkline: {
      enabled: true
    }
  },
  plotOptions: {
    radialBar: {
      offsetX: 0,
      offsetY: 0,
      track: {
        background: 'rgba(var(--bs-warning-rgb), 0.16)'
      },
      hollow: {
        size: '20'
      },
      dataLabels: {
        name: {
          show: false
        },
        value: {
          show: false
        }
      }
    },
    dataLabels: {
      enabled: false
    }
  },
  labels: ['Sale']
};

const rows = [
  createData('Web Designing Course', 'Airi Satou', 200, 4.8, 75),
  createData('UI/UX Training Course', 'Ashton Cox', 100, 5.0, 60),
  createData('PHP Training Course', 'Bradley Greer', 80, 4.9, 30),
  createData('Bootstrap 5 Course', 'Brielle Williamson', 150, 4.4, 90),
  createData('C Training Course', 'Cedric Kelly', 50, 4.3, 40)
];

// action icons data
const actionIcons = [
  { icon: 'ti ti-eye', name: 'View' },
  { icon: 'ti ti-edit', name: 'Edit' },
  { icon: 'ti ti-trash', name: 'Delete' }
];

// ==============================|| DASHBOARD - COURSE STATES TABLE ||============================== //

export default function CourseStateTable() {
  const { mode, fontFamily } = useConfig();
  const resolvedTheme = getResolvedTheme(mode);
  setResolvedTheme(mode);

  const [options, setOptions] = useState(redialBarChartOptions);

  useEffect(() => {
    setOptions({
      ...redialBarChartOptions,
      chart: { ...redialBarChartOptions.chart, fontFamily: fontFamily },
      colors: ['var(--bs-warning)'],
      theme: { mode: resolvedTheme === ThemeMode.DARK ? 'dark' : 'light' }
    });
  }, [resolvedTheme, fontFamily]);

  return (
    <MainCard
      className="table-card"
      bodyClassName="p-0"
      title={
        <Stack direction="horizontal" className="align-items-center justify-content-between">
          <h5 className="mb-0">Course States</h5>
          <Button size="sm" variant="link-primary p-0">
            View All
          </Button>
        </Stack>
      }
    >
      <Table hover responsive className="align-middle mb-0">
        <thead>
          <tr>
            <th>Name</th>
            <th>Teacher</th>
            <th>Rating</th>
            <th>Earning</th>
            <th>Sale</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((value, index) => (
            <tr key={index}>
              <td>{value.name}</td>
              <td>{value.teacher}</td>
              <td className="f-w-600">
                <i className="ti ti-star-filled align-baseline text-warning" /> {value.rating}
              </td>
              <td>${value.amount}</td>
              <td>
                <ReactApexChart
                  className="small-radial-chart"
                  options={options}
                  series={[value.sale]}
                  type="radialBar"
                  width={50}
                  height={50}
                />
              </td>
              <td>
                <Stack direction="horizontal" gap={1}>
                  {actionIcons.map((action, idx) => (
                    <OverlayTrigger key={idx} placement="bottom" overlay={<Tooltip>{action.name}</Tooltip>}>
                      <a href="#!" className="btn-link-secondary avatar avatar-xs mx-1">
                        <i className={`${action.icon} f-20`} />
                      </a>
                    </OverlayTrigger>
                  ))}
                </Stack>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </MainCard>
  );
}
