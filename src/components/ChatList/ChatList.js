import {useState} from 'react'
import PropTypes from 'prop-types'
import ChatListItem from '../ChatListItem/ChatListItem'
import { makeStyles, List, Button, TextField, IconButton } from '@material-ui/core'
import { Link } from 'react-router-dom'
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(() => ({
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
    paddingTop: '8px',
    paddingBottom: '8px',
    alignItems: 'center'
  }
}));

function ChatList ({chatsList, onDelete=f=>f, onAddChat=f=>f}) {

  const classes = useStyles()

  const [chatName, setChatName] = useState('')

  return (
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
    <Button variant="contained" color="primary" onClick={() => onAddChat(chatName)}>Add a new chat</Button>
    <TextField
      // size="small"
      color="secondary"
      variant="outlined"
      fullWidth
      placeholder="New chat name"
      type='text'
      name='name'
      value={chatName}
      onChange={(event) => setChatName(event.target.value)}
      // label='New chat name'
    />
    </List>
  )
}

ChatList.propTypes = {
  chatsList: PropTypes.array,
  onDelete: PropTypes.func,
  onAddChat:PropTypes.func
}

export default ChatList