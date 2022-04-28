import {
  Paper,
  TextField,
  Button,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

export const ChatPre = ({
  messageList,
  handleSubmit,
  inputValue,
  onChangeInput,
}) => {
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
