import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: `${theme.spacing(1)}px`,
  },
  grid: {
    margin: `${theme.spacing(1)}px`,
    wordWrap: 'break-word'
  },
  msg: {
    padding: `${theme.spacing(1)}px 0`,
    // borderBottom: '1px solid rgba(0, 0, 0, 0.12)'
  }
}));

function Message({text, author}) {

  const classes = useStyles()

  return (
    <Paper variant="outlined" className={classes.paper}>
      <Grid className={classes.grid}>
        <Grid item xs={12}>
          <Typography color="primary">{ author }</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.msg} >
            { text }
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}

Message.propTypes = {
  text: PropTypes.string,
  author: PropTypes.string
}

export default Message