import actions from '../actions';
import * as types from '../actionType';

describe('Validar actions =>  {{ComponentName}}', () => {
  it('Deberia guardar la data', () => {
    const values = { text: 'Runs action test' };
    const expectedAction = {
      type: types.FORM_SAVE,
      values: { text: 'Runs action test' }
    };
    expect(actions.saveData(values)).toEqual(expectedAction);
  });
});
