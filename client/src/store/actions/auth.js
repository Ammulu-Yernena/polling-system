import { addError, removeError } from './error';
import { SET_CURRENT_USER } from '../actionTypes';
import { setToken, call}  from '../../services/api';

export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  user
});

// export const setToken = token => {
//   setToken(token);
// };

export const logout = () => {
  return dispatch => {
    localStorage.clear();
    setToken(null);
    dispatch(setCurrentUser({}));
    dispatch(removeError());
  };
};

export const authUser = (path, data) => {
  return async dispatch => {
    try {
      console.log(`Authenticating user with path: ${path} and data:`, data);
      const { token, ...user } = await call('post', `auth/${path}`, data);
      localStorage.setItem('jwtToken', token);
      setToken(token);
      dispatch(setCurrentUser(user));
      dispatch(removeError());
    } catch (err) {
      const error = err.response?.data;
      const errorMessage = error?.err || 'An unknown error occurred';
      dispatch(addError(errorMessage));
    }
  };
};