import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import PropTypes from 'prop-types';
import { requestLogin, requestLogout } from '../redux/actions/accountActions';
import { connect } from 'react-redux';
import { tokenSelector } from '../redux/selectors';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        email: '', // jfokoua@gmail.com
        password: '', // test0000
      },
      rememberMe: false,
      style: {
        paper: {
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        },
        avatar: {
          margin: 10,
          backgroundColor: 'green',
        },
        form: {
          width: '100%', // Fix IE 11 issue.
          marginTop: 10,
        },
        submit: {
          marginTop: 10,
        },
      },
    };
  }

  render() {
    const { style, form, rememberMe } = this.state;

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div style={style.paper}>
          <Avatar style={style.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Connexion
          </Typography>
          <form style={style.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              value={form.email}
              autoFocus
              onChange={this.onChange('email')}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Mot de Passe"
              type="password"
              id="password"
              value={form.password}
              autoComplete="current-password"
              onChange={this.onChange('password')}
            />
            <FormControlLabel
              control={<Checkbox value={rememberMe} color="primary" />}
              label="Se souvenir de moi"
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              style={style.submit}
              onClick={this.signIn}
              disabled={this.checkForm()}
            >
              Connexion
            </Button>
          </form>
        </div>
        <Box mt={8}>
          <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://github.com/blvck237">
              Jordan Fokoua
            </Link>
            {` ${new Date().getFullYear()}`}
          </Typography>
          <Typography variant="body2" color="textSecondary" align="center">
            Made with ❤
          </Typography>
        </Box>
      </Container>
    );
  }

  signIn = () => {
    const { form } = this.state;
    const { requestLogin, history } = this.props;
    requestLogin({ email: form.email, password: form.password }).then(() => {
      console.log('Auth');
      history.push('/products');
    });
  };

  signOut = () => {
    const { requestLogout } = this.props;
    requestLogout().then(() => {
      console.log('Not Auth');
    });
  };

  checkForm = () => {
    const { form } = this.state;
    let bool = false;

    Object.keys(form).map(key => {
      if (form[key] === '') {
        bool = true;
        return bool;
      }
    });
    return bool;
  };

  onChange = name => event => {
    const { value } = event.target;
    this.setState(state => ({
      ...state,
      form: { ...state.form, [name]: value },
    }));
  };
}

const mapStateToProps = state => {
  return {
    token: tokenSelector(state),
  };
};

export default connect(
  mapStateToProps,
  { requestLogin, requestLogout }
)(Login);

Login.propTypes = {
  requestLogin: PropTypes.func.isRequired,
  requestLogout: PropTypes.func.isRequired,
};
