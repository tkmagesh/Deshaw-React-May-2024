// sync
/* 
let _max_bug_id = 0; //TO BE FIXED

export function createNew(newBugName) {
  const newBug = {
    id: ++_max_bug_id,
    name: newBugName,
    isClosed: false,
    createdAt: new Date(),
  };
  const action = { type: "BUGS_ADD", payload: newBug };
  return action;
} */

// async
import bugApi from "../services/bugApi";
export async function createNew(newBugName) {
  const newBugData = {
    id: 0,
    name: newBugName,
    isClosed: false,
    createdAt: new Date(),
  };
  const newBug = await bugApi.save(newBugData)
  const action = { type: "BUGS_ADD", payload: newBug };
  return action;
}