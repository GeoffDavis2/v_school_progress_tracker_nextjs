import { useTheContext } from '../hocs/context-provider';

export const ProgressGrid = () => {
  const { studentProgress } = useTheContext();
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    border: '1px solid gray',
    padding: '10px',
    margin: '10px',
    borderRadius: '5px',
    justifyItems: 'center',
  };

  return (
    <>
      <div style={{ ...gridStyle, backgroundColor: 'black', color: 'white' }}>
        <div>Dates</div>
        <div>Goal</div>
        <div>Points</div>
      </div>
      {studentProgress?.map((obj, i) => (
        <div style={gridStyle} key={i}>
          <div>{obj.dt}</div>
          <div>{obj.goal}</div>
          <div>{obj.pts}</div>
        </div>
      ))}
    </>
  );
};
