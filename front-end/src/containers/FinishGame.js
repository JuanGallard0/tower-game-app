import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./FinishGame.scss";
import { useHistory } from "react-router-dom";

function FinishGame() {
    const history = useHistory();

    const handleClick = () => {
        history.push("/rooms");
    };

    return (
        <section className="f_game_card">
            <div className="f_game_txt">
                <h2>There are still active tables</h2>
                <p class="endGame_txt">
                    Are you sure you want to end the games?
                </p>
                <button onClick={handleClick} class="btn_endGame">
                    Finish
                </button>
            </div>
        </section>
    );
}

export default FinishGame;
