import {useState, useCallback} from 'react'
import ChatListItem from '../ChatListItem/ChatListItem'
import { makeStyles, List, Button, TextField, IconButton } from '@material-ui/core'
import { Link } from 'react-router-dom'
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch, useSelector } from 'react-redux'
import { chatsListInit } from '../../store/selectors/chatsSelectors'
import { addChatAction, onDeleteAction } from '../../store/actions/chatsActions'


const useStyles = makeStyles((theme) => ({
  list: {
    padding: 0
  },
  link: {
    color: 'black',
    textDecoration: 'none',
    flexBasis: '180px'
  },
  item: {
    display: 'flex',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    alignItems: 'center'
  },
  newChat: {
    paddingTop: theme.spacing(1)
  }
}));

function ChatList () {

  const dispatch = useDispatch()

  const chatsList = useSelector(chatsListInit)

  const onDelete = useCallback(
    (id) => {
      dispatch(onDeleteAction(id))
    },
    [dispatch],
  )
  
  const onAddChat = useCallback(
    (newName) => {
      dispatch(addChatAction(newName))
    },
    [dispatch],
  )

  const classes = useStyles()

  const [chatName, setChatName] = useState('')

  return (
    <>
      <List
        component="nav"
        className={classes.list}
      >
        {chatsList.map(chat => {
            return (
              <div className={classes.item} key={chat.id}>
                <Link to={`/chats/${chat.id}`} className={classes.link}>
                  <ChatListItem name={chat.name} onDelete={onDelete}/>
                </Link>
                <IconButton 
                  aria-label="delete" 
                  onClick={() => onDelete(chat.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </div>
            )
          })
        }
      </List>
      <form 
        onSubmit={(event) => {
          event.preventDefault()
          onAddChat(chatName)
          setChatName('')
        }}
        autoComplete="off"
      >
        <Button 
          type="submit"
          fullWidth 
          variant="contained" 
          color="primary" 
        >
          Add a new chat
        </Button>
        <TextField
          required
          className={classes.newChat}
          size="small"
          color="secondary"
          variant="outlined"
          fullWidth
          placeholder="New chat name"
          type='text'
          name='name'
          value={chatName}
          onChange={(event) => setChatName(event.target.value)}
        />
      </form>
    </>
  )
}

export default ChatList