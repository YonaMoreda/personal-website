import React from "react";
import ProjectApp from "./ProjectApp";
import javafx_image from '../images/demo-screenshot.jpg'
import website_image from '../images/this-website-screenshot.jpg'
import command_scehduling_image from '../images/simple-command-scheduling.jpg'
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
                            image={javafx_image}/>
                <ProjectApp title="Simple Command Scheduling" projecturl="https://github.com/YonaMoreda/simple-command-scheduling"
                            image={command_scehduling_image}/>
                <ProjectApp title="Personal Website" projecturl="https://github.com/YonaMoreda/personal-website"
                            image={website_image}/>
            </Slide>
        </div>
    );
}

export default PersonalProjectsApp;