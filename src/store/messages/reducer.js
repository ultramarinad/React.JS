import { ADD_MESSAGE, RESET_MESSAGE_LIST } from "./action";

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
    case RESET_MESSAGE_LIST: {
      const copyMessageList = { ...state.messageList };
      delete copyMessageList[action.payload];

      return {
        ...state,
        messageList: copyMessageList,
      };
    }
    default:
      return state;
  }
};
