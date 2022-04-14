import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { getHomeLink } from "../../navigation";
import { useDispatch, useSelector } from "react-redux";
import { changeProfileStatus } from "../../store/Profile/action";
import { getProfileStatus } from "../../store/Profile/selectors";

export const Profile = () => {
  const dispatch = useDispatch();
  const profileStatus = useSelector(getProfileStatus);

  const changeStatus = () => {
    dispatch(changeProfileStatus(!profileStatus));
  };

  return (
    <Box>
      <h1>Profile</h1>
      <div>
        <label>
          Status:
          <input
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
