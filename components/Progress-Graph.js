import { useTheContext } from '../hocs/context-provider';
import 'chart.js/auto';
import { Line } from 'react-chartjs-2';

export const ProgressGraph = () => {
  const { studentProgress } = useTheContext();

  const levelBar = (len, pts) => {
    if (len < 1) return [];
    const arr = new Array(len).fill(null);
    arr[0] = pts;
    arr[len] = pts;
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
        label: 'Baseline',
        backgroundColor: 'red',
        borderColor: 'red',
        borderWidth: 2,
        data: studentProgress.map((obj) => obj.goal),
        spanGaps: true,
        pointRadius: 0,
      },
      {
        id: 3,
        label: 'Level 1',
        backgroundColor: 'blue',
        borderColor: 'blue',
        borderWidth: 2,
        data: levelBar(studentProgress.length - 1, 100),
        spanGaps: true,
        pointRadius: 0,
      },
      {
        id: 4,
        label: 'Level 2',
        backgroundColor: 'blue',
        borderColor: 'blue',
        borderWidth: 2,
        data: levelBar(studentProgress.length - 1, 200),
        spanGaps: true,
        pointRadius: 0,
      },
      {
        id: 5,
        label: 'Level 3',
        backgroundColor: 'blue',
        borderColor: 'blue',
        borderWidth: 2,
        data: levelBar(studentProgress.length - 1, 300),
        spanGaps: true,
        pointRadius: 0,
      },
    ],
  };

  return (
    <div>
      {studentProgress.length < 1 ? (
        <h1>No Data</h1>
      ) : (
        <div>
          <Line datasetIdKey="id" data={chartData} />
        </div>
      )}
    </div>
  );
};
