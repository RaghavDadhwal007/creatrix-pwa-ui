const getUserAccessToken = (state) => state?.userState?.accessToken;
const getUser = (state) => state?.userState?.user;
const UserSelector = {
    getUserAccessToken,
    getUser,

};

export default UserSelector;
