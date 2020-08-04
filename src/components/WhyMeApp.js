import React from "react";
import '../StyleSheets/WhyMe.css'
import profile_image from "../images/me-part-3.jpg";

function WhyMeApp() {
    return (
        <div className="WhyMe-container">
            <div className="Profile-Image">
                <img src={profile_image} alt={"Profile"}/>
            </div>
            <div className="WhyMe">
                <h1>Why Me?</h1>
                <p>________</p>
                <p>
                    Before I pursued my degree in Computing science in the University of Groningen, I had limited
                    experience and knowledge in that particular discipline,
                    however my ability to quickly adapt and learn concepts quickly allowed me to start from minimal
                    experience to
                    earning a full on Bachelors degree within a period of just 3 years.
                </p>
                <p>
                    This skill of knowing how to learn quickly and effectively is a valuable asset in an industry where
                    technologies and frameworks are constantly evolving and/or are being replaced.
                </p>
                <p>
                    Furthermore, as an international student I learned an ability to adapt and quickly fit in new
                    settings as with my ability to learn/adapt to new technologies.
                </p>
                <p>
                    With all things considered I would like to lastly mention I find making the process of software/web
                    applications enjoyable and quite fitting to my interests. You can find some of
                    the projects I worked on personally and also some course work related projects below.
                </p>
            </div>

        </div>
    );

}

export default WhyMeApp;