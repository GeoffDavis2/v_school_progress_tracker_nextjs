import { useTheContext } from '../hocs/context-provider';
import 'chart.js/auto';
import { Line } from 'react-chartjs-2';

export default function ProgressCharts() {
  const { studentProgress } = useTheContext();
  const goalLine = (len, tot) => {
    if (len < 1) return [];
    const arr = new Array(len).fill(null);
    arr[0] = 0;
    arr[len] = tot;
    return arr;
  };

  const chartData = {
    labels: studentProgress.map((obj) => obj.dt),
    datasets: [
      {
        id: 1,
        label: 'Actual',
        backgroundColor: 'green',
        borderColor: 'green',
        borderWidth: 2,
        data: studentProgress.map((obj) => obj.pts),
        spanGaps: true,
        pointRadius: 0,
      },
      {
        id: 2,
        label: 'Goal',
        backgroundColor: 'red',
        borderColor: 'red',
        borderWidth: 2,
        data: goalLine(studentProgress.length - 1, 440),
        spanGaps: true,
        pointRadius: 0,
      },
    ],
  };

  const chartOptions = {
    legend: {
      display: true,
      position: 'right',
    },
    maintainAspectRatio: true,
    // responsive: false,
  };
  return (
    <div>
      {studentProgress.length < 1 ? (
        <h1>No Data</h1>
      ) : (
        <div>
          <h2>Total Progress for {studentProgress[0].studentName}</h2>
          <Line datasetIdKey="id" data={chartData} options={chartOptions} />
        </div>
      )}
    </div>
  );
}
