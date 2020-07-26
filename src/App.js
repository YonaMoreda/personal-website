import React from "react";
import SummaryApp from './components/SummaryApp'
import PersonalProjectsApp from "./components/PersonalProjectsApp";
import CourseWorkProjectsApp from "./components/CourseWorkProjectsApp";
import ContactsApp from "./components/ContactsApp";
import './StyleSheets/App.css';
import FooterApp from "./components/FooterApp";
import ProfileApp from "./components/ProfileApp";

//Driver app
function App() {
    return (
        <div className="App">
            <header className="App-header">
                <SummaryApp/>
                <ProfileApp/>
                <PersonalProjectsApp/>
                <CourseWorkProjectsApp/>
                <ContactsApp/>
                <FooterApp/>
            </header>
        </div>
    );
}

export default App;