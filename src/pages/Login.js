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

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: { email: '', password: '' },
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
    const { style, email, password, rememberMe } = this.state;

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
              value={email}
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
              value={password}
              autoComplete="current-password"
              onChange={this.onChange('password')}
            />
            <FormControlLabel
              control={<Checkbox value={rememberMe} color="primary" />}
              label="Se souvenir de moi"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={style.submit}
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

  onChange = name => event => {
    const { value } = event.target;
    this.setState(state => ({
      ...state,
      form: { ...state.form, [name]: value },
    }));
  };
}

export default Login;
