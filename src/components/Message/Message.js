import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  }
}));

function Message({message}) {
  const classes = useStyles()
  const {text, author} = message

  return (
    <Paper className={classes.paper}>
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item>
          <Avatar>W</Avatar>
        </Grid>
        <Grid item xs={12} sm container spacing={2}>
          <Grid item xs={12}>
            <Typography>{ text }</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>author: { author }</Typography>
          </Grid>
        </Grid>

      </Grid>
    </Paper>
  );
}

export default Message