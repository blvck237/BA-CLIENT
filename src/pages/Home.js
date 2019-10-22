import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Container from '@material-ui/core/Container';

import ItemCard from '../components/ItemCard';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      welcomeMsg: 'Welcome',
      styles: {
        mainFeaturedPost: {
          backgroundColor: 'grey',
          height: 500,
          marginBottom: 10,
          backgroundImage: 'url(https://images.unsplash.com/photo-1464986411762-a4275fbaf3f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          borderRadius: 0,
        },
      },
      productList: [
        {
          _id: 1,
          name: 'AC1 Phone1',
          type: 'phone',
          price: 200.05,
          rating: 3.8,
          warranty_years: 1,
          available: true,
        },
        {
          _id: 2,
          name: 'AC2 Phone2',
          type: 'phone',
          price: 147.21,
          rating: 1,
          warranty_years: 3,
          available: false,
        },
        {
          _id: 3,
          name: 'AC3 Phone3',
          type: 'phone',
          price: 150,
          rating: 2,
          warranty_years: 1,
          available: true,
        },
        {
          _id: 4,
          name: 'AC4 Phone4',
          type: 'phone',
          price: 50.2,
          rating: 3,
          warranty_years: 2,
          available: true,
        },
      ],
      randomtext:
        'The euro (sign: €; code: EUR) is the official currency of 19 of the 28 member states of the European Union',
    };
  }

  render() {
    const { productList, styles } = this.state;

    return (
      <React.Fragment>
        <Paper style={styles.mainFeaturedPost}></Paper>

        <Container maxWidth="lg">
          <div>
            <Typography
              style={{ paddingTop: 30, paddingBottom: 30 }}
              variant="h3"
              align="center"
              gutterBottom
            >
              Meilleures ventes de la semaine
            </Typography>

            <div style={{ flexGrow: 1 }}>
              <Grid container spacing={5}>
                {productList.map(product => (
                  <Grid item xs={6}>
                    <ItemCard
                      title={product.name}
                      price={product.price}
                      rating={product.rating}
                    ></ItemCard>
                  </Grid>
                ))}
              </Grid>
            </div>
          </div>

          <div>
            <Typography
              style={{ paddingTop: 40, paddingBottom: 30 }}
              variant="h3"
              align="center"
              gutterBottom
            >
              Nos Produits
            </Typography>

            <div style={{ flexGrow: 1 }}>
              <Grid container spacing={5}>
                {productList.map(product => (
                  <Grid item xs={4}>
                    <ItemCard
                      title={product.name}
                      price={product.price}
                      rating={product.rating}
                    ></ItemCard>
                  </Grid>
                ))}
              </Grid>
            </div>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

export default Home;
