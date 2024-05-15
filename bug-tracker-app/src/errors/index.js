import { bindActionCreators } from "redux"
import { clearError } from "./actions"
import { connect } from 'react-redux';

function AppError({message, clearError}){
    return (
        <div>
            <div>{message}</div>
            { message && <button onClick={clearError}>Clear</button> }
        </div>
    )
}
export default connect(
    (storeState) => ({ message : storeState.errorsState}),
    (dispatch) => bindActionCreators({clearError}, dispatch)
)(AppError);