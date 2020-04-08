import React, { Component } from 'react'
import ProjectItem from './ProjectItem';

class Project extends React.Component {
    constructor(props) {
        super(props);

    }




    render() {

        let projectItem = this.props.projects.map((projectObj) => {

            return <ProjectItem project={projectObj} onDelete={this.props.onDelete} key={projectObj.id} />
        })
        return (

            <ul>
                {projectItem}
            </ul>

        );
    }
}

export default Project
