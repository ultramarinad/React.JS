import { auth } from "../../firebase";

export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";

export const loginUser = (user) => ({
  type: LOGIN_USER,
  payload: user,
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
});

export const initAuthUser = (dispatch) => {
  auth.onAuthStateChanged((user) => {
    if (user) {
      dispatch(loginUser(user));
    } else {
      dispatch(logoutUser());
    }
  });
};
