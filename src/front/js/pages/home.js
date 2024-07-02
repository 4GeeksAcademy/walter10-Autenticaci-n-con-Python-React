import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Form } from "../component/Form";
import { Navigate } from "react-router-dom";

export const Home = () => {
	const {store,action} = useContext(Context)
	console.log('se cargo home')
	
	return (
	  <div>
		<h1> homee</h1>
		{store.auth == true ? <Navigate to={"/demo"}/> :<Form /> }
		
	  </div>
	);
  };
  