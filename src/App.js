import './App.scss';
import { Route, Routes } from 'react-router-dom';

//Pages
import Main from './pages/main.js'
import AccountCreated from './pages/accountCreated';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/accountCreated' element={<AccountCreated />} />
      </Routes> 
    </div>
  );
}

export default App;
