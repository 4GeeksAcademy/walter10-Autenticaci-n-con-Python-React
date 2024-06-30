import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	return (
	  <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
		<div className="card p-5 shadow-lg" style={{ width: '400px' }}>
		  <h2 className="text-center mb-4">Iniciar sesión</h2>
		  <form>
			<div className="form-group">
			  <label htmlFor="username">Usuario</label>
			  <input
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
  