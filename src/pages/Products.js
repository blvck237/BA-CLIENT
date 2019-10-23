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

//API Import
import { request } from '../api';

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
      isLoading: true,
      productList: [],
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

  componentDidMount() {
    this.fetchProducts();
  }

  render() {
    const {
      productList,
      styles,
      modal,
      currentProduct,
      isEdit,
      isLoading,
      types,
    } = this.state;

    return (
      <>
        <CssBaseline />
        <Container maxWidth="lg">
          <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography style={styles.title} component="h1">
              Gestion du stock
            </Typography>
            <RectangularButton
              label="Ajouter un Produit"
              btnAction={this.addProduct}
            />
          </Box>
          <DataTable
            isLoading={isLoading}
            data={productList}
            clickAction={this.editProduct}
          />
        </Container>

        <Modal
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
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
                <h2 id="modal-title">{isEdit ? 'Modifier ce produit' : 'Ajouter un produit'}</h2>
                <p id="modal-description">Veuillez remplir tous les champs</p>
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
                        <MenuItem key={option._id} value={option.label}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                </Grid>
              </form>
              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  marginTop: 25,
                }}
              >
                {isEdit && (
                  <RectangularButton
                    icon="delete"
                    color="red"
                    label="Supprimer"
                    btnAction={this.addProduct}
                  />
                )}
                <RectangularButton
                  icon="save"
                  label="Sauvegarder"
                  btnAction={() => this.createProduct}
                />
              </Box>
            </Paper>
          </Fade>
        </Modal>
      </>
    );
  }

  fetchProducts = () => {
    request({ url: '/products', method: 'GET' })
      .then(res => {
        if (res.status === 200) {
          {
            this.setState(state => ({
              ...state,
              productList: res.data.data,
              isLoading: false,
            }));
            console.log('Log: Products -> fetchProducts -> res', res);
          }
        }
      })
      .catch(error => console.log('Error::Products::fetchProdicts', error))
      .finally(() => this.setState(state => ({ ...state, isLoading: false })));
  };

  onChange = name => event => {
    console.log('Log: Products -> event', event);

    const { value } = event.target;
    this.setState(state => ({
      ...state,
      currentProduct: { ...state.currentProduct, [name]: value },
    }));
  };

  createProduct = () => {
    const { currentProduct } = this.state;
    request({
      url: '/products',
      method: 'POST',
      data: currentProduct,
    }).then(res => {
    console.log("Log: Products -> createProduct -> res", res)
      if (res.status === 200) this.fetchProducts();
    });
  };

  addProduct = () => () => {
    this.setState(state => ({ ...state, modal: true, isEdit: false }));
  };

  editProduct = currentProduct => () => {
    this.setState(state => ({ ...state, modal: true, isEdit: true, currentProduct }));
  };

  deleteProduct = () => {};

  openModal = () => {
    this.setState(state => ({ ...state, modal: true }));
  };

  closeModal = () => {
    const currentProduct = {
      _id: null,
      name: '',
      type: '',
      price: 0,
      rating: 0,
      warranty_years: 0,
      available: true,
    };
    this.setState(state => ({ ...state, modal: false, currentProduct }));
  };
}
export default Products;
