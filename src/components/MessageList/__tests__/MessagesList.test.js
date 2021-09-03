import { render, screen } from "@testing-library/react";
import MessageList from "../MessageList";
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

jest.mock('firebase', () => ({
  __esModule: true,
  default: {
    database: () => ({
      ref: () => ({ on: jest.fn() })
    }),
  }
}))

describe('MessagesList', () => {
  it('Should contain "Message list is empty"', () => {

    const store = createStore(combineReducers({
      messages: jest.fn(() => [])
    }), applyMiddleware(thunk))
    
    render(
      <Provider store={store}>
        <MessageList messages={[]}/>
      </Provider>
    )

    const message = screen.getByText('Message list is empty')

    expect(message).toBeInTheDocument()
  })
})