import BugStats from './views/BugStats';
import BugEdit from './views/BugEdit';
import BugSort from './views/BugSort';
import BugList from './views/BugList';
import './index.css';

import { useSelector, useDispatch } from 'react-redux'; 
import * as bugActionCreators from './actions';
import { bindActionCreators } from 'redux';

const Bugs = () => {
  // extracting state from the store
  const bugs = useSelector(storeState => storeState)

  // creating 'action dispatchers' from 'action creators'
  /* 
  const dispatch = useDispatch();
  const bugActionDispatchers = bindActionCreators(bugActionCreators, dispatch);
  const { createNew, toggle, remove, removeClosed } = bugActionDispatchers; 
  */
  const { createNew, toggle, remove, removeClosed } = bindActionCreators(bugActionCreators, useDispatch())

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

export default Bugs;
