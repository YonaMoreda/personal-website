import React from "react";
import SummaryApp from './components/SummaryApp'
import PersonalProjectsApp from "./components/PersonalProjectsApp";
import CourseWorkProjectsApp from "./components/CourseWorkProjectsApp";
import ContactsApp from "./components/ContactsApp";
import './StyleSheets/App.css';
import FooterApp from "./components/FooterApp";
import ProfileApp from "./components/ProfileApp";
import ScrollDemo from "./components/ScrollApp";
import SkillApp from "./components/SkillsApp";


//Driver app
function App() {
    return (
        <div className="App">
            <header className="App-header">
                <table>
                    <tr>
                        <td><SummaryApp/></td>
                        <td><ProfileApp/></td>
                    </tr>
                </table>
                <ScrollDemo/>
                <PersonalProjectsApp/>
                <CourseWorkProjectsApp/>
                <ScrollDemo/>
                <SkillApp/>
                <ScrollDemo/>
                <ContactsApp/>
                <FooterApp/>
            </header>
        </div>
    );
}

export default App;