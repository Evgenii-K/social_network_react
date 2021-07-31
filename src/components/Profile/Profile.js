import FormControl from '@material-ui/core/FormControl';
import {Input, Grid, FormHelperText, InputLabel, FormControlLabel, RadioGroup, Radio, Button, Icon, makeStyles } from '@material-ui/core';
import * as actions from '../../store/actions/profileActions'
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
  root: {
    margin: `${theme.spacing(1)}px auto`,
  }
}))

function Profile ({values, handleChange}) {

  const classes = useStyles()

  return (
    <>
      <h1>Profile</h1>
      <Grid 
        container
        direction="row"
        justifyContent="flex-start"
      >
        <Grid item xs={4}>
          <InputLabel htmlFor="First_name" className={classes.root}>Your Name</InputLabel>
          <Input placeholder="First name" fullWidth className={classes.root} name="firstName" value={values.firstName} onChange={handleChange}/>
          <Input placeholder="Last name" fullWidth className={classes.root} name="lastName" value={values.lastName} onChange={handleChange}/>
        
          <FormControl component="fieldset" className={classes.root}>
            <RadioGroup aria-label="gender" name="gender" value={values.gender} onChange={handleChange} row>
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>

          <InputLabel htmlFor="email" className={classes.root} >Login details</InputLabel>
          <Input name="email" value={values.email} aria-describedby="email" placeholder="Email" fullWidth className={classes.root} onChange={handleChange}/>
          <FormHelperText id="email">We'll never share your email.</FormHelperText>

          <Input name="password" value={values.password} aria-describedby="password" placeholder="Password" fullWidth className={classes.root} onChange={handleChange}/>
          <FormHelperText id="password">Please use 8 or more characters, with at least 1 number and a
            mixture
            of.</FormHelperText>

          <Button
            variant="contained"
            color="primary"
            className={classes.root}
            endIcon={<Icon>send</Icon>}
          >
            Join now
          </Button>
        </Grid>
      </Grid>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    values: state.profile.values
  }
}

export default connect(mapStateToProps, actions)(Profile)