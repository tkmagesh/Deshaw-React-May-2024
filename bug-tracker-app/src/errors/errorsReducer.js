
function errorsReducer(currentState = '', action){
    switch (action.type) {
        case 'ERROR_SET':
            return action.payload
        case 'ERROR_CLEAR':
            return ''
        default:
            return currentState;
    }
}
export default errorsReducer;
