import {useState, useRef, useEffect, useCallback } from 'react'
import { makeStyles, TextField, Paper, Button, Icon, Grid } from '@material-ui/core'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { onAddMessageAction } from '../../store/actions'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
  send: {
    paddingTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'space-between'
  }
}));

function PostForm ({chatId, formRef}) {

  const dispatch = useDispatch()
  
  const onAdd = useCallback(
    (message) => {
      message = 
      dispatch(onAddMessageAction(message, chatId))
    },
    [dispatch, chatId],
  )
  
  const classes = useStyles()

  const timer = useRef(null)

  const [value, setValue] = useState(
    {
      text: '', 
      author: ''
    }
  )

  const inputRef = useRef('')

  function sendMessage (event) {
    event.preventDefault()
    if (value.text.trim()) {
      onAdd(value)

      const lastAuthor = value.author || 'anonymous'

      timer.current = setTimeout(() => {
        const msg = bot(lastAuthor)
        onAdd(msg)
      }, 1500)

      setValue((current) => {
        return {
          text: '',
          author: current.author.length ? current.author : ''
        }
      })
      inputRef.current.focus()
    }
  }

  function bot (lastAuthor) {
    return { text: `Привет ${lastAuthor}!`, author: 'Bot' }
  }

  useEffect(() => {
    return () => clearTimeout(timer.current)
  }, [])

  function onChange (event) {
    const value = event.target.value
    const name = event.target.name
    setValue(current => {
      return {
        ...current, [name]: value
      }
    })
  }


  return (
    <Paper className={classes.paper} ref={formRef}>
      <form 
        onSubmit={sendMessage}
        className={classes.root}
        autoComplete="off"
      >
        <div>
          <TextField
            color="secondary"
            autoFocus
            required
            name='text'
            label="Type your text here"
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            value={value.text}
            onChange={onChange}
            inputRef={inputRef}
          />
        </div>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          className={classes.send}
        >
          <Grid item xs={9}>
            <TextField
              variant="outlined"
              size="small"
              color="secondary"
              fullWidth
              type='text'
              name='author'
              placeholder="Type your name here"
              value={value.author}
              onChange={onChange}
              label='Name'
            />
          </Grid>
          <Grid item xs={2} >
            <Button
              fullWidth
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
              endIcon={<Icon>send</Icon>}
            >
              Send
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  )
}

PostForm.propTypes = {
  chatId: PropTypes.string,
  formRef: PropTypes.object
}

export default PostForm