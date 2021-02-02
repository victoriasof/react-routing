import React from 'react';
import {
    Link,
    Switch,
    Route,
    useRouteMatch,
    useParams
} from 'react-router-dom';

export const Project = () => {
    // let params = useParams();
    // params.projectId
    let { projectId } = useParams();

    return (
        <div>
            Project with ID: { projectId }
        </div>
    )
}
