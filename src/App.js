import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import './styles/App.css'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Header from './components/Header'
import ProjectGallery from './pages/ProjectGallery';
import ProjectDetails from './pages/ProjectDetails';

class App extends Component {
    render() {
        return (
            <div className='app-container'>
                <Header />
                <main>
                    <Switch>
                        <Route
                            exact
                            id='home-route'
                            path="/"
                            render={routerProps => <Home {...routerProps} />}
                        />
                        <Route
                            exact
                            path="/contact"
                            render={routerProps => <Contact {...routerProps} />}
                        />
                        <Route
                            exact
                            path="/project-gallery"
                            render={routerProps => <ProjectGallery {...routerProps} />}
                        />
                        <Route
                            exact
                            path="/project/:id"
                            render={routerProps => <ProjectDetails {...routerProps} />}
                        />
                    </Switch>
                </main>
            </div>
        );
    }
}

export default App;