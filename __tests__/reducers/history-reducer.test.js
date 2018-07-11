import historyReducer from './../../src/reducers/history-reducer';

describe('historyReducer', () => {

  let action;
  test('Should return default state if no action type is recognized', () => {
    expect(historyReducer(
      {
        0: {
          squares: Array(9).fill(null),
          }
      },
      { type: null })).toEqual({
        0: {
          squares: Array(9).fill(null),
          }
      });
  });

  test('Should mark move and add turn to history', () => {
    action = {
      type: 'MARK_TURN',
      player: 'X',
      index: 5,
      turn: 1
    }
    expect(historyReducer({
      [0]: {
        squares: Array(9).fill(null),
        }
    }, action)).toEqual({
      [0]: {
        squares: Array(9).fill(null),
      },
      [1]: {
        squares: [null, null, null, null, null, 'X', null, null, null]
      }
    } );
  });
})
