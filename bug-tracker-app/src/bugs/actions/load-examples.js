import axios from "axios";

export function load() {
    // sync
    /* 
    const bugsInMemory = [
        {
        id: 1,
        name: "Server communication failure",
        isClosed: false,
        createdAt: new Date(),
        },
        {
        id: 2,
        name: "Data integrity checks failed",
        isClosed: true,
        createdAt: new Date(),
        },
        {
        id: 3,
        name: "User access denied",
        isClosed: false,
        createdAt: new Date(),
        },
    ];

    const action = { type: "BUGS_RETAIN", payload: bugsInMemory };
    return action; 
    */

    // async (using asyncMiddleware)
    /* 
    return function(dispatch){
        axios
            .get('http://localhost:3030/bugs')
            .then(response => response.data)
            .then(bugsFromServer => {
                const action = { type: "BUGS_RETAIN", payload: bugsFromServer };
                dispatch(action); 
            });
    } 
    */

    // async (using promiseMiddleware)
    /* 
    return axios
      .get("http://localhost:3030/bugs")
      .then((response) => response.data)
      .then((bugsFromServer) => {
        const action = { type: "BUGS_RETAIN", payload: bugsFromServer };
        return action
      }); 
    */

   
}
