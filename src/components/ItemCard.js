import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    justifyContent: 'flex-end',
    width: 200,
    height: 200,
  },
  rating: {
    alignSelf: 'flex-end',
  },
}));

const ItemCard = ({ title, price, rating }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {`${price} €`}
          </Typography>
          <Rating className={classes.rating} value={rating} readOnly />
        </CardContent>
      </div>
      <CardMedia
        className={classes.cover}
        image="https://source.unsplash.com/400x400/?smartphone"
        title={title}
      />
    </Card>
  );
};

export default ItemCard;
