import './App.scss';
import { Route, Routes } from 'react-router-dom' 
import Main from './pages/main.js'

function App() {
  return (
    <body className="App">
      <Routes>
        <Route path='/' element={<Main />}/>
      </Routes> 
    </body>
  );
}

export default App;
