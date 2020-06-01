import React, { Component } from 'react';


import './App.css';
import { Portfolio } from './Portfolio/Portfolio';
import {  about} from './../constants/About';
import { skills } from './../constants/Skills';
import { projects } from './../constants/Projects';

export class App extends Component {
    constructor(){
        super();

        this.state = {
            selectedSection: "",
            selectedHeading: "",
            selectedQuote: "",
            about:  null,
            skills: null,
            projects: null,
        };
    }

    componentDidMount(){
        this.setState({
            selectedSection: "about",
            about,skills,projects,
            selectedHeading: about.heading,
            selectedQuote: about.quote
        })
    }

    handleSectionClick = (sectionName) =>{
        this.setState({
            selectedSection: sectionName,
            selectedHeading: this.state[sectionName].heading,
            selectedQuote: this.state[sectionName].quote
        })
    }

    render(){
        return (
            <div className="App">
               <Portfolio 
                 about={this.state.about}
                 skills={this.state.skills}
                 projects={this.state.projects}
                 selectedSection={this.state.selectedSection}
				 selectedHeading={this.state.selectedHeading}
				 selectedQuote={this.state.selectedQuote}
                 handleSectionClick = {this.handleSectionClick}/>
            
            
            </div>
        );
    }
  
}

export default App;
