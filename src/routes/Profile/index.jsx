import { useDispatch, useSelector } from "react-redux";
import { changeProfileStatus } from "../../store/Profile/action";
import { getProfileStatus } from "../../store/Profile/selectors";
import { ProfilePre } from "./profilePre";

export const Profile = () => {
  const dispatch = useDispatch();
  const profileStatus = useSelector(getProfileStatus);

  const changeStatus = () => {
    dispatch(changeProfileStatus(!profileStatus));
  };

  return (
    <ProfilePre
      changeStatus={changeStatus}
      profileStatus={profileStatus}
    ></ProfilePre>
  );
};
