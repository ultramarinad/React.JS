import { CHANGE_PROFILE_STATUS } from "./action";

const initialState = {
  profile: false,
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PROFILE_STATUS: {
      const { status } = action.payload;
      return {
        ...state,
        profile: status,
      };
    }
    default:
      return state;
  }
};
