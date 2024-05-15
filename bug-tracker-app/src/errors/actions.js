
export function setError(message){
    const action = { type : 'ERROR_SET', payload : message};
    return action;
}

export function clearError() {
  const action = { type: "ERROR_CLEAR" };
  return action;
}