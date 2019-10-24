import React from 'react';
import PropTypes from 'prop-types';
import socketIOClient from 'socket.io-client';

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

// REDUX Import
import { connect } from 'react-redux';
import { requestProducts } from '../redux/actions/actions';
import { productSelector } from '../redux/selectors';

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
      types: [{ label: 'phone', _id: 1 }, { label: 'PC', _id: 2 }],
    };
  }

  componentDidMount() {
    // LOAD DATA IN REDUX
    const { requestProducts } = this.props;

    this.fetchProducts();
    this.refreshProducts();
    requestProducts();
  }

  render() {
    const {
      styles,
      modal,
      currentProduct,
      isEdit,
      productList,
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
                <h2 id="modal-title">
                  {isEdit ? 'Modifier ce produit' : 'Ajouter un produit'}
                </h2>
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
                      helperText="Choissisez le type de produit dans cette liste"
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
                {isEdit ? (
                  <>
                    <RectangularButton
                      color="red"
                      label="Supprimer"
                      btnAction={() => this.deleteProduct}
                    />
                    <RectangularButton
                      label="Mettre à jour"
                      btnAction={() => this.updateProduct}
                      disabled={this.checkForm()}
                    />
                  </>
                ) : (
                  <RectangularButton
                    label="Sauvegarder"
                    btnAction={() => this.createProduct}
                    disabled={this.checkForm()}
                  />
                )}
              </Box>
            </Paper>
          </Fade>
        </Modal>
      </>
    );
  }

  checkForm = () => {
    const { currentProduct } = this.state;
    let bool = false;

    Object.keys(currentProduct).map(key => {
      if (currentProduct[key] === '') {
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
      currentProduct: { ...state.currentProduct, [name]: value },
    }));
  };

  /** MODAL FUNCTIONS */
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
    this.setState(state => ({ ...state, currentProduct, modal: false }));
  };

  addProduct = () => () => {
    this.setState(state => ({ ...state, modal: true, isEdit: false }));
  };

  editProduct = currentProduct => () => {
    this.setState(state => ({
      ...state,
      modal: true,
      isEdit: true,
      currentProduct,
    }));
  };

  /** API CRUD FUNCTIONS */

  fetchProducts = () => {
    this.setState(state => ({
      ...state,
      isLoading: true,
    }));
    request({ url: '/products', method: 'GET' })
      .then(res => {
        if (res.status === 200) {
          this.setState(state => ({
            ...state,
            productList: res.data.data,
            isLoading: false,
          }));
        }
      })
      .catch(error => console.log('Error::Products::fetchProducts', error))
      .finally(() => this.setState(state => ({ ...state, isLoading: false })));
  };

  createProduct = () => {
    const { currentProduct } = this.state;
    request({
      url: '/products',
      method: 'POST',
      data: currentProduct,
    })
      .then(res => {
        if (res.status === 200) {
          this.closeModal();
          this.fetchProducts();
        }
      })
      .catch(err => console.log('Error::Products:createProduct', err));
  };

  updateProduct = () => {
    const { currentProduct } = this.state;
    request({
      url: `/products/${currentProduct._id}`,
      method: 'PATCH',
      data: currentProduct,
    })
      .then(res => {
        if (res.status === 200) {
          this.closeModal();
          this.fetchProducts();
        }
      })
      .catch(err => console.log('Error::Products:updateProducts', err));
  };

  deleteProduct = () => {
    const { currentProduct } = this.state;
    request({
      url: `/products/${currentProduct._id}`,
      method: 'DELETE',
    })
      .then(res => {
        if (res.status === 200) {
          this.closeModal();
          this.fetchProducts();
        }
      })
      .catch(err => console.log('Error::Products:updateProducts', err));
  };

  /** Socket IO */

  refreshProducts = () => {
    const socket = socketIOClient.connect('http://localhost/');
    socket.on('refreshProducts', data => {
      this.setState({ productList: data });
    });
  };
}

const mapStateToProps = state => {
  return {
    productList: productSelector(state),
  };
};

export default connect(
  mapStateToProps,
  { requestProducts }
)(Products);

Products.propTypes = {
  requestProducts: PropTypes.func.isRequired,
};
