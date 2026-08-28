import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

// third-party
import ReactApexChart from 'react-apexcharts';

// project-imports
import useConfig from 'hooks/useConfig';
import { ThemeMode } from 'config';
import { getResolvedTheme, setResolvedTheme } from 'components/setResolvedTheme';

// chart options
const areaChartOptions = {
  chart: {
    type: 'line',
    toolbar: { show: false },
    zoom: { enabled: false }
  },
  dataLabels: { enabled: false },
  stroke: { curve: 'smooth', width: 2 },
  legend: {
    show: true,
    position: 'top',
    horizontalAlign: 'right',
    offsetX: 10,
    offsetY: 10,
    labels: { useSeriesColors: false },
    markers: { size: 6, shape: 'circle', strokeWidth: 0 },
    itemMargin: { horizontal: 10, vertical: 8 }
  },
  markers: { size: 3, strokeWidth: 2, hover: { size: 6 } },
  tooltip: { shared: true, intersect: false },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    axisBorder: { show: false },
    axisTicks: { show: false }
  }
};

// ==============================|| DASHBOARD - ACTIVITY CHART ||============================== //

export default function ActivityChart({ data }) {
  const { mode, fontFamily } = useConfig();
  const resolvedTheme = getResolvedTheme(mode);
  setResolvedTheme(mode);

  const [chartSeries, setChartSeries] = useState(data);
  const [chartOptions, setChartOptions] = useState(areaChartOptions);

  useEffect(() => {
    setChartOptions((prev) => ({
      ...prev,
      colors: ['var(--bs-primary)', 'var(--bs-info)'],
      markers: { ...prev.markers, colors: ['var(--bs-primary)', 'var(--bs-info)'], strokeColors: 'white' },
      grid: { borderColor: 'var(--bs-border-color)' },
      theme: { mode: resolvedTheme === ThemeMode.DARK ? 'dark' : 'light' }
    }));
  }, [resolvedTheme, fontFamily]);

  useEffect(() => {
    setChartSeries(data);
  }, [data]);

  return <ReactApexChart options={chartOptions} series={chartSeries} type="line" height={215} />;
}

ActivityChart.propTypes = { data: PropTypes.array };
