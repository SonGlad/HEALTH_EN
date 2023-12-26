import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { ChartWrapper } from './CaloriesChart.styled';
import { useData } from 'hooks/useUserData';


ChartJS.register(ArcElement, Tooltip, Legend);


export const CaloriesChart = () => {
  const {dailyCaloriesLimit, dailyTotalCalories} = useData();


  const goalQuantity = dailyCaloriesLimit;
  const addedQuantity = dailyTotalCalories;
  const leftQuantity = goalQuantity - addedQuantity;

  const data = {
    datasets: [
      {
        data: [addedQuantity, leftQuantity],
        backgroundColor: ['rgba(69, 255, 188, 1)', 'transparent'],
        borderWidth: 0,
        borderRadius: addedQuantity === 0 ? 0 : 12,
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
          <p>{addedQuantity !== null ? addedQuantity : 0}</p>
          <span>calories</span>
        </div>
      </ChartWrapper>
    </>
  );
};
