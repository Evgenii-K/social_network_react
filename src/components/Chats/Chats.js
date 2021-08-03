import { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import ChatListContainer from '../ChatListContainer/ChatListContainer'
import MessageContainer from '../MessageContainer/MessageContainer'
import { makeStyles, Typography, Grid, Paper } from '@material-ui/core'
import PostFormContainer from '../PostFormContainer/PostFormContainer'
import {Redirect} from 'react-router'
import { chatsKeysSelector } from '../../store/selectors/chatsSelectors'
import { useSelector } from 'react-redux'
import { messagesSelector } from '../../store/selectors/messages'

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
  },
  empty: {
    display: 'flex',
    justifyContent: 'center',
    color: 'rgba(0, 0, 0, 0.54)',
    paddingTop: '20px',
    fontSize: '20px'
  }
}));

function Chats ({chatId}) {

  const classes = useStyles()
  const formRef = useRef('')
  const keys = useSelector(chatsKeysSelector)
  let messages = useSelector(messagesSelector)

  messages = keys.includes(chatId) ? messages[chatId] : ''

  useEffect(() => {
    if (!messages?.length) return
    window.scrollTo({ top: formRef.current.offsetTop, left: 0, behavior: 'smooth' })
  }, [messages])

  if (chatId && !keys.includes(chatId)) return <Redirect to="/chats" />

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
            <ChatListContainer />
          </Grid>
          <Grid item xs={9} className={classes.root}>
            {chatId ? <MessageContainer /> : <Typography className={classes.empty}>Select chat</Typography>}
          </Grid>
        </Grid>
      </Paper>
      {chatId ? <PostFormContainer formRef={formRef}/> : null}
    </>
  )
}

Chats.prpTypes = {
  chatsId: PropTypes.string
}

export default Chats