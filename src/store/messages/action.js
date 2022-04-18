export const ADD_MESSAGE = "ADD_MESSAGE";

export const addMessage = (chatId, message) => ({
    type: ADD_MESSAGE,
    payload: { chatId, message },
});

export const addMessageThunk = (chatId, message) => (dispatch) => {

    dispatch(addMessage(chatId, message));

    setTimeout(() => {
        let botMessage = {
            id: Date.now(),
            author: 'bot',
            text: 'Hello',
        }
        dispatch(addMessage(chatId, botMessage));
    }, 2000);
}