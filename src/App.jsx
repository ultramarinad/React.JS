import { Switch, Route } from "react-router-dom";
import { Container } from "@mui/material";
import { Home } from "./routes/Home";
import {
  getHomeLink,
  getProfileLink,
  getChatsLink,
  getChatsLinkId,
} from "./navigation";
import { Profile } from "./routes/Profile";
import { Chats } from "./routes/Chats";
import { Chat } from "./routes/Chat";

function App() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Switch>
        <Route path={getChatsLink()}>
          <Chats>
            <Route path={getChatsLinkId()} component={Chat} />
          </Chats>
        </Route>
        <Route path={getProfileLink()} component={Profile} />
        <Route exact path={getHomeLink()} component={Home} />
      </Switch>
    </Container>
  );
}

export default App;
