export const CHANGE_PROFILE_STATUS = "CHANGE_PROFILE_STATUS";

export const changeProfileStatus = (status) => ({
    type: CHANGE_PROFILE_STATUS,
    payload: { status },
});