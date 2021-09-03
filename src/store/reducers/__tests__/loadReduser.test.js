import loadState from "../loadReducer";
import { HIDE_LOADER } from '../../types'


const initialLoadState = {
  loading: true
}

describe('loading state', () => {
  it('hide loader', () => {
    const action = {type: HIDE_LOADER}

    expect(loadState(initialLoadState, action)).toEqual({
      ...initialLoadState,
      loading: false
    })
  })
})