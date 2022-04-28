import {
  Button,
  Box,
  List,
  ListItemText,
  CircularProgress,
} from "@mui/material";
import { Link } from "react-router-dom";
import { getHomeLink } from "../../navigation";

export const CatsPre = ({ catsFacts, isLoading, error, requestCatFacts }) => {
  return (
    <Box>
      {isLoading && <CircularProgress />}
      {error && (
        <div>
          {JSON.stringify(error)}
          <Button onClick={requestCatFacts} variant="contained">
            Again
          </Button>
        </div>
      )}
      <List>
        <ListItemText>{catsFacts.text}</ListItemText>
      </List>
      <Link to={getHomeLink()}>Home</Link>
    </Box>
  );
};
