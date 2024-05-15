
let _max_project_id = 100
export function createProject(projectName){
    const action = {
        type : 'PROJECTS_ADD',
        payload : { id : ++_max_project_id, name : projectName}
    }
    return action;
}