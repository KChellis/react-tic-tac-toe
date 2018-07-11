export default (state = true, action) => {
  switch (action.type) {
  case 'SWITCH_PLAYER':
    return action.xIsNext;
  default:
    return state;
  }
};
