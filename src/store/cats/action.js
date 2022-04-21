import { catsApi } from "../../api/endpoint/catsApi";

export const GET_FACTS_CATS = "GET_FACTS_CATS";

export const SET_LOADING_CATS = "SET_LOADING_CATS";

export const SET_ERROR = "SET_ERROR";

export const getFactsCats = (cat) => ({
  type: GET_FACTS_CATS,
  payload: cat,
});

export const setLoadingCats = (isLoading) => ({
  type: SET_LOADING_CATS,
  payload: isLoading,
});

export const setError = (error) => ({
  type: SET_ERROR,
  payload: error,
});

export const getCatsThunk = async (dispatch) => {
  dispatch(setLoadingCats(true));
  try {
    const data = await catsApi.get();
    dispatch(getFactsCats(data));
  } catch (error) {
    dispatch(setError(error.message));
  }

  dispatch(setLoadingCats(false));
};
