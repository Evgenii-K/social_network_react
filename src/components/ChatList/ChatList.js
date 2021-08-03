import ChatListItem from '../ChatListItem/ChatListItem'
import { makeStyles, List, IconButton } from '@material-ui/core'
import { Link } from 'react-router-dom'
import DeleteIcon from '@material-ui/icons/Delete';
import PropTypes from 'prop-types'

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
  }
}));

function ChatList ({onDelete=f=>f, chatsList={}}) {

  const classes = useStyles()

  return (
    <List
      component="nav"
      className={classes.list}
    >
      {chatsList.map(chat => {
          return (
            <div className={classes.item} key={chat.id}>
              <Link to={`/chats/${chat.id}`} className={classes.link}>
                <ChatListItem name={chat.name}/>
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
  )
}

ChatList.propTypes = {
  onDelete: PropTypes.func,
  chatsList: PropTypes.array
}

export default ChatList