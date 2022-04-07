import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { getHomeLink } from "../../navigation";

export const Profile = () => {
  return (
    <Box>
      <h1>Profile</h1>
      <Link to={getHomeLink()}>Home</Link>
    </Box>
  );
};
