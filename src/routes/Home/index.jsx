import * as React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import {
  getChatsLink,
  getProfileLink,
  getCatsLink,
  getSingupLink,
  getLoginLink,
} from "../../navigation";

export const Home = () => {
  return (
    <Box>
      <h1>Home</h1>
      <div>
        <Link to={getChatsLink()}>Chats</Link>
      </div>
      <div>
        <Link to={getProfileLink()}>Profile</Link>
      </div>
      <div>
        <Link to={getCatsLink()}>Fact of cats</Link>
      </div>
      <div>
        <Link to={getSingupLink()}>Sing up</Link>
      </div>
      <div>
        <Link to={getLoginLink()}>Login</Link>
      </div>
    </Box>
  );
};
