import React from 'react';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ContactPhone from '@material-ui/icons/ContactPhone';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/styles';
import Lock from '@material-ui/icons/Lock';
import Button from '@material-ui/core/Button';
import '../../assets/styles/authForm.scss';

const useStyles = makeStyles(theme => ({
  Input: {
    margin: 5,
  },
  Button: {
    background: "#FFFFFF",
    margin: 8,
    borderRadius: 50,
    padding: "10px 30px",
  },
  ButtonArea: {
    display: "flex",
    justifyContent: "center",
    padding: 10,
},
}))

const AuthForm = (props) => {
  const classes = useStyles();
  const { signup, handleInput, handleClick } = props;

  return (
    <div className="auth-form">
      <h3 className="auth-form__heading">{signup ? 'Sign Up' : 'Log In'}</h3>
      {
        signup && (
          <div className={classes.Input}>
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
                <AccountCircle />
              </Grid>
              <Grid item>
                <TextField id="input-with-icon-grid" label="username" onChange={handleInput} name="username"/>
              </Grid>
            </Grid>
          </div>
        )
      }
      <div className={classes.Input}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <ContactPhone />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="Phone no." onChange={handleInput} name="phone_number"/>
          </Grid>
        </Grid>
      </div>
      <div className={classes.Input}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <Lock />
          </Grid>
          <Grid item>
            <TextField type="password" id="input-with-icon-grid" label="Password" name="password" onChange={handleInput}/>
          </Grid>
        </Grid>
      </div>
      <div className={classes.ButtonArea}>
        <Button  className={classes.Button} onClick={handleClick} >{signup ? 'Sign Up' : 'Log In'}</Button>
      </div>
    </div>
  )
}

export default AuthForm;
