import React from "react";
import "../StyleSheets/Skills.css"


function SkillApp() {
    return (
        <div className="Skill">
            <h3>My Skills</h3>
            <span>__________</span>
            <dl>
                <dt>Technical</dt>
                <dd>- Java (JavaFX)</dd>
                <dd>- C language</dd>
                <dd>- Python language (Django, Flask)</dd>
                <dd>- JavaScript (React.js)</dd>
                <dd>- SQL (PostgreSQL)</dd>
                <dt>Industry Related</dt>
                <dd>- Scrum x Agile Methodologies</dd>
                <dd>- Version control (GitHub)</dd>
            </dl>

        </div>
    );
}

export default SkillApp;