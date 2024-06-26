// sync
/* 
export function remove(bugToRemove) {
  const action = { type: "BUGS_REMOVE", payload: bugToRemove };
  return action;
} 
*/

// async
import bugApi from '../services/bugApi';
export async function remove(bugToRemove){
  await bugApi.remove(bugToRemove);
  const action = { type: "BUGS_REMOVE", payload: bugToRemove };
  return action;
}