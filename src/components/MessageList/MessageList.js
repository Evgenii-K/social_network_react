import React from 'react'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
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
    alignSelf: 'stretch',
    minHeight: '100%'
  },
  root: {
    flexGrow: 1,
    overflow: 'hidden',
  },
  grid: {
    margin: `${theme.spacing(1)}px`,
    color: 'rgba(0, 0, 0, 0.54)'
  }
}));

export default function ChatList ({messages}) {

  const classes = useStyles()

  return (
    <Paper className={classes.paper}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
      >
        <Grid item xs={2}>
          <List 
            component="nav" 
            aria-label="secondary mailbox folders"
          >
            <ListItem button>
              <ListItemText primary="Trash" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Spam" />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={10} className={[classes.paperChat, classes.root]}>
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