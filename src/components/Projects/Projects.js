import React from 'react';

import { projects } from './../../constants/Projects';
import { ProjectCard } from './../ProjectCard/ProjectCard';

import './projects.css';

export const Projects = ({props}) => {
    return (
        <div className="projects-container">
           
                {
                    projects.projectList.map(project => <ProjectCard project={project} />)
                }
            </div>
       
    )
}