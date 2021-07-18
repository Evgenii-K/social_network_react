import React from 'react'
import ChatList from '../ChatList/ChatList'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Message from '../Message/Message'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(1),
  },
  paperChat: {
    // alignSelf: 'stretch',
    minHeight: '100%'
  },
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    alignSelf: 'stretch',
    minHeight: '100%'
  },
  grid: {
    margin: `${theme.spacing(1)}px`,
    color: 'rgba(0, 0, 0, 0.54)'
  }
}));

export default function MessageList ({messages, chats}) {

  const classes = useStyles()

  return (
    <Paper className={classes.paper}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
      >
        <Grid item xs={3}>
          <ChatList chats={chats}/>
        </Grid>
        <Grid item xs={9} className={classes.root}>
          <Paper variant="outlined" square className={classes.paperChat}>
            {messages.length 
              ? messages.map(message => {
               return <Message message={message} key={message.id}/>
              })
              : <Typography className={classes.grid}>Message list is empty</Typography>
            }
          </Paper>
        </Grid>
      </Grid>
    </Paper>
  )
}