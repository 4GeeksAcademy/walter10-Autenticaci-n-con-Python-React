import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
    const { store, actions } = useContext(Context);

    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container">
               
                <div className="ml-auto">
                   
                    {store.auth && (
                        <button 
                            className="btn btn-danger ml-2"
                            onClick={() => actions.logout()}
                            style={{
								marginLeft:"1500px",
                                padding: "10px 20px",
                                fontSize: "16px",
                                borderRadius: "5px",
                                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                                transition: "background-color 0.3s ease"
                            }}
                            onMouseEnter={(e) => e.target.style.backgroundColor = "#c82333"}
                            onMouseLeave={(e) => e.target.style.backgroundColor = "#dc3545"}
                        >
                            Salir
                        </button>
                    )}
                </div>
            </div>
        </nav>
    );
};
