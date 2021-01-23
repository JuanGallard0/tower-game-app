import React from "react";
import { useHistory } from "react-router-dom";
import Navigation from "../components/Navigation";
import Room from "../components/Room";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Rooms.scss";

const API = "http://localhost:3001";

function Rooms() {
    const [rooms, setRooms] = useState(null);

    useEffect(() => {
        fetch(`${API}/rooms`)
            .then((response) => response.json())
            .then((data) => setRooms(data));
    }, []);

    const history = useHistory();

    const handleClick = () => {
        history.push("/createroom");
    };

    return (
        <section className="rooms">
            <Navigation />
            <div className="container-fluid">
                <button
                    onClick={handleClick}
                    className="col-10 mx-auto rooms__room__right create__right"
                >
                    <h2>Create a new room</h2>
                    <p>Set up a new game rooms from scratch</p>
                </button>
                {rooms?.map(({ name, description }) => (
                    <Room name={name} description={description} />
                ))}
            </div>
        </section>
    );
}

export default Rooms;
