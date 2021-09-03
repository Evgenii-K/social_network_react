import MessageList from '../MessageList/MessageList'
import { useRouteMatch } from 'react-router-dom'
import { connect } from 'react-redux';

function MessageContainer ({messages}) {
  const { chatId }= useRouteMatch().params

  messages = messages[chatId] || []

  return <MessageList messages={messages} />
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages.messages
  }
}

export default connect(mapStateToProps)(MessageContainer)