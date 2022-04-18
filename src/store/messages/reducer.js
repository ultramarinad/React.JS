import { ADD_MESSAGE } from "./action";

const initialState = {
  messageList: {},
};

export const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      const { chatId, message } = action.payload;
      return {
        ...state,
        messageList: {
          ...state.messageList,
          [chatId]: [...(state.messageList[chatId] || []), message],
        },
      };
    }
    default:
      return state;
  }
};
