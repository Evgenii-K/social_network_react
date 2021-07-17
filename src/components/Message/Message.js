import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  grid: {
    margin: `${theme.spacing(1)}px auto`,
  }
}));

function Message({message}) {

  const {text, author} = message
  const classes = useStyles()

  return (
    <>
      <Grid container wrap="nowrap" spacing={2} className={classes.grid}>
        <Grid item>
          <Avatar>W</Avatar>
        </Grid>
        <Grid item xs={12} sm container spacing={2}>
          <Grid item xs={12}>
            <Typography>{ text }</Typography>
          </Grid>
          <Grid item xs={12} borderBottom={1}>
            <Typography>author: { author }</Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Message