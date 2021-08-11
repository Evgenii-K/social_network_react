import {Input, Grid, FormHelperText, InputLabel, FormControlLabel, Checkbox,  Button, Icon, makeStyles } from '@material-ui/core';
import * as actions from '../../store/actions/loginActions'
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
  root: {
    margin: `${theme.spacing(1)}px auto`,
  }
}))

function Login ({values, handleChange}) {

  const classes = useStyles()

  return (
    <>
      <h2>Login</h2>
      <Grid 
        container
        direction="row"
        justifyContent="flex-start"
      >
        <Grid item xs={4}>


          <InputLabel htmlFor="email" className={classes.root} >Login details</InputLabel>
          <Input name="email" value={values.email} aria-describedby="email" placeholder="Email" fullWidth className={classes.root} onChange={handleChange}/>
          <FormHelperText id="email">We'll never share your email.</FormHelperText>

          <Input name="password" value={values.password} aria-describedby="password" placeholder="Password" fullWidth className={classes.root} onChange={handleChange}/>
          <FormHelperText id="password">Please use 8 or more characters, with at least 1 number and a
            mixture
            of.</FormHelperText>
          
          <FormControlLabel
            control={
              <Checkbox
                value={values.isRegister}
                onChange={handleChange}
                name="isRegister"
                color="primary"
              />
            }
            label="Create account"
          />

          <Button
            variant="contained"
            color="primary"
            className={classes.root}
            endIcon={<Icon>send</Icon>}
          >
            Login
          </Button>
        </Grid>
      </Grid>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    values: state.login.values
  }
}

export default connect(mapStateToProps, actions)(Login)