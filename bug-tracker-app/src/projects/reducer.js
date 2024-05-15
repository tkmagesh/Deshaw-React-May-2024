
const initialState = [
  { id: 1, name: "Bug Tracker" },
  { id: 2, name: "Expense Tracker" }, 
];
function projectsReducer(currentState = initialState, action){
    if (action.type === 'PROJECTS_ADD'){
        return [...currentState, action.payload];
    }
    return currentState;
}

export default projectsReducer