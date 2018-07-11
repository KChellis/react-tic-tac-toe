export default (state = 0, action) => {
  switch (action.type) {
    case 'RECORD_TURN':
      return action.turn;
    default:
      return state;
  }
}
