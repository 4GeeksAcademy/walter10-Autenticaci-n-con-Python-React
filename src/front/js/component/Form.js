import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Form = () => {
  const {store,actions} = useContext(Context)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function senData(e) {
    e.preventDefault();
    console.log('sen Data function called');
    console.log(email);
    console.log(password);  // This will log the password as well
    actions.login(email,password)

  }

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="card p-5 shadow-lg" style={{ width: '400px' }}>
        <h2 className="text-center mb-4">Iniciar sesión</h2>
        <form onSubmit={senData}>
          <div className="form-group">
            <label htmlFor="username">Usuario</label>
            <input 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              type="text" 
              className="form-control" 
              id="username" 
              placeholder="Ingresa tu usuario" 
              required 
            />
          </div>
          <div className="form-group maginB">
            <label htmlFor="password">Contraseña</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="form-control"
              id="password"
              placeholder="Ingresa tu contraseña"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block maginB">
            Iniciar sesión
          </button>
        </form>
        <div className="text-center mt-3">
          <a href="#" className="text-primary">
            ¿Olvidaste tu contraseña?
          </a>
        </div>
      </div>
    </div>
  );
};
