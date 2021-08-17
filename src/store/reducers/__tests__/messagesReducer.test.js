import stateMessages from '../messagesReducer'
import { ON_ADD_MESSAGE } from "../../types"

const initialStateMessages = {
  messages: {}
}

describe('messages reducer', () => {
  it('returns the initial state', () => {
    expect(stateMessages(undefined, {})).toEqual(initialStateMessages);
  });

  it('handles login request', () => {

    const action = { type: ON_ADD_MESSAGE, payload: { chatId: 'id1', messages: 'Hellow' } }

    expect(stateMessages(initialStateMessages, action)).toEqual({
      ...initialStateMessages,
      messages: {
        id1: 'Hellow'
      },
    });
  });

})