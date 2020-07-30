import React from "react";
import SummaryApp from './components/SummaryApp'
import PersonalProjectsApp from "./components/PersonalProjectsApp";
import CourseWorkProjectsApp from "./components/CourseWorkProjectsApp";
import ContactsApp from "./components/ContactsApp";
import './StyleSheets/App.css';
import FooterApp from "./components/FooterApp";
import ProfileApp from "./components/ProfileApp";
import ScrollApp from "./components/ScrollApp";
import SkillApp from "./components/SkillsApp";

//Driver app
function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="Summary-Container">
                    <SummaryApp/>
                    <ProfileApp/>
                </div>
                <ScrollApp id={"firstScroll"}/>
                <PersonalProjectsApp/>
                <CourseWorkProjectsApp/>
                <ScrollApp id={"secondScroll"}/>
                <SkillApp/>
                {/*<ScrollApp id={"thirdScroll"}/>*/}
                <ContactsApp/>
                <FooterApp/>
            </header>
        </div>
    );
}

export default App;