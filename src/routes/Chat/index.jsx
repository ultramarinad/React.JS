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
import { chatList } from "../Chats";
import { getChatsLink } from "../../navigation";

export const Chat = () => {
  const { chatId } = useParams();
  const [inputValue, setInputValue] = useState("");
  const [messageList, setMessageList] = useState([]);

  const resetInputValue = useCallback(() => {
    setInputValue("");
  }, []);

  const addNewMassage = useCallback((author, text) => {
    const massage = {
      date: Date.now(),
      author: author,
      text: text,
    };
    setMessageList((prevState) => {
      return [...prevState, massage];
    });
  }, []);

  useEffect(() => {
    if (messageList.length > 0) {
      if (messageList[messageList.length - 1].author === "user") {
        const timerId = setTimeout(() => {
          addNewMassage("bot", "Hello");
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
    addNewMassage("user", inputValue);
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
          {messageList.map(({ author, text, date }) => (
            <ListItem key={date}>
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
