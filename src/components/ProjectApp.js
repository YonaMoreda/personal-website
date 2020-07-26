import React from "react";
import '../StyleSheets/Project.css'

function ProjectApp(props) {
    return (
        <div className="Project">
            {/* eslint-disable-next-line react/jsx-no-target-blank */}
            <a target='_blank' href={props.projecturl}>
                <img src={props.image} alt={props.title + " image"}/>
                {/*    image width and height can be set within the css */}
            </a>
            <div className="Description">{props.title}</div>
        </div>
    );
}

export default ProjectApp;