import { Homepage } from './pages/homepage';
import './App.css';
import { Login } from './pages/login';
import { Register } from './pages/register';
import {Header} from './pages/header';
import { GoogleSign } from './pages/google-sign';
import { Dealers } from './pages/dealers';
import { BrowserRouter , Routes, Route} from 'react-router-dom';


function App() {
  return (
      
<BrowserRouter>

<Routes>
  <Route path='/' element ={<Homepage/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/register' element={<Register/>}/>
  <Route path= 'dealers' element={<Dealers/>}/>
 
</Routes>
</BrowserRouter>
   
  );
}

export default App;
