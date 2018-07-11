export default (state = {
  0: {
    squares: Array(9).fill(null),
    }
}, action) => {
  let newState;
  const { player, index, turn} = action;

  switch(action.type) {
    case 'MARK_TURN':
      const current = Object.assign({}, state[turn-1]);
      let newBoard = current.squares.slice();
      newBoard[index] = player;
      newState = Object.assign({}, state, {
        [turn]: {
          squares: newBoard
        }
      });
      return newState;
    default:
      return state;
  }
};
