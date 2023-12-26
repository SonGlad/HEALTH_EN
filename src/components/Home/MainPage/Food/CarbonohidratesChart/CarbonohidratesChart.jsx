import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { ChartWrapper, InfoWrapper } from './CarbonohidratesChart.styled';
import { useData } from 'hooks/useUserData';


ChartJS.register(ArcElement, Tooltip, Legend);


export const CarbonohidratesChart = () => {
  const {dailyCarbonohidratesLimit, dailyTotalCarbonohidretes} = useData();


  const goalQuantity = dailyCarbonohidratesLimit;
  const addedQuantity = Math.round(dailyTotalCarbonohidretes);
  const leftQuantity = Math.max(0, goalQuantity - addedQuantity);
  const leftPercent = Math.round((addedQuantity * 100) / goalQuantity);

  const data = {
    datasets: [
      {
        data: [addedQuantity, leftQuantity],
        backgroundColor: ['rgba(255, 196, 247, 1)', 'transparent'],
        borderWidth: 0,
        borderRadius: addedQuantity > 0 && addedQuantity < 100 ? 12 : 0,
      },
    ],
  };

  const options = {
    cutout: '80%',
    hover: { mode: null },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };

  return (
    <>
      <ChartWrapper>
        <Doughnut data={data} options={options} />
        <div>
          <p>{leftPercent}%</p>
        </div>
      </ChartWrapper>

      <div>
        <h3>Carbonohidrates</h3>
        <InfoWrapper>
          <p>
            Goal: <span>{goalQuantity}</span>
          </p>
          <p>
            left:<span>{leftQuantity}</span>
          </p>
        </InfoWrapper>
      </div>
    </>
  );
};
