import { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addChat, removeChat } from "../../store/chats/action";
import { getChatsList } from "../../store/chats/selectors";
import { ChatsPre } from "./chatsPre";

export const Chats = ({ children }) => {
  const chatList = useSelector(getChatsList);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  const addNewChat = useCallback((text) => {
    dispatch(addChat(text));
  });

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const resetInputValue = useCallback(() => {
    setInputValue("");
  }, []);

  const handleSubmit = () => {
    addNewChat(inputValue);
    resetInputValue();
    handleClose();
  };

  const onChangeInput = (event) => {
    setInputValue(event.target.value);
  };

  const handleRemoveChat = (id) => {
    dispatch(removeChat(id));
  };

  return (
    <ChatsPre
      chatList={chatList}
      inputValue={inputValue}
      open={open}
      handleClickOpen={handleClickOpen}
      handleClose={handleClose}
      handleSubmit={handleSubmit}
      onChangeInput={onChangeInput}
      handleRemoveChat={handleRemoveChat}
    >
      {children}
    </ChatsPre>
  );
};
