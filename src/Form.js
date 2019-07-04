import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import styles from './styles/formStyles';

class Form extends Component {
  render() {
    const { classes } = this.props;

    return (
      <main className={classes.main}>
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant='h5'>Sign In</Typography>
          <Select value='english'>
            <MenuItem value='english'>English</MenuItem>
            <MenuItem value='spanish'>Spanish</MenuItem>
            <MenuItem value='french'>French</MenuItem>
          </Select>
          <form className={classes.form}>
            <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='email'>Email</InputLabel>
              <Input id='email' name='email' autoFocus></Input>
            </FormControl>
            <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='password'>Password</InputLabel>
              <Input id='password' name='password' autoFocus></Input>
            </FormControl>
            <FormControlLabel control={<Checkbox color='primary' />} label='Remember Me' />
            <Button variant='contained' type='submit' fullWidth color='primary' className={classes.submit}>
              Sign In
            </Button>
          </form>
        </Paper>
      </main>
    )
  }
}

export default withStyles(styles)(Form);
