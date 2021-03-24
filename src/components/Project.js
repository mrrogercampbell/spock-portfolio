import React from 'react';
import projects from '../data/projects.json'



const Project = ({ history, match }) => {
    let projectDetails = projects.filter(project => project.id == match.params.id ? project : null)

    let listProjectDetails = projectDetails.map((item, i) => {
        let { title, deployedUrl, githubUrl, image, description, tags } = item
        let listOfTags = tags.map((tag, i) => <li key={i}>#{tag}</li>)
        return (
            <div className='project-div' key={i}>
                <img src={image} />
                <h1>{title}</h1>
                <p>{description}</p>
                <ul>
                    <li><a href={deployedUrl}>Deployed Link</a></li>
                    <li><a href={githubUrl}>GitHub</a></li>
                </ul>

                <h2>Tags</h2>
                <ul>
                    {listOfTags}
                </ul>

            </div>
        )
    })
    return (
        <div>
            <h1>Project component</h1>

            {listProjectDetails}
        </div>
    );
};

export default Project;