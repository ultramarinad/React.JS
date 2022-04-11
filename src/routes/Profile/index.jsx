import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { getHomeLink } from "../../navigation";
import { useDispatch, useSelector } from "react-redux";
import { CHANGE_PROFILE_STATUS } from "../../store/Profile/action";

export const Profile = () => {
  const dispatch = useDispatch();
  const profileStatus = useSelector((state) => state.profile);

  const changeStatus = () => {
    dispatch({
      type: CHANGE_PROFILE_STATUS,
      payload: {
        status: !profileStatus,
      },
    });
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
