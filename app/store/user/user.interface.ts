import { IUser } from "@/app/types/user.interface";

export interface IUserState {
  email: string;
  name: string;
  isAdmin: boolean;
  avatarPath?: string;
}

export interface ITokens {
  accessToken: string;
  refreshToken: string;
}

export interface IInitialState {
  user: IUserState | null;
  isLoading: boolean;
}

export interface IUserInitialState {
  user: IUserState | null;
  isLoading: boolean;
}

export interface IEmailPassword {
  email: string;
  password: string;
}

export interface IAuthUserData extends IEmailPassword {
  name: string;
  avatarPath?: string;
}

export interface IAuthResponse extends ITokens {
  user: IUser;
}
