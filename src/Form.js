import React, { useContext } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { LanguageContext } from './contexts/LanguageContext';

import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import styles from './styles/formStyles';

const words = {
  english: {
    signIn: 'Sign In',
    email: 'Email',
    password: 'Password',
    remember: 'Remember Me'
  },
  spanish: {
    signIn: 'Registrarse',
    email: 'Correo Electrónico',
    password: 'Contraseña',
    remember: 'Recuérdame'
  },
  french: {
    signIn: 'Se Connecter',
    email: 'Adresse Életronique',
    password: 'Mot de Passe',
    remember: 'Souviens-toi de Moi'
  }
}

function Form(props) {
  const { language, changeLanguage } = useContext(LanguageContext);
  const { classes } = props;
  const { email, signIn, password, remember } = words[language];

  return (
    <main className={classes.main}>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant='h5'>{signIn}</Typography>
        <Select value={language} onChange={changeLanguage}>
          <MenuItem value='english'>English</MenuItem>
          <MenuItem value='spanish'>Spanish</MenuItem>
          <MenuItem value='french'>French</MenuItem>
        </Select>
        <form className={classes.form}>
          <FormControl margin='normal' required fullWidth>
            <InputLabel htmlFor='email'>{email}</InputLabel>
            <Input id='email' name='email' autoFocus></Input>
          </FormControl>
          <FormControl margin='normal' required fullWidth>
            <InputLabel htmlFor='password'>{password}</InputLabel>
            <Input id='password' name='password' autoFocus></Input>
          </FormControl>
          <FormControlLabel control={<Checkbox color='primary' />} label={remember} />
          <Button variant='contained' type='submit' fullWidth color='primary' className={classes.submit}>
            {signIn}
          </Button>
        </form>
      </Paper>
    </main>
  )
}

export default withStyles(styles)(Form);
