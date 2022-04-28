import { chatsRef } from "../../firebase";

export const ADD_CHAT = "ADD_CHAT";

export const REMOVE_CHAT = "REMOVE_CHAT";

export const RESET_CHAT = "RESET_CHAT";

export const addChat = (chat) => ({
  type: ADD_CHAT,
  payload: chat,
});

export const removeChat = (chatId) => ({
  type: REMOVE_CHAT,
  payload: { chatId },
});

export const resetChat = () => ({
  type: RESET_CHAT,
});

export const addChatToFirebase = (name) => () => {
  chatsRef.push({ name }, (error) => {
    if (error) {
      console.log(error);
    }
  });
};
export const addChatsTracker = (dispatch) => {
  chatsRef.on("child_added", (snapshot) => {
    dispatch(
      addChat({
        ...snapshot.val(),
        id: snapshot.key,
      })
    );
  });
};
export const removeChatToFirebase = (chatId) => () => {
  chatsRef.child(chatId).remove((error) => {
    if (error) {
      console.log(error);
    }
  });
};
export const addChatsOffTracker = (dispatch) => {
  dispatch(resetChat());
  chatsRef.off("child_added");
};

export const removeChatTracker = (dispatch) => {
  chatsRef.on("child_removed", (snapshot) => {
    dispatch(removeChat(snapshot.key));
  });
};

export const removeChatsOffTracker = () => {
  chatsRef.off("child_removed");
};
