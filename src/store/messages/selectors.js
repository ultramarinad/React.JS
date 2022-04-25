export const getMessageState = (state) => state.messages;

export const getMessageList = (state) => getMessageState(state).messageList;

export const getMessageListByChatId = (chatId) => (state) =>
  getMessageList(state)[chatId];
