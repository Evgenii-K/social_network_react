import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Message from '../Message/Message'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  paperChat: {
    minHeight: '100%'
  },
  grid: {
    color: 'rgba(0, 0, 0, 0.54)'
  }
}));

function MessageList ({messages}) {

  const classes = useStyles()

  return (
    <Paper className={classes.paperChat}>
      {messages.length 
        ? messages.map(message => {
          const {id, ...msg} = message
          return <Message {...msg} key={id}/>
        })
        : <Typography className={classes.grid}>Message list is empty</Typography>
      }
    </Paper>
  )
}

MessageList.prpTypes = {
  messages: PropTypes.array
}

export default MessageList