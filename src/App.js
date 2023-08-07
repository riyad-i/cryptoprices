import { Route, Routes} from 'react-router-dom'
import Main from './pages/Main'
import Currencies from './pages/Currencies'
import Price from './pages/Price'
import './App.css';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/currencies' element={<Currencies/>}/>
        <Route path='/price' element={<Price/>}/>
      </Routes>
    </div>
  );
}

export default App;
