import { render } from "@testing-library/react";
import MessageList from "../MessageList";
import { Provider } from 'react-redux'

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}))

describe('MessagesList', () => {
  it('Should contain "Message list is empty"', () => {
   
    render(
        <Provider store={{
          dispatch: jest.fn()
        }}>
          <MessageList messages={[]}/>
        </Provider>
    )

    const message = screen.getByText('Message list is empty')

    expect(message).toBeInTheDocument()
  })
})