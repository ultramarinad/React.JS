import { messageRef } from "../../firebase";

export const ADD_MESSAGE = "ADD_MESSAGE";

export const RESET_MESSAGE_LIST = "RESET_MESSAGE_LIST";

export const addMessage = (chatId, message) => ({
  type: ADD_MESSAGE,
  payload: { chatId, message },
});

export const resetMessageById = (chatId) => ({
  type: RESET_MESSAGE_LIST,
  payload: chatId,
});

export const addMessageThunk = (chatId, message) => (dispatch) => {
  dispatch(addMessageToFirebase(chatId, message));

  setTimeout(() => {
    let botMessage = {
      author: "bot",
      text: "Hello",
    };
    dispatch(addMessageToFirebase(chatId, botMessage));
  }, 2000);
};

export const addMessageToFirebase = (chatId, message) => () => {
  messageRef.child(chatId).push(message, (error) => {
    if (error) {
      console.log(error);
    }
  });
};

export const addMessageTracker = (chatId) => (dispatch) => {
  messageRef.child(chatId).on("child_added", (snapshot) => {
    dispatch(
      addMessage(chatId, {
        ...snapshot.val(),
        id: snapshot.key,
      })
    );
  });
};

export const addMessageOffTracker = (chatId) => (dispatch) => {
  dispatch(resetMessageById(chatId));
  messageRef.child(chatId).off("child_added");
};
