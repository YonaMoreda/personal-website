import React from "react";
import '../StyleSheets/Contact.css'

function ContactsApp() {
    return (
        <div className="Contacts">
            <h2>Contact Me</h2>
            <h4>Linkedin</h4>
            {/* eslint-disable-next-line react/jsx-no-target-blank */}
            <a target="_blank" href="https://www.linkedin.com/in/yona-moreda-116154141/">@yona-moreda</a>
            <h4>Github</h4>
            {/* eslint-disable-next-line react/jsx-no-target-blank */}
            <a target="_blank" href="https://github.com/YonaMoreda">@YonaMoreda</a>
            <h4>E-Mail</h4>
            {/* eslint-disable-next-line react/jsx-no-target-blank */}
            <a target="_blank" href="mailto:yokots3q@gmail.com">yokots3q@gmail.com</a>
        </div>
    );
}

export default ContactsApp;