import React from 'react';
import {
    Link,
    Switch,
    Route,
    useRouteMatch
} from 'react-router-dom';
import { Project } from './Project';
import { Projects } from './Projects';


export const AboutPage = () => {
    let match = useRouteMatch();

    return (
        <div>
            About
            <nav>
                <Link to={`${match.url}/projects`}>Projects</Link>
                <Link to={`${match.url}/projects/1`}>Go to project 1</Link>
                <Link to={`${match.url}/projects/2`}>Go to project 2</Link>
            </nav>

            <Switch>
                <Route path={`${match.path}/projects/:projectId`}>
                    <Project />
                </Route>

                <Route path={`${match.path}/projects`}>
                    <Projects />
                </Route>
            </Switch>
        </div>
    )
}
