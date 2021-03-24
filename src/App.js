import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css'
import Home from './components/Home'
import Project from './components/Project'
import Header from './components/Header'
import Footer from './components/Footer'
import Contact from './components/Contact'
import projects from './data/data.json'
import projectsData from './data/projects.json'

class App extends Component {
    render() {
        return (
            <div>
                <Header projects={projectsData} />

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
                            path="/project/:id"
                            render={routerProps => <Project {...routerProps} />}
                        />
                    </Switch>
                </main>
                <Footer />
            </div>
        );
    }
}

export default App;