import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { Box, Paper, Button } from "@mui/material";
import { getChatsLinkId } from "../../navigation";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { addChat, removeChat } from "../../store/chats/action";
import { getChatsList } from "../../store/chats/selectors";

export const Chats = (props) => {
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
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Paper
        elevation={18}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "80vh",
          overflow: "auto",
          mr: "20px",
        }}
      >
        <Box
          sx={{
            mb: 2,
          }}
        >
          <Button variant="outlined" onClick={handleClickOpen}>
            Add +
          </Button>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Add chat</DialogTitle>
            <DialogContent>
              <DialogContentText>Введите имя чата</DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                value={inputValue}
                onChange={onChangeInput}
                id="name"
                label="Name"
                type="Name"
                fullWidth
                variant="standard"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleSubmit}>Add</Button>
            </DialogActions>
          </Dialog>
        </Box>
        {chatList.map((item) => {
          return (
            <Box
              key={item.id}
              sx={{
                display: "flex",
              }}
            >
              <Button
                id="basic-button"
                component={Link}
                to={getChatsLinkId(item.id)}
              >
                {item.name}
              </Button>
              <IconButton
                onClick={() => handleRemoveChat(item.id)}
                aria-label="delete"
                size="small"
              >
                <DeleteIcon fontSize="inherit" />
              </IconButton>
            </Box>
          );
        })}
      </Paper>
      {props.children}
    </Box>
  );
};
