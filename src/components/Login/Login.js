import { useState } from 'react'
import {Input, Grid, FormHelperText, InputLabel, FormControlLabel, Checkbox,  Button, Icon, makeStyles, InputAdornment, IconButton  } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons'
import * as actions from '../../store/actions/loginActions'
import { connect } from 'react-redux';
import firebase from 'firebase';
import { isAuthChanged } from '../../store/actions/loginActions'
import { useDispatch } from 'react-redux';

const useStyles = makeStyles(theme => ({
  root: {
    margin: `${theme.spacing(1)}px auto`,
  }
}))

function Login ({values, handleChange}) {

  const classes = useStyles()
  const { email, password } = values

  const dispatch = useDispatch()

  const [isRegister, setIsRegister] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  function handleChecked () {
    setIsRegister(!isRegister)
  }

  function handleClickShowPassword () {
    setShowPassword(!showPassword)
  }

  function handleMouseDownPassword (event) {
    event.preventDefault();
  };

  async function handleLogin () {
    setErrorMessage('')

    if (!isRegister) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password)
      } catch (error) {
        setErrorMessage(error.message)
      }
    } else {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
      } catch (error) {
        setErrorMessage(error.message)
      }
    }
  }

  return (
    <>
      <h2>{!isRegister ? 'Login' : 'Sing up' }</h2>
      <Grid 
        container
        direction="row"
        justifyContent="flex-start"
      >
        <Grid item xs={5}>

          <InputLabel htmlFor="email" className={classes.root} >Login details</InputLabel>
          <Input name="email" value={email} aria-describedby="email" placeholder="Email" fullWidth className={classes.root} onChange={handleChange}/>
          <FormHelperText id="email">We'll never share your email.</FormHelperText>

          <Input 
            type={showPassword ? 'text' : 'password'} 
            name="password" 
            value={password} 
            aria-describedby="password" 
            placeholder="Password" 
            fullWidth 
            className={classes.root} 
            onChange={handleChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
          <FormHelperText id="password">Please use 8 or more characters, with at least 1 number and a
            mixture
            of.</FormHelperText>
          
          <FormControlLabel
            control={
              <Checkbox
                onChange={handleChecked}
                name="isRegister"
                color="primary"
                checked={isRegister}
              />
            }
            label="Sing up"
          />

          <Button
            variant="contained"
            color="primary"
            className={classes.root}
            endIcon={<Icon>send</Icon>}
            onClick={handleLogin}
          >
            {!isRegister ? 'Login' : 'Sing up' }
          </Button>
          <p>{errorMessage}</p>
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