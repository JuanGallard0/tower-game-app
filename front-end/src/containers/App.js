import React, { useState, useEffect } from "react";
import Login from "./Login";
import Rooms from "./Rooms";
import Game from "./Game";
import SignUp from "./SignUp";
import CreateRoom from "./CreateRoom";
import FinishGame from "./FinishGame";
import Customization from "./Customization";
import "./App.scss";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ProvideAuth } from "../hooks/use-auth";

const GlobalStyle = createGlobalStyle`
    @import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,400&family=Nunito:ital,wght@0,200;0,300;0,400;0,700;0,900;1,300&family=Roboto:ital,wght@0,100;0,300;0,400;0,700;0,900;1,400&display=swap");

    :root {
        // Colors
        --color-primary: #6F12D8;
        --color-primary-light: #9463CA;
        --color-accent: #6A6A6A;
        --color-accent-light: #CFCFCF;
        --color-back-light: #EAEBEE;
        --color-red: rgb(192, 38, 38);
        // Screen sizes
        --sm: 576px;
        --md: 768px;
        --l: 992px;
        --xl: 1200px;
        // Fonts 
        --font-lato: 'Lato', sans-serif;
        --font-nunito: 'Nunito', sans-serif;
        --font-roboto: 'Roboto', sans-serif;
    }
`;

function App() {
    return (
        <>
            <GlobalStyle />
            <ProvideAuth>
                <Router>
                    <Switch>
                        <Route path="/signup">
                            <SignUp />
                        </Route>
                        <Route path="/FinishGame">
                            <FinishGame />
                        </Route>
                        <Route path="/createroom">
                            <CreateRoom />
                        </Route>
                        <Route path="/customization">
                            <Customization />
                        </Route>
                        <Route path="/game">
                            <Game />
                        </Route>
                        <Route path="/rooms">
                            <Rooms />
                        </Route>
                        <Route path="/">
                            <Login />
                        </Route>
                    </Switch>
                </Router>
            </ProvideAuth>
        </>
    );
}

export default App;
