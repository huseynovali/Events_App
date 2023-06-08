import './App.css';
import { useRoutes } from 'react-router-dom'
import MainRoutes from './Routes/mainRoute';


function App() {
  return (
    <div>
      {useRoutes((MainRoutes()))}
    </div>
  );
}

export default App;
