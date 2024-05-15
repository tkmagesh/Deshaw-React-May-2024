import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as projectActionCreators from './actions'

const Projects = () => {
    const projects = useSelector(storeState => storeState.projectsState)
    const { createProject } = bindActionCreators(projectActionCreators, useDispatch())
    const txtProjectNameRef = React.useRef()
    return (
        <>
            <h3>Projects</h3>      
            <label>Project Name :</label>
            <input type="text" ref={txtProjectNameRef}/>
            <button onClick={() => createProject(txtProjectNameRef.current.value)}>Add Project</button>
            <ul>
                {projects.map(p => (<li key={p.id}>{p.name}</li>))}
            </ul>
        </>
    )
} 

export default Projects;