import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

// react-bootstrap
import Stack from 'react-bootstrap/Stack';

// third-party
import ReactApexChart from 'react-apexcharts';

// project-imports
import DropDown from 'sections/dashboard/finance/DropDown';
import MainCard from 'components/MainCard';
import useConfig from 'hooks/useConfig';
import { ThemeMode } from 'config';
import { getResolvedTheme, setResolvedTheme } from 'components/setResolvedTheme';

// ==============================|| TRANSACTIONS CHART ||============================== //

export default function TransactionsChart({ title, dateRange, amount, description, chartColor = '', series = [] }) {
  const { mode, fontFamily } = useConfig();
  const resolvedTheme = getResolvedTheme(mode);
  setResolvedTheme(mode);

  const transactionsChartOptions = useMemo(
    () => ({
      chart: {
        type: 'line',
        height: 60,
        background: 'transparent',
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight',
        lineCap: 'round',
        width: 3
      },
      series,
      tooltip: {
        theme: 'light',
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function () {
              return '';
            }
          }
        },
        marker: {
          show: false
        }
      }
    }),
    [series]
  );

  const [options, setOptions] = useState(transactionsChartOptions);

  useEffect(() => {
    setOptions({
      ...transactionsChartOptions,
      chart: { ...transactionsChartOptions.chart, fontFamily: fontFamily },
      colors: [chartColor],
      theme: { mode: resolvedTheme === ThemeMode.DARK ? 'dark' : 'light' }
    });
  }, [transactionsChartOptions, resolvedTheme, fontFamily, chartColor]);

  return (
    <MainCard>
      <Stack direction="horizontal" className="align-items-center justify-content-between mb-3">
        <div>
          <h6 className="mb-0">{title}</h6>
          <p className="mb-0 text-muted">{dateRange}</p>
        </div>
        <DropDown className="avatar-xs" />
      </Stack>

      <ReactApexChart options={options} series={series} type="line" height={60} />

      <Stack direction="horizontal" gap={2} className=" align-items-center justify-content-between mt-3">
        <h4 className="mb-0">
          <small className="text-muted">$</small>
          {amount}
        </h4>
        <p className="mb-0 text-muted text-sm">{description}</p>
      </Stack>
    </MainCard>
  );
}

TransactionsChart.propTypes = {
  title: PropTypes.string,
  dateRange: PropTypes.string,
  amount: PropTypes.string,
  description: PropTypes.string,
  chartColor: PropTypes.string,
  series: PropTypes.object
};
