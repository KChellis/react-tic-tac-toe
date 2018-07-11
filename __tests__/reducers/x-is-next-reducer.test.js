import xIsNextReducer from './../../src/reducers/x-is-next-reducer';

describe('xIsNextReducer', () => {

  test('Should return the default state if no action is recognized', () => {
    expect(xIsNextReducer(true, { type: null })).toBeTruthy();
  });

  test('Should record the current turn', () => {
    expect(xIsNextReducer(true, { type: 'SWITCH_PLAYER', xIsNext: false })).toBeFalsy();
  });

});
