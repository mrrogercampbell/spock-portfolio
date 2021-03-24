import React from 'react';
import { Link } from "react-router-dom";


const Header = ({ projects }) => {
    let listOfProjects = projects.map((project, i) => (
        <div key={i}>
            <Link to={'/project/' + i} >{project.title}</Link>
        </div>
    ))
    return (
        <div id='header'>
            <Link to='/'>Home</Link>
            <Link to='/contact'>Contact</Link>
            {listOfProjects}
        </div>
    );
};

export default Header;