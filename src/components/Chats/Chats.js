import { useRef, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import ChatList from '../ChatList/ChatList'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import MessageList from '../MessageList/MessageList'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import PostForm from '../PostForm/PostForm'
import {Redirect} from 'react-router'

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

  const [chats, setChats] = useState({
    id1: { name: 'FirstChat', messages: [
      {id: 1231, text: 'Привет', author: 'Ivan'},
      {id: 1321, text: 'Привет', author: 'Bot'}
    ]},
    id2: { name: 'SecondChat', messages: [
      {id: 1231, text: 'Bay', author: 'Jacob'},
      {id: 1321, text: 'Bay', author: 'Bot'}
    ]}
  })

  const messages = (chats[chatId]) ? chats[chatId].messages : ''
  const keys = Object.keys(chats)
  const chatsList = chatsListInit()

  useEffect(() => {
    if (!messages.length) return
    window.scrollTo({ top: formRef.current.offsetTop, left: 0, behavior: 'smooth' })
  }, [messages])

  if (chatId && !keys.includes(chatId)) return <Redirect to="/chats" />

  function chatsListInit () {
    return keys.map(key => ({id: key, name: chats[key].name}))
  }

  function onAdd ({text, author}) {
    const newMsg = {
      id: Date.now(), 
      text,
      author: author === '' ? 'anonymous' : author
    }
    setChats(current => {
      current[chatId].messages = [...current[chatId].messages, newMsg]
      return {...current, [chatId]: current[chatId]}
    })
  }

  function onDelete (id) {
    setChats(currentChats => {
      return (
        Object.fromEntries(
          Object.entries(currentChats)
            .filter(item => item[0] !== id)
        )
      )
    })
  }

  function onAddChat (newName) {
    let nextId = 'id0'
    let keys = Object.keys(chats)
    if (keys) {
      keys = keys.map(key => key[2])
      nextId = `id${Math.max.apply(null, keys) + 1}`
    }

    setChats(current => ({...current, [nextId]: {name: newName, messages: []}}))
  }

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