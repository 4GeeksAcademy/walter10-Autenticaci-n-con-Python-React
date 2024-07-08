import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import "../../styles/home.css";

export const Form = ({ onLoginAttempt }) => {
  const { store } = useContext(Context);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate();

  async function sendData(e) {
    e.preventDefault();
    const success = await onLoginAttempt(email, password);
    if (!success) {
      setLoginError(true);
    } else {
      setLoginError(false);
    }
  }

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh', marginTop:"-20px" }}>
      <div className="card p-5 shadow-lg" style={{ width: '400px' }}>
        <h2 className="text-center mb-4">Iniciar sesión</h2>
        {loginError && (
          <div className="alert alert-danger alert-dismissible fade show" role="alert">
            Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.
            <button type="button" className="close" onClick={() => setLoginError(false)} aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        )}
        <form onSubmit={sendData}>
          <div className="form-group mb-4">
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
          <div className="form-group mb-4">
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

          <div className="row">
            <div className="col-md-6">
              <button type="submit" className="btn btn-primary btn-block">
                Iniciar sesión
              </button>
            </div>
            <div className="col-md-6 text-right">
              <button type="button" className="btn btn-secondary btn-block" onClick={() => navigate("/signup")}>
                Registrarse
              </button>
            </div>
          </div>

          <div className="text-center mt-3">
            <a href="#" className="text-primary">
              ¿Olvidaste tu contraseña?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
