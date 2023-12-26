import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { ChartWrapper, InfoWrapper } from './FatChart.styled';
import { useData } from 'hooks/useUserData';


ChartJS.register(ArcElement, Tooltip, Legend);


export const FatChart = () => {
  const {dailyFatLimit, dailyTotalFat} = useData();


  const goalQuantity = dailyFatLimit;
  const addedQuantity = Math.round(dailyTotalFat);
  const leftQuantity = Math.max(0, goalQuantity - addedQuantity);
  const leftPercent = Math.round((addedQuantity * 100) / goalQuantity);

  const data = {
    datasets: [
      {
        data: [addedQuantity, leftQuantity],
        backgroundColor: ['rgba(182, 182, 182, 1)', 'transparent'],
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
        <h3>Fat</h3>
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
