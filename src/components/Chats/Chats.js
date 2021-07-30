import { useRef, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import ChatList from '../ChatList/ChatList'
import MessageList from '../MessageList/MessageList'
import { makeStyles, Typography, Grid, Paper } from '@material-ui/core'
import PostForm from '../PostForm/PostForm'
import {Redirect} from 'react-router'
import { chatsKeysSelector, chatsSelector, chatsListInit } from '../../store/selectors/chats'
import { useDispatch, useSelector } from 'react-redux'
import { addChatAction, onDeleteAction, onAddMessageAction } from '../../store/actions'

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
  const dispatch = useDispatch()

  const onAddChat = useCallback(
    (newName) => {
      dispatch(addChatAction(newName))
    },
    [dispatch],
  )

  const onDelete = useCallback(
    (id) => {
      dispatch(onDeleteAction(id))
    },
    [dispatch],
  )

  const onAdd = useCallback(
    (message) => {
      message = 
      dispatch(onAddMessageAction(message, chatId))
    },
    [dispatch, chatId],
  )

  const chats = useSelector(chatsSelector)
  const keys = useSelector(chatsKeysSelector)
  const chatsList = useSelector(chatsListInit)

  const messages = (chats[chatId]) ? chats[chatId].messages : ''

  useEffect(() => {
    if (!messages.length) return
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
            <ChatList chatsList={chatsList} onDelete={onDelete} onAddChat={onAddChat}/>
          </Grid>
          <Grid item xs={9} className={classes.root}>
            {chatId ? <MessageList messages={messages}/> : <Typography className={classes.empty}>Select chat</Typography>}
          </Grid>
        </Grid>
      </Paper>
      {chatId ? <PostForm onAdd={onAdd} formRef={formRef}/> : null}
    </>
  )
}

Chats.prpTypes = {
  chatsId: PropTypes.string
}

export default Chats