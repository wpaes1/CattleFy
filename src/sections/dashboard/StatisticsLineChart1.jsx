import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

// third-party
import ReactApexChart from 'react-apexcharts';

// project-imports
import MainCard from 'components/MainCard';
import useConfig from 'hooks/useConfig';
import { ThemeMode } from 'config';
import { getResolvedTheme, setResolvedTheme } from 'components/setResolvedTheme';

// chart-options
const stationLineChart1Options = {
  chart: {
    type: 'line',
    height: 300,
    zoom: {
      enabled: false
    },
    toolbar: {
      show: false
    }
  },
  dataLabels: {
    enabled: false
  },
  colors: ['#fff'],
  fill: {
    type: 'solid'
  },
  plotOptions: {
    bar: {
      columnWidth: '30%'
    }
  },
  xaxis: {
    categories: ['2019', '2020', '2021'],
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    labels: {
      style: {
        colors: '#fff'
      }
    }
  },
  yaxis: {
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    },
    crosshairs: {
      width: 0
    },
    labels: {
      show: false
    }
  },
  grid: {
    padding: {
      bottom: 0,
      left: 10
    },
    xaxis: {
      lines: {
        show: false
      }
    },
    yaxis: {
      lines: {
        show: false
      }
    }
  },
  markers: {
    size: 5,
    colors: '#04a9f5',
    strokeWidth: 2,
    hover: {
      size: 7
    }
  },
  tooltip: {
    fixed: {
      enabled: false
    },
    x: {
      show: false
    },
    y: {
      title: {
        formatter: function () {
          return 'Statistics :';
        }
      }
    },
    marker: {
      show: false
    }
  }
};

// =============================|| ANALYTICS - STATISTICS LINE CHART - 1 ||============================== //

export default function StatisticsLineChart1({ height = 300 }) {
  const { mode, fontFamily } = useConfig();
  const resolvedTheme = getResolvedTheme(mode);
  setResolvedTheme(mode);

  const [series] = useState([
    {
      data: [45, 30, 55]
    }
  ]);

  const [options, setOptions] = useState(stationLineChart1Options);

  useEffect(() => {
    setOptions({
      ...stationLineChart1Options,
      chart: { ...stationLineChart1Options.chart, fontFamily: fontFamily },
      theme: { mode: resolvedTheme === ThemeMode.DARK ? 'dark' : 'light' }
    });
  }, [fontFamily, resolvedTheme]);

  return (
    <MainCard headerClassName="border-0" title={<p className="mb-0 text-white">Statistics</p>} className="bg-primary">
      <ReactApexChart options={options} series={series} type="line" height={height} />
    </MainCard>
  );
}

StatisticsLineChart1.propTypes = { height: PropTypes.number };
