import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Project from './Project';
import AddProject from './AddProject';
import './styles.css';
//imported these into step 5
import { connect } from 'react-redux';
import addProject from '../../actions/addProject';
import deleteProject from '../../actions/deleteProject';

class ProjectManagement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [],
    };
  }

  componentWillMount() {
    this.setState({
      projects: [
        {
          id: uuidv4(),
          title: 'Javascript',
          category: 'Front-End',
        },
        {
          id: uuidv4(),
          title: 'Node',
          category: 'Back-End',
        },
        {
          id: uuidv4(),
          title: 'React',
          category: 'Front-End',
        },
      ],
    });
  }

  handleAddProject = (newProject) => {
    let oldProjects = [...this.state.projects];
    oldProjects.push(newProject);

    this.setState({
      projects: oldProjects,
    });
  };

  handleDeleteProject = (id) => {
    let oldProjects = [...this.state.projects];

    let index = oldProjects.findIndex((pObj) => pObj.id === id);

    oldProjects.splice(index, 1);

    this.setState({
      projects: oldProjects,
    });
  };

  render() {
    return (
      <div className='project'>
        <AddProject
          addProject={(project) => {
            this.handleAddProject(project);
          }}
        />

        <br />
        <br />
        <Project
          projects={this.state.projects}
          onDelete={(id) => {
            this.handleDeleteProject(id);
          }}
        />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    proj: state.projects,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    onAddProject: (project) => dispatch(addProject(project)),
    onDeleteProject: (id) => dispatch(deleteProject(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectManagement);
