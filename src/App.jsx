import { useSelector } from 'react-redux';
// import dumpyard from './static/dumpyard.jpg';
// import greenVector from './static/green-vector.jpg';
import './App.scss';
import SkipCard from './components/SkipCard';

function App() {
  const { skipData, selectedSkip } = useSelector((state) => state.skipData);
  return (
    <>
      <h1>Choose Your Skip Size</h1>
      <p data-testid="description">Select the skip size that best suits your needs</p>
      {/* <pre>{JSON.stringify(skipData)}</pre> */}
      <pre>{JSON.stringify(selectedSkip)}</pre>
      {/* <img src={greenVector} alt="green-vector" />
      <img src={dumpyard} alt="dumpyard" /> */}
      {skipData.map((skip) => (
        <SkipCard
          key={skip.id}
          id={skip.id}
          area={skip.area}
          description={skip.description}
        />
      ))}
    </>
  );
}

export default App;
