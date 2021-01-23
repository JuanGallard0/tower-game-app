import "../containers/Rooms.scss";
import { useHistory } from "react-router-dom";
const API = "http://localhost:3001";

function Room({ name, description }) {
    const history = useHistory();

    const handleClick = () => {
        history.push("/game");
    };

    const handleDelete = () => {
        const response = fetch(`${API}/rooms/deleteroom/${name}`, {
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            method: "DELETE",
        }).then((response) => response.json());
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <button
                    onClick={handleDelete}
                    className="new__left rooms__room__left"
                >
                    Delete
                </button>
                <button
                    onClick={handleClick}
                    className="col-9 mx-auto rooms__room__right new__right"
                >
                    <h2>{name}</h2>
                    <p>{description}</p>
                </button>
            </div>
        </div>
    );
}

export default Room;
