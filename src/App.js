import { Route, Routes, Navigate} from 'react-router-dom'
import Main from './pages/Main'
import Currencies from './pages/Currencies'
import Price from './pages/Price'
import './App.css';
import Nav from './components/Nav';



function App() {
  return (
    <div className="App bg-slate-700">
      <Nav/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/currencies' element={<Currencies/>}/>
        <Route path='/price/:symbol' element={<Price/>}/>
        <Route path='*' element={<Navigate to='/'/>}/> 
        {/* reads from top to bottom */}
      </Routes>
    </div>
  );
}

export default App;
