import { render } from '@testing-library/react'
import ChatListItem from '../ChatListItem'

describe('Chat list', () => {
  it('snapshot', () => {
    const wrapper = render(<ChatListItem name='First chat'/>)

    expect(wrapper).toMatchSnapshot()
  })
})