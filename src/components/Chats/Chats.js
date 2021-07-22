import PropTypes from 'prop-types'
import ChatList from '../ChatList/ChatList'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import MessageList from '../MessageList/MessageList'
import { makeStyles } from '@material-ui/core/styles'
import PostForm from '../PostForm/PostForm'

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(1),
  },
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    alignSelf: 'stretch',
    minHeight: '100%'
  }
}));

function Chats ({messages, chats, onAdd, formRef}) {

  const classes = useStyles()

  return (
    <>
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
            <MessageList messages={messages}/>
          </Grid>
        </Grid>
      </Paper>
      <PostForm onAdd={onAdd} formRef={formRef}/>
    </>
  )
}

Chats.prpTypes = {
  messages: PropTypes.array,
  chats: PropTypes.array
}

export default Chats