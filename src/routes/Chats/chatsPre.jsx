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

export const ChatsPre = ({
  children,
  chatList,
  inputValue,
  open,
  handleClickOpen,
  handleClose,
  handleSubmit,
  onChangeInput,
  handleRemoveChat,
}) => {
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
      {children}
    </Box>
  );
};
