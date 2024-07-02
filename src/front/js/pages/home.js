import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Form } from "../component/Form";

export const Home = () => {
	const {store,action} = useContext(Context)
	
	return (
	  <div>
		{store.auth == true ?'estas logueado' :'no etas loguead' }
		<h1>formulario de home con un comopnente form importado</h1>
		<Form /> 
	  </div>
	);
  };
  