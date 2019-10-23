import { makeStyles } from '@material-ui/core/styles';

const layoutStyles = makeStyles(theme => ({
  navbar: {
    background: '#FFF',
    border: 0,
    borderRadius: 0,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 80,
    padding: '1.5em',
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
}));

export default layoutStyles;
