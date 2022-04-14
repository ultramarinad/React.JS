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
import { Provider } from "react-redux";
import { store } from "./store";

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
      <Provider store={store}>
        <Switch>
          <Route path={getChatsLink()}>
            <Chats>
              <Route path={getChatsLinkId()} component={Chat} />
            </Chats>
          </Route>
          <Route path={getProfileLink()} component={Profile} />
          <Route exact path={getHomeLink()} component={Home} />
        </Switch>
      </Provider>
    </Container>
  );
}

export default App;
