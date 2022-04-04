import { useCallback, useState, useRef, useEffect } from "react";
import {
  Container,
  Paper,
  TextField,
  Button,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
} from "@mui/material";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [messageList, setMessageList] = useState([]);

  const chatsList = [
    { id: 1, name: "первый" },
    { id: 2, name: "второй" },
    { id: 3, name: "третий" },
  ];

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

  const handleSubmit = (event) => {
    event.preventDefault();
    addNewMassage("user", inputValue);
    resetInputValue();
  };

  const onChangeInput = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Paper
        elevation={18}
        sx={{
          height: "80vh",
          overflow: "auto",
          marginRight: "20px",
          width: "35%",
        }}
      >
        <List>
          {chatsList.map(({ id, name }) => (
            <ListItem key={id} disablePadding>
              <ListItemButton
                sx={{
                  width: "100%",
                }}
              >
                {name}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Paper>
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
    </Container>
  );
}

export default App;
