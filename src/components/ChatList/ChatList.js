import React from 'react'
import PropTypes from 'prop-types'
import List from '@material-ui/core/List'
import ChatListItem from '../ChatListItem/ChatListItem'
import { makeStyles } from '@material-ui/core/styles'
// import { useRouteMatch, useParams } from 'react-router-dom'

const useStyles = makeStyles(() => ({
  list: {
    padding: 0
  }
}));

function ChatList ({chats}) {

  const classes = useStyles()

  return (
    <List
      component="nav"
      className={classes.list}
    >
      {chats.map(chat => <ChatListItem name={chat.name} key={chat.id}/>)}
    </List>
  )
}

ChatList.propTypes = {
  chats: PropTypes.array
}

export default ChatList