import React from 'react'
import Message from '../Message/Message'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
  }
}));


function MessageList ({messages}) {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      {messages.map(message => {
        return <Message message={message} key={message.id}/>
      })}
    </div>
  )
}

export default MessageList