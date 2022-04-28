import { useCallback, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addMessageThunk,
  addMessageOffTracker,
  addMessageTracker,
} from "../../store/messages/action";
import { getMessageListByChatId } from "../../store/messages/selectors";
import { ChatPre } from "./chatPre";

export const Chat = () => {
  const { chatId } = useParams();
  const [inputValue, setInputValue] = useState("");
  const messageList = useSelector(getMessageListByChatId(chatId));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addMessageTracker(chatId));
    return () => {
      dispatch(addMessageOffTracker(chatId));
    };
  }, [chatId]);

  const resetInputValue = useCallback(() => {
    setInputValue("");
  }, []);

  const addNewMessage = (author, text) => {
    dispatch(
      addMessageThunk(chatId, {
        author: author,
        text: text,
      })
    );
  };

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
