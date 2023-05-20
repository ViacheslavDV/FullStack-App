import { musicActions } from "./music/music.slice";
import { checkAuth, login, logout, register } from "./user/user.actions";

export const rootActions = {
  checkAuth,
  login,
  logout,
  register,
  ...musicActions,
};
