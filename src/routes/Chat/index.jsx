import { useCallback, useState, useEffect } from "react";
import {
  Paper,
  TextField,
  Button,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Redirect, useParams } from "react-router-dom";
import { getChatsLink } from "../../navigation";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../store/messages/action";
import { getMessageListByChatId } from "../../store/messages/selectors";

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
      addMessage(chatId, {
        id: Date.now(),
        author: author,
        text: text,
      })
    );
  };

  useEffect(() => {
    if (messageList !== undefined) {
      if (messageList[messageList.length - 1].author === "user") {
        const timerId = setTimeout(() => {
          addNewMessage("bot", "Hello");
        }, 1500);
        return () => {
          clearTimeout(timerId);
        };
      }
    }
  }, [messageList]);

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
    <Box
      maxWidth="sm"
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={24}
        sx={{
          padding: 2,
          height: "80vh",
          width: "100%",
          overflow: "auto",
        }}
      >
        <Box component={"form"} onSubmit={handleSubmit}>
          <TextField
            inputRef={(input) => input && input.focus()}
            label="Text"
            variant="outlined"
            value={inputValue}
            onChange={onChangeInput}
            size="small"
          />
          <Button type="submit" variant="contained">
            submit
          </Button>
        </Box>
        <List>
          {messageList?.map(({ author, text, id }) => (
            <ListItem key={id}>
              <ListItemText>
                {author}: {text}
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
};
