import { makeStyles, Button, TextField } from '@material-ui/core'
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
  newChat: {
    paddingTop: theme.spacing(1)
  }
}))


function ChatListAddForm ({onAddChat, setName, chatName}) {

  const classes = useStyles()
  
  return (
    <form 
      onSubmit={(event) => {
        event.preventDefault()
        onAddChat(chatName)
        setName('')
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
        onChange={(event) => setName(event.target.value)}
      />
    </form>
  )
}

ChatListAddForm.propTypes = {
  onAddChat: PropTypes.func,
  setName: PropTypes.func,
  chatName: PropTypes.string
}

export default ChatListAddForm