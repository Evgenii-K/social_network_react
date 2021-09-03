import { PureComponent } from 'react';
import PropTypes from 'prop-types'
import { ListItemText, Avatar, ListItem } from '@material-ui/core'
import { withStyles as ChatListItem } from "@material-ui/core/styles";

const useStyles = theme => ({
  list: {
    padding: '0'
  },
  avatar: {
    marginRight: theme.spacing(1)
  }
});

class ChatListItemWithoutStyles extends PureComponent {

  render () {
    const { classes, name } = this.props

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
}

ChatListItem.propTypes = {
  name: PropTypes.string
}

export default ChatListItem(useStyles, { withTheme: true })(ChatListItemWithoutStyles)