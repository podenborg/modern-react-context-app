import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { ThemeContext } from './contexts/ThemeContext';
import { withLanguageContext } from './contexts/LanguageContext';

import AppBar from '@material-ui/core/AppBar';
import Switch from '@material-ui/core/Switch';
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import styles from './styles/navBarStyles';

const content = {
  english: {
    search: 'Search',
    flag: '🇺🇸'
  },
  spanish: {
    search: 'Buscar',
    flag: '🇪🇸'
  },
  french: {
    search: 'Chercher',
    flag: '🇫🇷'
  }
}

class Navbar extends Component {
  static contextType = ThemeContext;

  render() {
    const { isDarkMode, toggleTheme } = this.context;
    const { classes } = this.props;
    const { language } = this.props.languageContext;
    const { search, flag } = content[language];
    
    return (
      <div className={classes.root}>
        <AppBar position='static' color={isDarkMode ? 'default' : 'primary'}>
          <Toolbar>
            <IconButton className={classes.menuButton} color='inherit'>
              <span>{flag}</span>
            </IconButton>
            <Typography className={classes.title} variant='h6' color='inherit'>
              App Title
            </Typography>
            <Switch onChange={toggleTheme} />
            <div className={classes.grow} />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase placeholder={`${search}...`} classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }} />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default withLanguageContext(withStyles(styles)(Navbar));
