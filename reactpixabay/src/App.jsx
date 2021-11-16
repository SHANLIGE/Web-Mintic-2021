import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../src/pages/Login';
import Usuarios from '../src/pages/Usuarios';
import Productos from '../src/pages/Productos';
import Ventas from '../src/pages/Ventas';


const App = () =>{
  return(
    <Router>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/usuarios' element={<Usuarios/>}/>
        <Route path='/productos' element={<Productos/>} />
        <Route path='/ventas' element={<Ventas/>}/>
        <Route path='/ventas' element={<Ventas/>}/>
        </Routes>
    </Router>

    
  );
}
export default App;

