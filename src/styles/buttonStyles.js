import { makeStyles } from '@material-ui/core/styles';

const buttonStyles = makeStyles({
  rectangularButton: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 0,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0.5em 1.5em',
  },
});

export default buttonStyles;
