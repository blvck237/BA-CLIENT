import { makeStyles } from '@material-ui/core/styles';

const buttonStyles = makeStyles(theme=>({
  rectangularButton: {
    background: theme.palette.primary.main,
    border: 0,
    borderRadius: 0,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0.5em 1.5em',
    margin: 10,
  },
}));

export default buttonStyles;
