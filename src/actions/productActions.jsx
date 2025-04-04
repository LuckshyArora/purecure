import axios from 'axios';

export const getProducts = () => {
  return (dispatch) => {
    axios.get('/api/products')
      .then((response) => {
        dispatch({ type: 'GET_PRODUCTS', payload: response.data });
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const addProduct = (product) => {
  return (dispatch) => {
    axios.post('/api/products', product)
      .then((response) => {
        dispatch({ type: 'ADD_PRODUCT', payload: response.data });
      })
      .catch((error) => {
        console.error(error);
      });
  };
};