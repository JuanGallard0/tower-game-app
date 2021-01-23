import React, { useState } from "react";
import { ButtonPrimary } from "../components/Button";
import { InputBorderless } from "../components/Input";
import { useAuth } from "../hooks/use-auth";
import { Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./Login.scss";
import image1 from "../images/login/login.png";
import uca from "../images/login/uca.png";
import pmi from "../images/login/pmi.png";

function Login() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const auth = useAuth();

    const handleOnChange = (e, save) => {
        save(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        const response = await auth.signin(userName, password);
        if (response.error) {
            setError(response.error);
        }
    };

    return (
        <section className="container-fluid login">
            <div className="row">
                <div className="col-md-6 login__left">
                    <img
                        src={image1}
                        alt="Login"
                        className="login__left__img"
                    />
                </div>
                <div className="col-md-6 login__right">
                    <h1 className="login__right__heading">The Tower Game</h1>
                    <p>
                        The new game to play with your friends through a
                        multi-player platform. Let's get started!
                    </p>
                    {auth.user ? <Redirect push to="/rooms" /> : ""}
                    <form onSubmit={handleSubmit}>
                        {error ? (
                            <div className="login__right__error">{error}</div>
                        ) : (
                            ""
                        )}
                        <div className="form-group">
                            <label htmlFor="userName">Username</label>
                            <InputBorderless
                                id="userName"
                                type="text"
                                className="form-control"
                                value={userName}
                                onChange={(e) => {
                                    handleOnChange(e, setUserName);
                                }}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <InputBorderless
                                id="password"
                                type="password"
                                className="form-control"
                                value={password}
                                onChange={(e) => {
                                    handleOnChange(e, setPassword);
                                }}
                            />
                        </div>
                        <ButtonPrimary
                            type="submit"
                            className="btn btn-primary"
                        >
                            Login
                        </ButtonPrimary>
                    </form>

                    <a href="">I forgot my password.</a>
                    <div className="fixed-bottom login__right__bottom">
                        <p>In collaboration with:</p>
                        <a href="http://www.uca.edu.sv/" target="_blank">
                            <img
                                src={uca}
                                alt=""
                                className="login__right__bottom__uca"
                            />
                        </a>
                        <a
                            href="https://pmief.org/library/resources/tower-game"
                            target="_blank"
                        >
                            <img
                                src={pmi}
                                alt=""
                                className="login__right__bottom__pmi"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;
