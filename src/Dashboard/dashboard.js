import React from "react";
import './dashboard.css';
import Menu  from '../Menu/menu';
import {Switch, Route} from "react-router-dom";
import Monitoreo from "../Monitoreo/monitoreo";
import Empleados from "../Registros/empleados";
import FormEmpleado from "../Registros/formEmpleado";
import Historial from "../Historial/historial";
import Usuarios from "../Usuarios/usuarios";
import Configuracion from "../Configuracion/configuracion";
import User from "./user";


class Dashboard extends React.Component{

    render() {
        return (     
                <Switch>
                <div className="d-flex">
                <Menu/>
                <div className="w-100">
                    <div id="content">
                        <section className="py-3" >
                            <User/>                      
                              <div>
                                <Route exact path="/dashboard"  component={Monitoreo}  />            
                                <Route exact path="/empleados"  component={Empleados}  />
                                <Route exact path="/registrar" component={FormEmpleado} />
                                <Route  exact path="/historial" component={Historial} />
                                <Route  exact path="/usuarios" component={Usuarios} />
                                <Route  exact path="/configuracion" component={Configuracion} />
                              </div>
                        </section>
                    </div>
                </div>
            </div>
            </Switch>
        );
      }
}

export default Dashboard;