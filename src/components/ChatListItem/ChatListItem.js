import PropTypes from 'prop-types'
import { makeStyles, ListItemText, Avatar, ListItem } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  list: {
    padding: '0'
  },
  avatar: {
    marginRight: theme.spacing(1)
  }
}));

function ChatListItem ({name}) {

  const classes = useStyles()

  return (
    <ListItem 
      button
      className={classes.list}
    >
      <Avatar className={classes.avatar}>W</Avatar>
      <ListItemText primary={name}/>
    </ListItem>
  )
}

ChatListItem.propTypes = {
  name: PropTypes.string
}

export default ChatListItem