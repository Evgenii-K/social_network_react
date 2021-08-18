import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Typography, Paper, Grid } from '@material-ui/core'
import { withStyles as Message } from "@material-ui/core/styles";

const useStyles = theme => ({
  paper: {
    margin: `${theme.spacing(1)}px`,
  },
  grid: {
    margin: `${theme.spacing(1)}px`,
    wordWrap: 'break-word'
  },
  msg: {
    padding: `${theme.spacing(1)}px 0`,
  }
});

class MessageWithoutStyles extends PureComponent {

  render () {

    const { classes }  = this.props

    return (
      <Paper variant="outlined" className={classes.paper}>
        <Grid className={classes.grid}>
          <Grid item xs={12}>
            <Typography color="primary">{ this.props.author }</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.msg} >
              { this.props.text }
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

Message.propTypes = {
  text: PropTypes.string,
  author: PropTypes.string,
}

export default Message(useStyles, { withTheme: true })(MessageWithoutStyles)