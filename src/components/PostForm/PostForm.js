import { makeStyles, TextField, Paper, Button, Icon, Grid } from '@material-ui/core'
import PropTypes from 'prop-types'

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

function PostForm ({formRef, sendMessage, onChange, inputRef, value}) {

  const classes = useStyles()

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
  formRef: PropTypes.object,
  inputRef: PropTypes.object,
  value: PropTypes.object,
  sendMessage: PropTypes.func,
  onChange: PropTypes.func
}

export default PostForm