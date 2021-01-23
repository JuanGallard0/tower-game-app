import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Customization.scss";
import Navigation from "../components/Navigation";
import "./Login.scss";
import image from "../images/rooms/room1.png";




function Customization() {
    return (
        <section className="customization">
            <div className="prueba">
                <Navigation />
                <div className="container-fluid">
                    <div class="customization-dark col-9 mx-auto">
                        <h2>Dark Mode</h2>

                        <div class="customization-dark-dialog">
                            <input type="checkbox" checked data-toggle="toggle" data-onstyle="dark"></input>
                        
                            <p>This mode will help you reduce the strain on your eyes.</p>
                        </div>
                    </div>
                    

                    <h2 class="col-9 mx-auto">Game Interface</h2>

                    <div class="row text-center padding">
                        <div class="col-xs-12 col-sm-6 col-md-4">
                            <img src={image} alt=""></img>

                            <h3>Classic Mode</h3>
                        </div>


                        <div class="col-xs-12 col-sm-6 col-md-4">
                            <img src={image}
                                alt=""></img>

                            <h3>Vibrant Mode</h3>
                        </div>

                        <div class="col-sm-12 col-md-4">
                            <img src={image} alt=""></img>

                            <h3>Soft Mode</h3>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Customization;