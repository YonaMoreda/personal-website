import React from "react";
import '../StyleSheets/Project.css'

function ProjectApp(props) {
    return (
        <div className="Project">
            <a href={props.projecturl}>
                <img src={props.image} alt={props.title + " image"} width="600" height="400"/>
                {/*    image width and height can be set within the css */}
            </a>
            <div className="Description">{props.title}</div>
        </div>
    );
}

export default ProjectApp;