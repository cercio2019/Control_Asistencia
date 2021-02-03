import React from 'react';
import { NavLink } from 'react-router-dom';
import './menu.css';

class Menu extends React.Component{


    render() {
        return (
                <div className="bg-dark" id="sidebar-container" >
                    <div className="logo">
                        <h4 className="text-light" >Security-Assistan</h4>
                    </div>
                    <div className="Menu">
                        <NavLink to="/dashboard" className="d-block text-light p-3" activeClassName="active" > <i class="fas fa-chart-bar mr-2 lead"></i> Dashboard </NavLink>
                        <NavLink to="/empleados" className="d-block text-light p-3" activeClassName="active" > <i class="fas fa-user-friends mr-2 lead"></i> Empleados </NavLink>
                        <NavLink to="/historial" className="d-block text-light p-3" activeClassName="active" > <i class="far fa-calendar-alt mr-2 lead "></i> Historial </NavLink>
                        <NavLink to="/usuarios"  className="d-block text-light p-3" activeClassName="active" > <i class="fas fa-user mr-2 lead"></i> Usuarios</NavLink>
                        <NavLink to="/configuracion" className="d-block text-light p-3" activeClassName="active" > <i class="fas fa-cogs mr-2 lead"></i> Configuracion</NavLink>
                        <NavLink to="/cerrar" className="d-block text-light p-3" activeClassName="active" > <i class="fas fa-power-off mr-2 lead"></i> Salir</NavLink>
                    </div>
                </div>
        )
    }
}

export default Menu;