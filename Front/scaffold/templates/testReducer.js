import reducer from '../reducer'
import * as types from '../actionType'

describe('Validar reducer => {{ComponentName}}', () => {
  it('Validar estado inicial', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        dummyState: ''
      }
    )
  })

  it('Validar la accion DUMMY_ACTION', () => {
    expect(
      reducer([], {
        type: types.DUMMY_ACTION,
        payload: {text: 'Run the tests'}
      })
    ).toEqual({text: 'Run the tests'})
  })
})