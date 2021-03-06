import React from "react";
import ProjectApp from "./ProjectApp";
import javafx_image from '../images/demo-screenshot.jpg'
import website_image from '../images/this-website-screenshot.jpg'
import command_scehduling_image from '../images/simple-command-scheduling.jpg'
import sudoku_image from '../images/sudoku-screenshot.jpg'
import snake_image from '../images/snake-screenshot.jpg'
import chat_image from '../images/chatbot-screenshot.jpg'
import raycast_image from '../images/raycasting-screenshot.jpg'
import {Slide} from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'

function PersonalProjectsApp() {
    const properties = {
        duration: 5000,
        transitionDuration: 500,
        infinite: true,
        indicators: true,
        arrows: true
    }
    return (
        <div className="PersonalProjects">
            <h2>My Personal Projects</h2>
            <p>__________</p>
            <p>These are some of my personal projects I have worked on over time.</p>
            <Slide {...properties}>
                <ProjectApp title="Power Tasks Scheduler"
                            projecturl="https://github.com/YonaMoreda/javafx-power-tasks-scheduler"
                            image={javafx_image}
                            description={"Schedule power tasks with a countdown timer. Power tasks are shutdown, " +
                            "restart, lock, hibernate and sleep computer. To be extended for use in Linux."}
                            whatitcontains={["Time class (Hours/Minutes/Seconds) and the methods (Model)",
                                "Starting a thread to with a ticking time. (TimerTask Class) (Controller)",
                                "FXML layout design along with CSS styling (View)",
                                "Unit testing with JUnit5 (junit-jupiter-api)",
                                "A Custom dialogue module for the about section"]}
                />
                <ProjectApp title="Simple Command Scheduling"
                            projecturl="https://github.com/YonaMoreda/simple-command-scheduling"
                            image={command_scehduling_image}
                            description={"Schedule batch sets of commands for the command line with a countdown timer. " +
                            "This project is based on a more generalized and extended version of Power Tasks Scheduler project."}
                            whatitcontains={["MVC design", "View composed of custom widget classes", "Output redirection for scheduled commands",
                                "Dynamic view (append/delete/start/stop tasks)", "Start/Stop/Delete all tasks at once", "Error handing for non-existing commands"]}
                />
                <ProjectApp title="Backtracking Sudoku Solver"
                            projecturl="https://github.com/YonaMoreda/javafx-sudoku-solver"
                            image={sudoku_image}
                            description={"UI based Sudoku solver for a standard 8 x 8 Sudoku grid."}
                            whatitcontains={["Built with MVC design pattern",
                                "Intuitive interface for receiving, validating and solving a Sudoku grid",
                                "Depth first based search with backtracking",
                                "JUnit testing for testing the solver / validator",
                                "View grid composed of a structured JavaFX GridPane blocks",
                                "Custom FXML based dialogue box for displaying About/Help section"]}/>
                <ProjectApp title="Snake"
                            projecturl="https://github.com/YonaMoreda/snake"
                            image={snake_image}
                            description={"A simple standard game of Snake"}
                            whatitcontains={["Built with MVC design pattern",
                                "Model component is developed separate from View, minimal cohesion",
                                "Made utilizing pre-existing javaFX layout elements",
                                "Standard elements such as Start / Game Over screen",
                                "Simple / Extensible design"
                            ]}/>

                <ProjectApp title="Ray casting game"
                            projecturl="https://github.com/YonaMoreda/JavaFX-raycasting"
                            image={raycast_image}
                            description={"A simple ray casting program."}
                            whatitcontains={[
                                "2.5D navigable area",
                                "Features arbitrarily sized boundary walls",
                                "Ray-Rectangle intersection",
                                "Rectangle Axis aligned collision"
                            ]}/>
                <ProjectApp title="Chatbot for Telegram messenger"
                            projecturl="https://github.com/YonaMoreda/telegram-chat-bot"
                            image={chat_image}
                            description={"A simple Chatbot that made by redirecting messages from/to telegram to/from Cleverbot."}
                            whatitcontains={["Utilizing pre-existing libraries",
                                "Clean and extensible code with documentation",
                                "Virtual environment + pip for managing requirements and straightforward installation"
                            ]}/>

                <ProjectApp title="Personal Website" projecturl="https://github.com/YonaMoreda/personal-website"
                            image={website_image}
                            description={"Personal website made with React.js"}
                            whatitcontains={["Reusable modules for representing DOM elements",
                                "Hosted on github pages (publishing to gh-pages branch using yarn package manager)",
                                "CSS for styling components and animating transitions when events occur",
                                "Features modules from node package manager" +
                                "Slide show component \"react-slideshow-image\", " +
                                "Bar graph component \"react-dynamic-charts\""]}
                />
            </Slide>
        </div>
    );
}

export default PersonalProjectsApp;