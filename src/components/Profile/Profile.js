import FormControl from '@material-ui/core/FormControl';
import {Input, Grid, FormHelperText, InputLabel, FormControlLabel, RadioGroup, Radio, Button, Icon, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    margin: `${theme.spacing(1)}px auto`,
  }
}))

export default function Profile ({gender, handleChange}) {

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
          <Input id="firstName" placeholder="First name" fullWidth className={classes.root} name="firstName"/>
          <Input id="lastName" placeholder="Last name" fullWidth className={classes.root} name="lastName"/>
        
          <FormControl component="fieldset" className={classes.root}>
            <RadioGroup aria-label="gender" name="gender" value={gender} onChange={handleChange} row>
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>

          <InputLabel htmlFor="email" className={classes.root} >Login details</InputLabel>
          <Input id="email" aria-describedby="email" placeholder="Email" fullWidth className={classes.root} />
          <FormHelperText id="email">We'll never share your email.</FormHelperText>

          <Input id="password" aria-describedby="password" placeholder="Password" fullWidth className={classes.root} />
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