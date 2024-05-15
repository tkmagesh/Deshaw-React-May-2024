/* 
import axios from "axios";

export async function load(){
    const response = await axios.get("http://localhost:3030/bugs")
    const bugsFromServer = response.data
    const action = { type: "BUGS_RETAIN", payload: bugsFromServer };
    return action;
} 
*/

import bugApi from '../services/bugApi';
export async function load(){
    const bugsFromServer = await bugApi.getAll()
    const action = { type: "BUGS_RETAIN", payload: bugsFromServer };
    return action;
}
