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
            <p>These are some of the projects I (and other collaborators) worked on while I pursuing my degree in
                Computing Science.</p>
            {/* todo:: mention there are several collaborators */}
            <Slide {...properties}>
                <ProjectApp title="JavaFX OrientDB visualization tool (Joint)"
                            projecturl="https://github.com/YonaMoreda/OrientDBVisualizationTool"
                            image={orientdb_image}/>
                <ProjectApp title="Django - Medical image processing" projecturl="http://infosysdemos.cs.rug.nl/"
                            image={spp_image}/>
                <ProjectApp title="Flask/React - Mock music servicing website (Joint)" projecturl=""
                            image={web_eng_image}/>
            </Slide>
        </div>
    );
}

export default CourseWorkProjectsApp;