import stepNumberReducer from './../../src/reducers/step-number-reducer';

describe('stepNumberReducer', () => {



  test('Should return the default state if no action is recognized', () => {
    expect(stepNumberReducer(0, { type: null })).toEqual(0);
  });

  test('Should record the current turn', () => {
    expect(stepNumberReducer(0, { type: 'RECORD_TURN', turn: 1 })).toEqual(1);
  });

});
