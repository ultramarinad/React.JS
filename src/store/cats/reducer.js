import { GET_FACTS_CATS, SET_LOADING_CATS, SET_ERROR } from "./action";

const initialState = {
  catsFactsList: {},
  isLoading: false,
  error: null,
};

export const catsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FACTS_CATS: {
      return {
        ...state,
        catsFactsList: action.payload,
        error: null,
      };
    }
    case SET_LOADING_CATS: {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    case SET_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }

    default:
      return state;
  }
};
