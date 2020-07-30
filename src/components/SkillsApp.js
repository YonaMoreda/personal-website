import React from "react";
import "../StyleSheets/Skills.css"
import BarApp from "./BarApp";

function SkillApp() {
    return (
        <div className="Skill">
            <BarApp/>
            <div className="SkillsList">
                <h4>Technical and Industry related skills</h4>
                <span>__________</span>
                <dl>
                    <dt>Technical</dt>
                    <dd>- Java (JavaFX)</dd>
                    <dd>- C language</dd>
                    <dd>- Python language (Django, Flask)</dd>
                    <dd>- JavaScript (React.js)</dd>
                    <dd>- SQL (PostgreSQL) and more ...</dd>
                    <dt>Industry Related</dt>
                    <dd>- Scrum x Agile Methodologies</dd>
                    <dd>- Version control (Git) and more ...</dd>
                </dl>
            </div>
        </div>
    );
}

export default SkillApp;