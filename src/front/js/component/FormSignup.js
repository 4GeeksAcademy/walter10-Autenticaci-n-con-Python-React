import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

export const FormSignup = () => {
  const { actions } = useContext(Context);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signupError, setSignupError] = useState(false);
  const [signupSuccess, setSignupSuccess] = useState(false);

  async function sendData(e) {
    e.preventDefault();
    const success = await actions.signup(email, password);
    if (!success) {
      setSignupError(true);
      setSignupSuccess(false);
    } else {
      setSignupError(false);
      setSignupSuccess(true);
    }
  }

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="card p-5 shadow-lg" style={{ width: '400px' }}>
        <h2 className="text-center mb-4">Registrarse</h2>
        {signupError && (
          <div className="alert alert-danger alert-dismissible fade show" role="alert">
            Error en el registro. Por favor, inténtalo de nuevo.
            <button type="button" className="close" onClick={() => setSignupError(false)} aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        )}
        {signupSuccess && (
          <div className="alert alert-success alert-dismissible fade show" role="alert">
            Usuario registrado exitosamente.
            <button type="button" className="close" onClick={() => setSignupSuccess(false)} aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        )}
        <form onSubmit={sendData}>
          <div className="form-group mb-4">
            <label htmlFor="email">Correo electrónico</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control"
              id="email"
              placeholder="Ingresa tu correo"
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
          <button type="submit" className="btn btn-primary btn-block">
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
};
