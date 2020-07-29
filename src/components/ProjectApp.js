import React from 'react';

import 'react-slideshow-image/dist/styles.css'
import '../StyleSheets/Project.css'


function ProjectApp(props) {
    return (
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${props.image})`}}>
              {/* eslint-disable-next-line react/jsx-no-target-blank */}
            <a href={props.projecturl} target="_blank">{props.title}</a>
          </div>
        </div>
    );
}

export default ProjectApp;