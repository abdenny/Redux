let newState = {
  ...state,
  school: {
    ...state.school,
    house: {
      ...state.school.house,
      points: state.school.house.points + 2,
    },
  },
};

console.log(newState);
