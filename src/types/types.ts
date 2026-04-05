export type TAddress = {
  address: string;
  city: string;
  state: string;
  stateCode: string;
  postalCode: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  country: string;
};

export type TBank = {
  cardExpire: string;
  cardNumber: string;
  cardType: string;
  currency: string;
  iban: string;
};

export type TCompany = {
  department: string;
  name: string;
  title: string;
  address: TAddress;
};

export type TRole = "admin" | "moderator" | "user";

export type TUser = {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: "female" | "male" | "other";
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  bloodGroup: string;
  image: string;
  address: TAddress;
  university: string;
  bank: TBank;
  company: TCompany;
  role: TRole;
};

export type TTask = {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
};

export type TUserResponse = {
  users: TUser[];
  total: number;
  skip: number;
  limit: number;
};
