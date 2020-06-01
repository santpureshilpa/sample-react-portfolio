import React from 'react';

import './sidenav.css';




export const SideNav = ({ handleSectionClick }) => {
    return (
        <div className="sidenav">
           
            <img 
           src="https://avatars1.githubusercontent.com/u/37878595?s=400&u=5c129d62402943a1f4d6dd60f9f81b3eba8f083d&v=4"
            className="avatar"
            alt="avatar"
           
            />

<h2 className="main-name">Shilpa Santpure</h2>
            <p className="subtitle">"Website.Invent.Create"</p>
            <div className="sections-list">
                <p className="section-list-element" onClick={ () => handleSectionClick("about")}>About Me</p>
                <p className="section-list-element" onClick={ () => handleSectionClick("skills")}>Skills</p>
                <p className="section-list-element" onClick={ () => handleSectionClick("projects")}>Projects</p>
        </div>
        </div>
    );
};