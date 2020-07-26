import React from "react";
import '../StyleSheets/Contact.css'

function ContactsApp() {
    return (
        <div className="Contacts">
            <h2>Contact</h2>
            <h4>Linkedin</h4>
            {/* eslint-disable-next-line react/jsx-no-target-blank */}
            <a target="_blank" href="https://www.linkedin.com/in/yona-moreda-116154141/">@yona-moreda</a>
            <h4>Github</h4>
            {/* eslint-disable-next-line react/jsx-no-target-blank */}
            <a target="_blank" href="https://github.com/YonaMoreda">@YonaMoreda</a>
            <h4>E-Mail</h4>
            {/* eslint-disable-next-line react/jsx-no-target-blank */}
            <a target="_blank" href="https://mail.google.com/mail/u/0/#inbox">yokoti1999@gmail.com</a>
        </div>
    );
}

export default ContactsApp;