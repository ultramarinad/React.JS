import { CHANGE_PROFILE_STATUS } from "./action";

const initialState = {
  status: false,
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PROFILE_STATUS: {
      const { status } = action.payload;

      return {
        ...state,
        status: status,
      };
    }
    default:
      return state;
  }
};
