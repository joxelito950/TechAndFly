import actions from '../actions'
import * as types from '../actionType'

describe('Validar actions =>  {{ComponentName}}', () => {
  it('Deberia crear la accion dummyAction', () => {
    const payload = {text: "Runs action test"};
    const expectedAction = {
      type: types.DUMMY_ACTION,
      payload: {text: "Runs action test"}
    }
    expect(actions.dummyAction(payload)).toEqual(expectedAction)
  })
})