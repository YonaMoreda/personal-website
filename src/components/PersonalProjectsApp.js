import React from "react";
import ProjectApp from "./ProjectApp";
import javafx_image from '../images/demo-screenshot.jpg'
import website_image from '../images/this-website-screenshot.jpg'

function PersonalProjectsApp() {
    return (
        <div className="PersonalProjects">
            <h2>My Personal Projects</h2>
            <span>__________</span>
            <p>These are some of my personal projects I have worked on over time.</p>
            <ProjectApp title="Power Tasks Scheduler"
                        projecturl="https://github.com/YonaMoreda/javafx-power-tasks-scheduler" image={javafx_image}/>
            <ProjectApp title="Personal Website" projecturl="https://github.com/YonaMoreda/personal-website" image={website_image}/>
        </div>
    );
}

export default PersonalProjectsApp;