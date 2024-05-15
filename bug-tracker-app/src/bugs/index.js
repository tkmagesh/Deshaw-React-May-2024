import BugStats from "./views/BugStats";
import BugEdit from "./views/BugEdit";
import BugSort from "./views/BugSort";
import BugList from "./views/BugList";
import "./index.css";

import { connect } from "react-redux";
import * as bugActionCreators from "./actions";
import { bindActionCreators } from "redux";

const Bugs = ({ bugs, createNew, toggle, remove, removeClosed }) => {
  const closedCount = bugs.reduce(
    (prevResult, bug) => (bug.isClosed ? prevResult + 1 : prevResult),
    0
  );
  return (
    <>
      <h3>Bugs</h3>
      <BugStats count={bugs.length} closedCount={closedCount} />
      <BugEdit createNew={createNew} />
      <BugSort />
      <BugList {...{ bugs, toggle, remove, removeClosed }} />
    </>
  );
};

export default connect(
  // mapStateToProps (extracting state from the store to be passed as props to the component)
  (storeState) => {
    // console.log('storeState :', storeState)
    return { bugs: storeState.bugsState };
  },
  // mapDispatchToProps (use dispatch to create action dispatchers to be passed as props to the component)
  (dispatch) => {
    // console.log('[@connnect(mapDispatchToProps) dispatch :', dispatch);
    return bindActionCreators(bugActionCreators, dispatch);
  }
)(Bugs);
