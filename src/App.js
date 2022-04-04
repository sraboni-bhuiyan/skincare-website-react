import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
      </Routes>
    </div>
  );
}

export default App;
