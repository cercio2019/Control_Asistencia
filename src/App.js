import React from 'react';
import './App.css';
import Dashboard  from './Dashboard/dashboard';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './Login/login';
import Instalacion from './instalacion/instalacion';

class App extends React.Component{

   render() {
    return (
      <div className="app">
              <Router>
                  <Route  exact path="/" component={Login} />
                  <Route  exact path="/instalacion" component={Instalacion}/>
                  <Route  exact path="/dashboard" component={Dashboard} />
                  <Route  exact path="/empleados" component={Dashboard} />
                  <Route exact path="/registrar" component={Dashboard} />
                  <Route  exact path="/historial" component={Dashboard} />
                  <Route  exact path="/usuarios" component={Dashboard} />
                  <Route  exact path="/configuracion" component={Dashboard} />
              </Router>
      </div>
    );
  }

}

export default App;
