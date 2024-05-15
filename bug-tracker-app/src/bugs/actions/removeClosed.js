/* 
export function removeClosed(currentBugs) {
  const bugsToRetain = currentBugs.filter((bug) => !bug.isClosed);
  const action = { type: "BUGS_RETAIN", payload: bugsToRetain };
  return action;
} 
*/

// async
import bugApi from '../services/bugApi';
export function removeClosed(){
  return function(dispatch, getState) {
    const storeState = getState()
    const currentBugs = storeState.bugsState;
    const bugsToRemove = currentBugs.filter(bug => bug.isClosed)
    bugsToRemove
      .forEach(bugToRemove => {
        bugApi
          .remove(bugToRemove)
          .then(() => {
            const action = { type: "BUGS_REMOVE", payload: bugToRemove };
            dispatch(action);
          })
      })
  }
}