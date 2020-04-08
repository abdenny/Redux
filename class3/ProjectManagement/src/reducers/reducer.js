let projectReducer = (state, action) => {
  if (state === undefined) {
    state = {
      projects: [
        {
          id: 0,
          title: 'test',
          category: 'Front-End',
        },
      ],
    };

    switch (action.type) {
      case 'addProject':
        return {
          ...state,
          projects: state.projects.concat(action.project),
        };

      case 'deleteProject':
        let filteredProjects = [...state.projects];
        let index = filteredProjects.findIndex((pObj) => pObj.id === action.id);

        filteredProjects.splice(index, 1);

        return {
          ...state,
          projects: filteredProjects,
        };

      default:
        return state;
    }
  }
};

export default projectReducer;
