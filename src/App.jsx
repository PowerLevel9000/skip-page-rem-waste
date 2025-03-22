import { useSelector } from 'react-redux';
import './App.scss';

function App() {
  const { skipData, selectedSkip } = useSelector((state) => state.skipData);
  return (
    <>
      <pre>{JSON.stringify(skipData)}</pre>
      <pre>{JSON.stringify(selectedSkip)}</pre>
    </>
  );
}

export default App;
