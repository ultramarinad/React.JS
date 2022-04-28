import { ADD_CHAT, REMOVE_CHAT, RESET_CHAT } from "./action";

export const initialState = {
  chatList: [],
};

export const chatsReducer = (state = initialState, action) => {
  switch (action?.type) {
    case ADD_CHAT: {
      return {
        ...state,
        chatList: [...state.chatList, action.payload],
      };
    }

    case REMOVE_CHAT: {
      const { chatId } = action.payload;
      return {
        ...state,
        chatList: state.chatList.filter(({ id }) => id !== chatId),
      };
    }
    case RESET_CHAT: {
      return initialState;
    }

    default:
      return state;
  }
};
