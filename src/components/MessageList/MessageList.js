import Message from '../Message/Message'
import { makeStyles, Paper, Typography } from '@material-ui/core'
import { useRouteMatch } from 'react-router-dom'
import { connect } from 'react-redux';

const useStyles = makeStyles(() => ({
  paperChat: {
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

function MessageList ({messages}) {

  const classes = useStyles()
  const { chatId }= useRouteMatch().params

  messages = messages[chatId] || ''

  return (
    <Paper className={classes.paperChat}>
      {messages.length 
        ? messages.map(message => {
          const {id, ...msg} = message
          return <Message {...msg} key={id}/>
        })
        : <Typography className={classes.empty}>Message list is empty</Typography>
      }
    </Paper>
  )
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  }
}

export default connect(mapStateToProps)(MessageList)