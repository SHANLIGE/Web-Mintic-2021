import React from 'react'
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';
import Login from './pages/Login';
import Productos from './pages/Productos'
import Usuarios from './pages/Usuarios';
import Ventas from './pages/Ventas'


const App = () =>{
  return(
    <Router>
      <Routes>
          <Route exact path="/login" component ={Login} />
          <Route exact path="/usuarios" component ={Usuarios} />
          <Route exact path= "/ventas" component ={Ventas} />
          <Route exact path= "/productos" component ={Productos} />
      </Routes>    
    </Router>

    
  );
}
export default App;

