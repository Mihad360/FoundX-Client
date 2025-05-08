export type TRegister = {
  name: string;
  email: string;
  password: string;
  mobileNumber: string | number;
  profilePhoto: string;
};

export type TLogin = {
  email: string;
  password: string;
};

export type TUser = {
  _id: string;
  name: string;
  email: string;
  mobileNumber: string;
  role: string;
  status: string;
  iat: number;
  exp: number;
  profilePhoto?: string;
};
