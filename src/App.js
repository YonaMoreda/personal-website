import React from "react";
import SummaryApp from './components/SummaryApp'
import PersonalProjectsApp from "./components/PersonalProjectsApp";
import CourseWorkProjectsApp from "./components/CourseWorkProjectsApp";
import ContactsApp from "./components/ContactsApp";
import './StyleSheets/App.css';

//Driver app
function App() {
    return (
        <div className="App">
            <header className="App-header">
                <SummaryApp/>
                <PersonalProjectsApp/>
                <CourseWorkProjectsApp/>
                <ContactsApp/>
            </header>
        </div>
    );
}

export default App;