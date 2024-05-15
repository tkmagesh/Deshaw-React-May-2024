// import React from "react";
import { useState } from "react";

const BugEdit = ({ createNew }) => {
//   const [newBugName, setNewBugName] = React.useState("");
  const [newBugName, setNewBugName] = useState("");
  return (
    <section className="edit">
      <label htmlFor="">Bug Name :</label>
      <input
        type="text"
        value={newBugName}
        onChange={(evt) => setNewBugName(evt.target.value)}
      />
      <button onClick={() => createNew(newBugName)}>Add New</button>
    </section>
  );
};

export default BugEdit;