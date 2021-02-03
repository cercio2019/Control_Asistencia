import React from "react";
import "./login.css";

class Login extends React.Component{


    render(){
        return(
            <div  className="container mt-5 ">
                <div className="row justify-content-center pt-5 mt-5 mr-1">
                    <div className="col-md-6 bg-dark formulario">

                        <form action="" >
                            <div className="form-group text-center pt-3 " >
                                    <h2 className="text-white" >INICIAR SESION</h2>
                            </div>
                            <div className="form-group mx-sm-4" >
                                <input  type="text"  className="form-control"  placeholder="Ingrese su cedula" />
                            </div>
                            <div className="form-group mx-sm-4 pb-3 " >
                                <input  type="password"  className="form-control"  placeholder="Ingrese contraseña" />
                            </div>
                            <div className="form-group  mx-sm-4 pb-5 " >
                                <button  className="btn btn-primary btn-block" >
                                    Ingresar
                                </button>
                            </div>                  
                        </form>

                    </div>
                </div>
            </div>
        )
    }

}

export default Login;