import React from "react";
import Matter from "matter-js";
import "./Game.scss";
import { Link } from "react-router-dom";

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        var Engine = Matter.Engine,
            Render = Matter.Render,
            World = Matter.World,
            Bodies = Matter.Bodies,
            Mouse = Matter.Mouse,
            MouseConstraint = Matter.MouseConstraint;

        var engine = Engine.create({
            // positionIterations: 20
        });

        var render = Render.create({
            element: this.refs.scene,
            engine: engine,
            options: {
                width: 1200,
                height: 600,
                wireframes: false,
            },
        });
        // Gravity
        //engine.world.gravity.y = 0;

        // Triangles
        var t1x = 200,
            t1y = 120;
        var Triangle1 = Bodies.polygon(t1x, t1y, 3, 30, {
            render: {
                fillStyle: "#D81159",
                strokeStyle: "white",
                lineWidth: "2",
            },
        });
        var Triangle2 = Bodies.polygon(175, 120, 3, 30, {
            render: {
                fillStyle: "#D81159",
                strokeStyle: "white",
                lineWidth: "2",
            },
        });
        var Triangle3 = Bodies.polygon(150, 145, 3, 30, {
            render: {
                fillStyle: "#D81159",
                strokeStyle: "white",
                lineWidth: "2",
            },
        });
        var Triangle4 = Bodies.polygon(175, 145, 3, 30, {
            render: {
                fillStyle: "#D81159",
                strokeStyle: "white",
                lineWidth: "2",
            },
        });
        var Triangle5 = Bodies.polygon(175, 145, 3, 30, {
            render: {
                fillStyle: "#D81159",
                strokeStyle: "white",
                lineWidth: "2",
            },
        });
        var Triangle6 = Bodies.polygon(175, 145, 3, 30, {
            render: {
                fillStyle: "#D81159",
                strokeStyle: "white",
                lineWidth: "2",
            },
        });
        // Bars
        var Bar1 = Bodies.rectangle(130, 420, 10, 110, {
            render: {
                fillStyle: "#FFBC42",
                strokeStyle: "white",
                lineWidth: "2",
            },
        });
        var Bar2 = Bodies.rectangle(150, 420, 10, 110, {
            render: {
                fillStyle: "#FFBC42",
                strokeStyle: "white",
                lineWidth: "2",
            },
        });
        var Bar3 = Bodies.rectangle(170, 420, 10, 110, {
            render: {
                fillStyle: "#FFBC42",
                strokeStyle: "white",
                lineWidth: "2",
            },
        });
        var Bar4 = Bodies.rectangle(190, 420, 10, 110, {
            render: {
                fillStyle: "#FFBC42",
                strokeStyle: "white",
                lineWidth: "2",
            },
        });
        var Bar5 = Bodies.rectangle(210, 420, 10, 110, {
            render: {
                fillStyle: "#FFBC42",
                strokeStyle: "white",
                lineWidth: "2",
            },
        });
        var Bar6 = Bodies.rectangle(110, 420, 10, 110, {
            render: {
                fillStyle: "#FFBC42",
                strokeStyle: "white",
                lineWidth: "2",
            },
        });
        // Boxes
        var Box1 = Bodies.rectangle(990, 170, 50, 50, {
            render: {
                fillStyle: "#0496FF",
                strokeStyle: "white",
                lineWidth: "2",
            },
        });
        var Box2 = Bodies.rectangle(1030, 170, 50, 50, {
            render: {
                fillStyle: "#0496FF",
                strokeStyle: "white",
                lineWidth: "2",
            },
        });
        var Box3 = Bodies.rectangle(1060, 170, 50, 50, {
            render: {
                fillStyle: "#0496FF",
                strokeStyle: "white",
                lineWidth: "2",
            },
        });
        var Box4 = Bodies.rectangle(990, 130, 50, 50, {
            render: {
                fillStyle: "#0496FF",
                strokeStyle: "white",
                lineWidth: "2",
            },
        });
        var Box5 = Bodies.rectangle(1030, 130, 50, 50, {
            render: {
                fillStyle: "#0496FF",
                strokeStyle: "white",
                lineWidth: "2",
            },
        });
        var Box6 = Bodies.rectangle(1060, 130, 50, 50, {
            render: {
                fillStyle: "#0496FF",
                strokeStyle: "white",
                lineWidth: "2",
            },
        });
        // Balls
        var Poly1 = Bodies.polygon(975, 410, 5, 30, {
            render: {
                fillStyle: "#6820EA",
                strokeStyle: "white",
                lineWidth: "2",
            },
        });
        var Poly2 = Bodies.polygon(975, 390, 5, 30, {
            render: {
                fillStyle: "#6820EA",
                strokeStyle: "white",
                lineWidth: "2",
            },
        });
        var Poly3 = Bodies.polygon(1050, 410, 5, 30, {
            render: {
                fillStyle: "#6820EA",
                strokeStyle: "white",
                lineWidth: "2",
            },
        });
        var Poly4 = Bodies.polygon(1050, 390, 5, 30, {
            render: {
                fillStyle: "#6820EA",
                strokeStyle: "white",
                lineWidth: "2",
            },
        });
        var Poly5 = Bodies.polygon(1050, 390, 5, 30, {
            render: {
                fillStyle: "#6820EA",
                strokeStyle: "white",
                lineWidth: "2",
            },
        });
        var Poly6 = Bodies.polygon(1050, 390, 5, 30, {
            render: {
                fillStyle: "#6820EA",
                strokeStyle: "white",
                lineWidth: "2",
            },
        });

        World.add(engine.world, [
            // walls
            Bodies.rectangle(200, 0, 2200, 50, { isStatic: true }),
            Bodies.rectangle(200, 600, 2200, 50, { isStatic: true }),
            Bodies.rectangle(1200, 300, 50, 600, { isStatic: true }),
            Bodies.rectangle(0, 300, 50, 600, { isStatic: true }),
            // Player 1
            Bodies.rectangle(85, 180, 5, 125, { isStatic: true }),
            Bodies.rectangle(173, 240, 180, 10, { isStatic: true }),
            Bodies.rectangle(260, 180, 5, 125, { isStatic: true }),
            // Player 2
            Bodies.rectangle(85, 430, 5, 125, { isStatic: true }),
            Bodies.rectangle(173, 490, 180, 10, { isStatic: true }),
            Bodies.rectangle(260, 430, 5, 125, { isStatic: true }),
            // Player 3
            Bodies.rectangle(935, 180, 5, 125, { isStatic: true }),
            Bodies.rectangle(1023, 240, 180, 10, { isStatic: true }),
            Bodies.rectangle(1110, 180, 5, 125, { isStatic: true }),
            // PLayer 4
            Bodies.rectangle(935, 430, 5, 125, { isStatic: true }),
            Bodies.rectangle(1023, 490, 180, 10, { isStatic: true }),
            Bodies.rectangle(1110, 430, 5, 125, { isStatic: true }),
        ]);

        World.add(engine.world, [
            Triangle1,
            Triangle2,
            Triangle3,
            Triangle4,
            Triangle5,
            Triangle6,
            Box1,
            Box2,
            Box3,
            Box4,
            Box5,
            Box6,
            Bar1,
            Bar2,
            Bar3,
            Bar4,
            Bar5,
            Bar6,
            Poly1,
            Poly2,
            Poly3,
            Poly4,
            Poly5,
            Poly6,
        ]);

        // add mouse control
        var mouse = Mouse.create(render.canvas),
            mouseConstraint = MouseConstraint.create(engine, {
                mouse: mouse,
                constraint: {
                    stiffness: 0.2,
                    render: {
                        visible: false,
                    },
                },
            });

        World.add(engine.world, mouseConstraint);

        {
            /* Matter.Events.on(mouseConstraint, "mousedown", function (event) {
            World.add(
                engine.world,
                Bodies.circle(150, 50, 30, { restitution: 0.7 })
            );
        }); */
        }

        Engine.run(engine);

        Render.run(render);
    }

    render() {
        return (
            <section className="game">
                <div className="game__scene" ref="scene" />
                <Link to="/FinishGame" className="game__endgame">
                    End Game
                </Link>
                <h3>00:00</h3>
                <hr className="game__goal" />
            </section>
        );
    }
}
export default Game;
