import { useSelector } from 'react-redux';
import dumpyard from './static/dumpyard.jpg';
import greenVector from './static/green-vector.jpg';
import './App.scss';

function App() {
  const { skipData, selectedSkip } = useSelector((state) => state.skipData);
  return (
    <>
      <pre>{JSON.stringify(skipData)}</pre>
      <pre>{JSON.stringify(selectedSkip)}</pre>
      <img src={greenVector} alt="green-vector" />
      <img src={dumpyard} alt="dumpyard" />
    </>
  );
}

export default App;
