import React from "react";
import '../StyleSheets/Contact.css'

function ContactsApp() {
    return (
        <div className="Contacts">
            <h2>Contact Me</h2>
            <table>
                <thead>
                <tr>
                    <td>Linkedin</td>
                    <td>Github</td>
                    <td>E-Mail</td>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        {/* eslint-disable-next-line react/jsx-no-target-blank */}
                        <a target="_blank" href="https://www.linkedin.com/in/yona-moreda-116154141/">@yona-moreda</a>
                    </td>
                    <td>
                        {/* eslint-disable-next-line react/jsx-no-target-blank */}
                        <a target="_blank" href="https://github.com/YonaMoreda">@YonaMoreda</a>
                    </td>
                    <td>
                        {/* eslint-disable-next-line react/jsx-no-target-blank */}
                        <a target="_blank" href="mailto:yokots3q@gmail.com">yokots3q@gmail.com</a>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default ContactsApp;