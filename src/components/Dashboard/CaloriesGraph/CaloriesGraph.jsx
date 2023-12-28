import { Section } from 'components/Section/Section';
import {
  GraphWrapper,
  TitleWrapper,
  TooltipContainer,
} from './CaloriesGraph.styled';

import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
} from 'chart.js';

import { useData } from '../../../hooks/useUserData';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
);

export const CaloriesGraph = () => {
  const { statisticsCalories } = useData();

  const labels = statisticsCalories.map(entry => entry.date);

  const values = statisticsCalories.map(entry => entry.calories);

  const validValues = values.filter(item => item !== 0);

  const averageValue = Math.round(
    validValues.reduce((sum, value) => sum + value, 0) / validValues.length
  );

  const data = {
    labels,
    datasets: [
      {
        data: values,
        borderColor: 'rgba(227, 255, 168, 1)',
        borderWidth: 1,
        pointBorderColor: 'transparent',
        pointHoverBorderColor: '#0F0F0F',
        pointHoverBackgroundColor: 'rgba(227, 255, 168, 1)',
        pointRadius: 4,
        tension: 0.4,
      },
    ],
  };

  const options = {
    interaction: {
      mode: 'index',
      intersect: false,
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
        external: function (context) {
          const tooltipEl = document.getElementById('tooltip');

          if (!tooltipEl) {
            const newTooltipEl = document.createElement('div');
            newTooltipEl.id = 'tooltip';
            document.body.appendChild(newTooltipEl);
          }

          if (
            context.tooltip &&
            context.tooltip.body &&
            context.tooltip.body[0]
          ) {
            const value = context.tooltip.body[0].lines[0].trim();
            const cleanedValue = parseFloat(value.replace(/\D/g, ''));
            tooltipEl.innerHTML = `<p>${cleanedValue}</p><span>calories</span>`;
            tooltipEl.style.opacity = 1;
            tooltipEl.style.left =
              context.chart.canvas.offsetLeft + context.tooltip.caretX + 'px';
            tooltipEl.style.top =
              context.chart.canvas.offsetTop + context.tooltip.caretY + 'px';
          } else {
            tooltipEl.style.opacity = 0;
          }
        },
      },
    },
    // indexAxis: 'x',
    scales: {
      x: {
        alignToPixels: true,
        beginAtZero: false,
        align: 'center',
        ticks: {
          color: '#B6B6B6',
          offset: true,
          padding: 6,
          font: {
            family: 'Poppins',
            size: 10,
          },
        },
        grid: {
          display: true,
          color: '#292928',
          lineWidth: 1,
          drawBorder: true,
          drawOnChartArea: true,
          drawTicks: false,
        },
      },
      y: {
        alignToPixels: true,
        ticks: {
          alignToPixels: true,
          padding: 8,
          color: '#B6B6B6',
          stepSize: 1000,
          callback: function (value) {
            if (String(value).length === 1) {
              return value;
            }
            return String(value).slice(0, 1) + 'K';
          },
          font: {
            size: 10,
          },
          major: {
            enabled: true,
          },
        },
        grid: {
          color: '#292928',
          drawBorder: true,
          drawTicks: false,
          pudding: 20,
        },
      },
    },
  };

  return (
    <Section>
      <div>
        <TitleWrapper>
          <h2>Calories</h2>
          <p>
            Average value:{' '}
            <span>
              {validValues.length > 0 ? `${averageValue} cal` : '0 cal'}
            </span>
          </p>
        </TitleWrapper>
        <GraphWrapper>
          <div>
            <Line options={options} data={data} />
          </div>
        </GraphWrapper>
        <TooltipContainer id="tooltip" />
      </div>
    </Section>
  );
};
