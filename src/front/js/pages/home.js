import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Form } from "../component/Form";
import { Navigate } from "react-router-dom";
import { FormSignup } from "../component/FormSignup";

export const Home = () => {
  const { store, actions } = useContext(Context);

  const handleLoginAttempt = async (email, password) => {
    await actions.login(email, password);
  };

  return (
    <div className="container">
      {store.auth ? <Navigate to="/demo" /> : <Form onLoginAttempt={handleLoginAttempt} />}
      
    </div>
  );
};
