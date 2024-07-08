import React, { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Demo = () => {
    const { store, actions } = useContext(Context);

    // Redirigir si el usuario no está autenticado
    if (!store.auth) {
        return <Navigate to="/" />; // Redirige a /home si no está autenticado
    }

    const players = [
        {
            name: "Ronaldo Nazário",
            description: "Considerado uno de los mejores delanteros de todos los tiempos, ganó dos Copas del Mundo con Brasil y fue tres veces Jugador del Año de la FIFA.",
            imageUrl: "https://th.bing.com/th/id/OIP.qVYFlfl0B2H2mfh0tOBPtQHaEL?w=293&h=180&c=7&r=0&o=5&pid=1.7"
        },
        {
            name: "Mesut Özil",
            description: "Un centrocampista ofensivo alemán conocido por su visión y precisión en los pases. Ganó la Copa del Mundo en 2014.",
            imageUrl: "https://th.bing.com/th/id/OIP.I_30uzlEhmmHWsyj05atugHaEo?w=311&h=194&c=7&r=0&o=5&pid=1.7"
        },
        {
            name: "Cristiano Ronaldo",
            description: "Uno de los mejores jugadores de todos los tiempos. Ha ganado múltiples Balones de Oro y ha roto innumerables récords de goles.",
            imageUrl: "https://th.bing.com/th/id/OIP.JrzvaFS2abOa3Be5tvCLQgHaEK?w=314&h=180&c=7&r=0&o=5&pid=1.7"
        },
        {
            name: "Zinedine Zidane",
            description: "Un centrocampista francés legendario que ganó la Copa del Mundo en 1998 y la Eurocopa en 2000. También es conocido por su éxito como entrenador.",
            imageUrl: "https://th.bing.com/th/id/OIP.G1a1ooB7u3yUmdKAtYKG8wHaEo?w=260&h=180&c=7&r=0&o=5&pid=1.7"
        },
        {
            name: "Thierry Henry",
            description: "Un delantero francés prolífico, mejor conocido por su tiempo en el Arsenal. Ganó la Copa del Mundo en 1998 y la Eurocopa en 2000.",
            imageUrl: "https://th.bing.com/th/id/OIP.aV88ap71Zwh6PZK2VKCibQHaFq?w=253&h=194&c=7&r=0&o=5&pid=1.7"
        },
        {
            name: "Toni Kroos",
            description: "Un centrocampista alemán con una precisión de pase excepcional. Ha ganado múltiples títulos de la Liga de Campeones y la Copa del Mundo en 2014.",
            imageUrl: "https://th.bing.com/th/id/OIP.mYz81hghPvgoKVfdxIEaNgHaEo?w=316&h=197&c=7&r=0&o=5&pid=1.7"
        }
    ];

    return (
        <div className="container">
            <h1 className="text-center my-4">Estás Logueado</h1>
            <h2 className="text-center mb-5">Aquí te muestro información de 6 leyendas del fútbol</h2>
            <div className="row">
                {players.map((player, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <div className="card h-100">
                            <img src={player.imageUrl} className="card-img-top" alt={player.name} />
                            <div className="card-body">
                                <h5 className="card-title">{player.name}</h5>
                                <p className="card-text">{player.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
           
        </div>
    );
};
