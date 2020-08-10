import React from 'react';

import 'react-slideshow-image/dist/styles.css'
import '../StyleSheets/Project.css'


function ProjectApp(props) {
    // const numbers = [1, 2, 3, 4, 5];
    let listItems = <li></li>;
    if (props.whatitcontains !== undefined) {
        listItems = props.whatitcontains.map((item) =>
            <li>{item}</li>
        );
    }
    return (
        <div className="each-slide">
            <div style={{'backgroundImage': `url(${props.image})`}}>
                {/* eslint-disable-next-line react/jsx-no-target-blank */}
                <a href={props.projecturl} target="_blank"><h3>{props.title}</h3>
                    <h4 style={{'fontSize': '16px'}}>Description</h4>
                    <p style={{'fontSize': '16px'}}>{props.description}</p>
                    <h4 style={{'fontSize': '16px'}}>What it contains</h4>
                    <ul style={{'fontSize': '16px'}}>{listItems}</ul>
                </a>
            </div>
        </div>
    );
}

export default ProjectApp;