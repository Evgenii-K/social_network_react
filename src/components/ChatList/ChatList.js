import React from 'react'
import List from '@material-ui/core/List'
import ChatListItem from '../ChatListItem/ChatListItem'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  list: {
    padding: 0
  }
}));

export default function ChatList ({chats}) {

  const classes = useStyles()

  return (
    <List
      component="nav"
      aria-label="secondary mailbox folders"
      className={classes.list}
    >
      {chats.map(chat => <ChatListItem name={chat.name} key={chat.id}/>)}
    </List>
  )
}