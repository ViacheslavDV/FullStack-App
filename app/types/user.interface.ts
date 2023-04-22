import { Role } from "./role.enum";

export interface IUser {
  id: number;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  email: string;
  name: string;
  hashedPassword?: string;
  hashedRefreshToken?: string;
  avatarPath?: string;
  role: Role;
}
