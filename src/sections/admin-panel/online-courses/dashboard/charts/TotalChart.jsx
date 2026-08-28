import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

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
    zoom: { enabled: false },
    sparkline: { enabled: true }
  },
  plotOptions: { bar: { borderRadius: 0 } },
  dataLabels: { enabled: false },
  markers: { hover: { size: 5 } },
  tooltip: { x: { show: false } },
  grid: { show: false },
  stroke: { width: 2 }
};

// ==============================|| DASHBOARD - TOTAL CARD CHART ||============================== //

export function TotalChart({ color, data }) {
  const { mode, fontFamily } = useConfig();
  const resolvedTheme = getResolvedTheme(mode);
  setResolvedTheme(mode);

  const [options, setOptions] = useState(areaChartOptions);

  useEffect(() => {
    setOptions((prevState) => ({
      ...prevState,
      chart: { ...prevState.chart, fontFamily: fontFamily },
      colors: [color],
      theme: { mode: resolvedTheme === ThemeMode.DARK ? 'dark' : 'light' }
    }));
  }, [color, resolvedTheme, fontFamily]);

  const [series] = useState([{ name: 'Orders', data }]);

  return <ReactApexChart options={options} series={series} type="line" height={48} />;
}

TotalChart.propTypes = { color: PropTypes.string, data: PropTypes.array };
