import React from "react";
import FormEmpresa from "./form_empresa";


class Instalacion extends React.Component{

    render(){
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                    <h3 className="text-light" >Security-Assistan</h3>
                </nav>
                <div className="container mt-5 ">
                    <div className="row" >
                        <div className="mx-auto" >
                        <h2 className="text-center" >Registrar empresa</h2>
                        </div>
                    </div>
                <div className="row" >
                    <div className="col-md-6 mx-auto" >
                        <div className="card" >
                            <div className="card-body">
                                 <FormEmpresa />
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }

}

export default Instalacion;