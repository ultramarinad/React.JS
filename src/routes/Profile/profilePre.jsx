import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { getHomeLink } from "../../navigation";

export const ProfilePre = ({ changeStatus, profileStatus }) => {
  return (
    <Box>
      <h1>Profile</h1>
      <div>
        <label>
          Status:
          <input
            data-testid="inputTextId"
            onChange={changeStatus}
            checked={profileStatus}
            type="checkbox"
          />
        </label>
      </div>
      <Link to={getHomeLink()}>Home</Link>
    </Box>
  );
};
