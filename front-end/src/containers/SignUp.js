import React, { useState } from "react";
import styled from "styled-components";
import { useAuth } from "../hooks/use-auth";
import { Link, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./SignUp.scss";
import Navigation from "../components/Navigation";

const Form = styled.form`
    display: flex;
    width: 80%;
    margin: 5% auto;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0px 0px 11px 1px #00000070;
    padding: 2rem;
    flex-direction: column;
`;

const Button = styled.button`
    background-color: var(--color-primary);
    color: var(--color-white);
    margin-top: 1rem;
    padding: 1rem;
    font-size: 1em;
    border: none;
    border-radius: 5px;
`;

/**
 * Registrar a un usuario en el sitio
 **/
const SignUp = () => {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassowrd] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const auth = useAuth();

    const handleOnChange = (e, save) => {
        save(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess(false);
        const response = await auth.createuser(userName, email, password);
        if (response.error) {
            setError(response.error);
        } else {
            setSuccess(response.success);
        }
    };

    return (
        <section className="signup">
            <div className="prueba">
                <Navigation />
                <div class="col-8 recovery-box">
                    <form class="center">
                        <>
                            <Form onSubmit={handleSubmit}>
                                {error ? <div>error</div> : ""}
                                {success ? (
                                    <div>
                                        Sign Up succesfull. Please Sign In
                                        <Redirect to="/rooms">
                                            {" "}
                                            Sign In
                                        </Redirect>
                                    </div>
                                ) : (
                                    ""
                                )}
                                <div class="form-group">
                                    <h2>SignUp</h2>
                                    <label for="password">
                                        Write your user name
                                    </label>
                                    <input
                                        class="form-control input-borderless"
                                        id="userName"
                                        type="text"
                                        value={userName}
                                        onChange={(e) => {
                                            handleOnChange(e, setUserName);
                                        }}
                                        required
                                    />
                                </div>
                                <div class="form-group">
                                    <label for="password">
                                        Write your E-mail
                                    </label>
                                    <input
                                        class="form-control input-borderless"
                                        id="email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => {
                                            handleOnChange(e, setEmail);
                                        }}
                                        required
                                    />
                                </div>
                                <div class="form-group">
                                    <label for="password">Password</label>
                                    <input
                                        class="form-control input-borderless"
                                        id="password"
                                        type="password"
                                        value={password}
                                        onChange={(e) => {
                                            handleOnChange(e, setPassowrd);
                                        }}
                                        required
                                        min="4"
                                    />
                                </div>
                                <Button
                                    onClick={handleSubmit}
                                    type="submit"
                                    className="btn"
                                >
                                    Sign Up!
                                </Button>
                            </Form>
                        </>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default SignUp;

