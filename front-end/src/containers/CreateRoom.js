import React, { useState } from "react";
import "./CreateRoom.scss";
import "bootstrap/dist/css/bootstrap.css";
import Navigation from "../components/Navigation";
import { InputBorderless } from "../components/Input";
import { ButtonPrimary } from "../components/Button";
import { useHistory } from "react-router-dom";

const API = "http://localhost:3001";

function CreateRoom() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState("");

    const handleOnChange = (e, save) => {
        save(e.target.value);
    };

    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        const response = await fetch(`${API}/rooms/createRoom`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, description }),
        });
        if (response.error) {
            setError(response.error);
        }
        if (!error) {
            history.push("/rooms");
        }
    };

    return (
        <>
            <Navigation />
            <section className="container-fluid recovery">
                <div className="col-8 recovery__box">
                    <p>Create new room</p>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <InputBorderless
                                type="text"
                                className="form-control"
                                id="name"
                                required
                                onChange={(e) => {
                                    handleOnChange(e, setName);
                                }}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <InputBorderless
                                type="text"
                                className="form-control"
                                id="description"
                                required
                                onChange={(e) => {
                                    handleOnChange(e, setDescription);
                                }}
                            />
                        </div>
                        <ButtonPrimary onClick={handleSubmit} type="submit">
                            Send
                        </ButtonPrimary>
                    </form>
                </div>
            </section>
        </>
    );
}

export default CreateRoom;
