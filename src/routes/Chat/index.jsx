import { useCallback, useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import { getChatsLink } from "../../navigation";
import { useDispatch, useSelector } from "react-redux";
import { addMessageThunk } from "../../store/messages/action";
import { getMessageListByChatId } from "../../store/messages/selectors";
import { ChatPre } from "./chatPre";

export const Chat = () => {
  const { chatId } = useParams();
  const [inputValue, setInputValue] = useState("");
  const messageList = useSelector(getMessageListByChatId(chatId));
  const chatList = useSelector((state) => state.chats.chatList);
  const dispatch = useDispatch();

  const resetInputValue = useCallback(() => {
    setInputValue("");
  }, []);

  const addNewMessage = (author, text) => {
    dispatch(
      addMessageThunk(chatId, {
        id: Date.now(),
        author: author,
        text: text,
      })
    );
  };

  if (!chatList.find((item) => item.id === parseInt(chatId))) {
    return <Redirect to={getChatsLink()} />;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    addNewMessage("user", inputValue);
    resetInputValue();
  };

  const onChangeInput = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <ChatPre
      messageList={messageList}
      handleSubmit={handleSubmit}
      inputValue={inputValue}
      onChangeInput={onChangeInput}
    ></ChatPre>
  );
};
