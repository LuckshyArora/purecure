import axios from 'axios';

export const login = (credentials) => {
  return (dispatch) => {
    axios.post('/api/login', credentials)
      .then((response) => {
        dispatch({ type: 'LOGIN', payload: response.data });
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch({ type: 'LOGOUT' });
  };
};