import React from 'react';
import projects from '../data/projects.json'

const ProjectDetails = ({ history, match }) => {
    let projectDetails = projects.filter(project => project.id === match.params.id ? project : null)

    let listProjectDetails = projectDetails.map((item, i) => {
        let { title, deployedUrl, githubUrl, image, description } = item

        return (
            <div className='project-div' key={i}>
                <img className='project-detail-img' src={image} alt={title} />
                <h1 id='project-h1'>{title}</h1>
                <p>{description}</p>

                <div className='project-links'>
                    <a href={deployedUrl}>Deployed Link</a>
                    <a href={githubUrl}>GitHub</a>
                </div>
            </div>
        )
    })

    return (
        <div>
            {listProjectDetails}
        </div>
    );
};

export default ProjectDetails;