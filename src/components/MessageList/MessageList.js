import Message from '../Message/Message'
import { makeStyles, Paper, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react'
import { subscribeOnMessage } from '../../store/actions/messagesActions'

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
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(subscribeOnMessage())
  }, [])

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

MessageList.propTypes = {
  messages: PropTypes.array
}

export default MessageList