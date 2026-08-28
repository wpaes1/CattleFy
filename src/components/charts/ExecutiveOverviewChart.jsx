import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';

// third-party
import ReactApexChart from 'react-apexcharts';

// project-imports
import MainCard from 'components/MainCard';
import useConfig from 'hooks/useConfig';
import { ThemeMode } from 'config';
import { getResolvedTheme, setResolvedTheme } from 'components/setResolvedTheme';

const executiveOverviewChartOptions = {
  chart: {
    type: 'bar',
    background: 'transparent',
    toolbar: {
      show: false
    },
    sparkline: {
      enabled: true
    }
  },
  yaxis: {
    show: false
  },
  xaxis: {
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    labels: {
      show: false
    }
  },
  dataLabels: {
    enabled: false
  }
};

// ==============================|| EXECUTIVE OVERVIEW CHART ||============================== //

function ExecutiveOverviewChart({ title, value, currency, salesType, chartColor, series = [], icon }) {
  const { mode, fontFamily } = useConfig();
  const resolvedTheme = getResolvedTheme(mode);
  setResolvedTheme(mode);

  const [options, setOptions] = useState(executiveOverviewChartOptions);

  useEffect(() => {
    setOptions({
      ...executiveOverviewChartOptions,
      chart: { ...executiveOverviewChartOptions.chart, fontFamily: fontFamily },
      colors: [chartColor],
      theme: { mode: resolvedTheme === ThemeMode.DARK ? 'dark' : 'light' }
    });
  }, [fontFamily, resolvedTheme, chartColor]);

  return (
    <MainCard bodyClassName="sale-view">
      <Stack direction="horizontal" className="align-items-end gap-1">
        <h3 className="f-w-300">{value}</h3>
        <h6 className="text-muted m-b-10">{currency}</h6>
      </Stack>
      <h5>{title}</h5>
      <span className="text-muted">{salesType}</span>

      <Row className="align-items-center justify-between-center">
        <Col>
          <ReactApexChart options={options} series={series} type="bar" width={100} height={80} />
        </Col>

        <Col xs="auto" className="text-end">
          <i className={`${icon} f-30 text-white bg-brand-color-1`} />
        </Col>
      </Row>
    </MainCard>
  );
}

export default ExecutiveOverviewChart;

ExecutiveOverviewChart.propTypes = {
  title: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  currency: PropTypes.string,
  salesType: PropTypes.string,
  chartColor: PropTypes.string,
  series: PropTypes.object,
  icon: PropTypes.string
};
