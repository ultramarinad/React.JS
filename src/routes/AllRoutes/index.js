import { Switch } from "react-router-dom";
import {
  getHomeLink,
  getProfileLink,
  getChatsLink,
  getChatsLinkId,
  getCatsLink,
  getSingupLink,
  getLoginLink,
} from "../../navigation";
import { Home } from "../Home";
import { Profile } from "../Profile";
import { Chats } from "../Chats";
import { Chat } from "../Chat";
import { Signup } from "../Signup";
import { Login } from "../Login";
import { Cats } from "../Cats";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getIsAuth } from "../../store/user/selectors";
import { useEffect } from "react";
import { initAuthUser } from "../../store/user/action";
import { PrivateRoute } from "../../hocs/PrivateRoute";
import { PublicRoute } from "../../hocs/PublicRoute";

export const AllRoutes = () => {
  const isAuth = useSelector(getIsAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initAuthUser);
  }, []);

  return (
    <Box>
      <Switch>
        <PrivateRoute authenticated={isAuth} path={getChatsLink()}>
          <Chats>
            <PrivateRoute
              authenticated={isAuth}
              path={getChatsLinkId()}
              component={Chat}
            />
          </Chats>
        </PrivateRoute>
        <PublicRoute
          authenticated={isAuth}
          path={getCatsLink()}
          component={Cats}
        />
        <PublicRoute
          authenticated={isAuth}
          path={getSingupLink()}
          component={Signup}
        />
        <PublicRoute
          authenticated={isAuth}
          path={getLoginLink()}
          component={Login}
        />
        <PrivateRoute
          authenticated={isAuth}
          path={getProfileLink()}
          component={Profile}
        />
        <PublicRoute
          authenticated={isAuth}
          exact
          path={getHomeLink()}
          component={Home}
        />
      </Switch>
    </Box>
  );
};
