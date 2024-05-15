import BugItem from './BugItem';

const BugList = ({ bugs, toggle, remove, removeClosed }) => {
  return (
    <section className="list">
      <ul>
        {bugs.map((bug) => (
          <BugItem key={bug.id} bug={bug} {...{ toggle, remove }} />
        ))}
      </ul>
      <button onClick={() => removeClosed(bugs)}>Remove Closed</button>
    </section>
  );
};
export default BugList;