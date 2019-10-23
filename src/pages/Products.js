import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import Backdrop from '@material-ui/core/Backdrop';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';

import DataTable from '../components/DataTable';
import RectangularButton from '../components/Buttons/RectangularButton';

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      currentProduct: {
        _id: null,
        name: '',
        type: '',
        price: 0,
        rating: 0,
        warranty_years: 0,
        available: true,
      },
      isEdit: false,
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
      styles: {
        title: {
          fontSize: '3em',
          fontWeight: '600',
        },
        modal: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        modalContent: {
          padding: '2em 4em 3em',
          border: 'none',
          backgroundColor: 'white',
        },
      },
      types: [{ label: 'Phone', _id: 1 }, { label: 'PC', _id: 2 }],
    };
  }

  render() {
    const { productList, styles, modal } = this.state;

    return (
      <>
        <CssBaseline />
        <Container maxWidth="lg">
          <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography style={styles.title} component="h1">
              Gestion du stock
            </Typography>

            <RectangularButton label="Ajouter un Produit" btnAction={() => this.addProduct} />
          </Box>
          <DataTable data={productList} clickAction={this.openModal} />
        </Container>

        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={modal}
          onClose={this.closeModal}
          style={styles.modal}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={modal}>
            <Paper style={styles.modalContent}>
              <div>
                <h2 id="transition-modal-title">Transition modal</h2>
                <p id="transition-modal-description">react-transition-group animates me.</p>
              </div>
              <form noValidate autoComplete="off">
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      style={{ width: '100%' }}
                      id="name"
                      label="Nom"
                      value={currentProduct.name}
                      margin="normal"
                      onChange={this.onChange('name')}
                      required
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      style={{ width: '100%' }}
                      id="price"
                      label="Prix"
                      value={currentProduct.price}
                      margin="normal"
                      onChange={this.onChange('price')}
                      type="number"
                      required
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      style={{ width: '100%' }}
                      id="warranty_years"
                      label="Garantie"
                      value={currentProduct.warranty_years}
                      margin="normal"
                      onChange={this.onChange('warranty_years')}
                      type="number"
                      required
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      style={{ width: '100%' }}
                      id="type"
                      label="Type"
                      value={currentProduct.type}
                      helperText="Please select your currency"
                      margin="normal"
                      onChange={this.onChange('type')}
                      select
                      required
                    >
                      {types.map(option => (
                        <MenuItem key={option._id} value={option._id}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Fade>
        </Modal>
      </>
    );
  }

  onChange = name => event => {
    console.log('Log: Products -> event', event);

    const { value } = event.target;
    this.setState(state => ({
      ...state,
      currentProduct: { ...state.currentProduct, [name]: value },
    }));
  };
  };

  openModal = currentProduct => () => {
    console.log('Log: Products -> openModal -> currentProduct', currentProduct);
    this.setState(state => ({ ...state, modal: true, currentProduct }));
  };

  closeModal = () => {
    this.setState(state => ({ ...state, modal: false, currentProduct: {} }));
  };
}
export default Products;
