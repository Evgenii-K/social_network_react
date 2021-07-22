import {useState, useRef, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  }
}));

function PostForm ({onAdd, formRef}) {

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

      const lastAuthor = value.author.length ? value.author : 'anonymous'

      timer.current = setTimeout(() => {
        console.log('setTimeout')
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
    console.log('clear')
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
        >
          <Grid item xs={10}>
            <TextField
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

export default PostForm