import React from "react";
import ProjectApp from "./ProjectApp";
import orientdb_image from "../images/orientdb-screenshot.jpg"
import spp_image from "../images/spp-screenshot.jpg"
import web_eng_image from "../images/web-eng-screenshot.jpg"

function CourseWorkProjectsApp() {
    return (
        <div className="CourseWorkProjects">
            <h3>Course Work Projects</h3>
            <span>__________</span>
            <p>These are some of the projects I (and other collaborators) worked on while I pursuing my degree in Computing Science.</p>
            {/* todo:: mention there are several collaborators */}
            <ProjectApp title="JavaFX OrientDB visualization tool (Joint)"
                        projecturl="https://github.com/YonaMoreda/OrientDBVisualizationTool" image={orientdb_image}/>
            <ProjectApp title="Django - Medical image processing" projecturl="http://infosysdemos.cs.rug.nl/" image={spp_image}/>
            <ProjectApp title="Flask/React - Mock music servicing website (Joint)" projecturl="" image={web_eng_image}/>
        </div>
    );
}

export default CourseWorkProjectsApp;