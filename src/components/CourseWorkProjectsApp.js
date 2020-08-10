import React from "react";
import ProjectApp from "./ProjectApp";
import orientdb_image from "../images/orientdb-screenshot.jpg"
import spp_image from "../images/spp-screenshot.jpg"
import web_eng_image from "../images/web-eng-screenshot.jpg"
import {Slide} from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'


function CourseWorkProjectsApp() {
    const properties = {
        duration: 5000,
        transitionDuration: 500,
        infinite: true,
        indicators: true,
        arrows: true
    }

    return (
        <div className="CourseWorkProjects">
            <h2>Course Work Projects</h2>
            <p>__________</p>
            <p>These are some of the projects I (and other collaborators) worked on while I was pursuing my degree in
                Computing Science.</p>
            <Slide {...properties}>
                <ProjectApp title="JavaFX OrientDB visualization tool (Joint)"
                            projecturl="https://github.com/YonaMoreda/OrientDBVisualizationTool"
                            image={orientdb_image}
                            description={"A hierarchical data (database) visualizer in JavaFX for Software Engineering course. " +
                            "Proposed by Sustainable-Buildings.nl and it consisted of 5 students, I was part of the Front-End and my " +
                            "contributions are outlined below."}
                            whatitcontains={["Designed the view structure for expanding / retracing hierarchical (Tree) structure.",
                                "Node occlusion is accounted for using a nested / recursive structure of JavaFX Panes and VBox-es.",
                                "Customized CSS styles / different themes",
                                "Tree view for navigation and other features"]}
                />
                <ProjectApp title="Django - Medical image processing" projecturl="http://infosysdemos.cs.rug.nl/"
                            image={spp_image}
                            description={"Python Django project for handling medical images and providing " +
                            "medical doctors an interface for a classifier algorithm (from a published journal). " +
                            "Available at http://infosysdemos.cs.rug.nl/"}
                            whatitcontains={["Account management (sign up, log in, log out and forgot password) from Django User Management",
                                "Support for handling several images at once",
                                "AJAX requests for handling changes and sending image processing requests",
                                "Interface from Python to MATLAB algorithm",
                                "Bootstrap styling"]}
                />
                <ProjectApp title="Flask/React - Mock music servicing website (Joint)" projecturl=""
                            image={web_eng_image}
                            description={"Full-stack (Python Flask and React.js) mock music store project. Project consisted of " +
                            "two students, we self-taught the full technology stack and completed the project for the course: Web Engineering."}
                            whatitcontains={["REST-ful API design and implementation in Flask",
                                "Implemented HTTP Methods - GET, POST, DELETE, PATCH supported in the full stack",
                                "React front-end modules with pagination, styling with react-bootstrap",
                                "Additional npm imported Modules \"reactjs-popup\""]}
                />
            </Slide>
        </div>
    );
}

export default CourseWorkProjectsApp;