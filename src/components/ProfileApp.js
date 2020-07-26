import React from "react";
import amsterdam_image from "../images/me-part-2.jpg";
import '../StyleSheets/Profile.css'

function ProfileApp() {
    return (
        <div className="Profile">
            <img src={amsterdam_image} alt={"Amsterdam Trip"}/>
        </div>
    );
}

export default ProfileApp;