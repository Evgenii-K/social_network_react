import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  grid: {
    margin: `${theme.spacing(1)}px`,
    wordWrap: 'break-word'
  },
  msg: {
    padding: `${theme.spacing(1)}px 0`,
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)'
  }
}));

function Message({message}) {

  const {text, author} = message
  const classes = useStyles()

  return (
    <>
      <Grid sm spacing={1} className={classes.grid}>
        <Grid item xs={12}>
          <Typography color="primary">{ author }</Typography>
        </Grid>
        <Grid item xs={12} borderBottom={1}>
          <Typography className={classes.msg}>{ text }</Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default Message