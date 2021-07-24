import React from 'react'
import PropTypes from 'prop-types'
import ListItem from '@material-ui/core/ListItem'
import Avatar from '@material-ui/core/Avatar'
import { makeStyles } from '@material-ui/core/styles'
import ListItemText from '@material-ui/core/ListItemText'

const useStyles = makeStyles(() => ({
  list: {
    padding: '8px 0'
  },
  avatar: {
    marginRight: '8px'
  }
}));

function ChatListItem ({name}) {

  const classes = useStyles()

  return (
    <>
      <ListItem 
        button
        className={classes.list}
      >
        <Avatar className={classes.avatar}>W</Avatar>
        <ListItemText primary={name}/>
      </ListItem>
    </>
  )
}

ChatListItem.propTypes = {
  name: PropTypes.string
}

export default ChatListItem