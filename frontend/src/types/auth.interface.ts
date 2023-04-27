export interface IUser {
  user: {
    _id: string;
    email: string;
    isAdmin: boolean;
  };
  refreshToken: string;
  accessToken: string;
}
