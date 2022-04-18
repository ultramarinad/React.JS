import { ADD_CHAT, REMOVE_CHAT } from "./action";

const initialState = {
  chatList: [
    { id: 1, name: "первый" },
    { id: 2, name: "второй" },
    { id: 3, name: "третий" },
  ],
};

export const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHAT: {
      const { name } = action.payload;
      return {
        ...state,
        chatList: [
          ...state.chatList,
          {
            id: Date.now(),
            name: name,
          },
        ],
      };
    }

    case REMOVE_CHAT: {
      const { chatId } = action.payload;
      return {
        ...state,
        chatList: state.chatList.filter(({ id }) => id !== chatId),
      };
    }

    default:
      return state;
  }
};
