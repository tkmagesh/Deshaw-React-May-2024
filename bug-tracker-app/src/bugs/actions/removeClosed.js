export function removeClosed(currentBugs /* TO BE FIXED */) {
  const bugsToRetain = currentBugs.filter((bug) => !bug.isClosed);
  const action = { type: "BUGS_RETAIN", payload: bugsToRetain };
  return action;
}