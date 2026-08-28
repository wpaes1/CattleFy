import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

// third-party
import ReactApexChart from 'react-apexcharts';

// project-imports
import useConfig from 'hooks/useConfig';
import { ThemeMode } from 'config';
import { getResolvedTheme, setResolvedTheme } from 'components/setResolvedTheme';

// chart options
const lineChartOptions = {
  chart: {
    type: 'line',
    zoom: { enabled: false },
    toolbar: { show: false }
  },
  xaxis: { axisTicks: { show: false }, axisBorder: { show: false } },
  yaxis: { stepSize: 200 },
  plotOptions: { bar: { borderRadius: 0 } },
  dataLabels: { enabled: false },
  tooltip: { x: { show: false } },
  grid: { show: false }
};

// ==============================|| DASHBOARD - EARNING CHART ||============================== //

export default function EarningChart({ data }) {
  const { mode, fontFamily } = useConfig();
  const resolvedTheme = getResolvedTheme(mode);
  setResolvedTheme(mode);

  const [options, setOptions] = useState(lineChartOptions);

  useEffect(() => {
    setOptions((prevState) => ({
      ...prevState,
      chart: { ...prevState.chart, fontFamily: fontFamily },
      xaxis: {
        ...prevState.xaxis,
        categories: [2018, 2019, 2020, 2021, 2022, 2023]
      },

      colors: ['var(--bs-warning)'],
      theme: { mode: resolvedTheme === ThemeMode.DARK ? 'dark' : 'light' }
    }));
  }, [resolvedTheme, fontFamily]);

  const [series, setSeries] = useState(data);

  useEffect(() => {
    setSeries(data);
  }, [data]);

  return <ReactApexChart options={options} series={series} type="line" height={225} />;
}

EarningChart.propTypes = { data: PropTypes.array };
