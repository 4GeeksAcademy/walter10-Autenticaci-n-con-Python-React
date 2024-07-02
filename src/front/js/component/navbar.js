import { useContext } from "react";
import { Context } from "../store/appContext";
import React from "react";
import { Link } from "react-router-dom";
import { Form } from "./Form";

export const Navbar = () => {
	const {store,action} = useContext(Context)
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">Check the Context in action</button>
						
						
						{store.auth == true ? <button> salir </button> :null }
						
					</Link>
				</div>
			</div>
		</nav>
	);
};
