import { Model } from "mongoose";

export type TUserName = {
  firstName: string;
  lastName: string;
};
export type TOrders = {
  productName: {
    type: string;
    required: true;
  };
  price: {
    type: number;
    required: true;
  };
  quantity: {
    type: number;
    required: true;
  };
};
export type TUser = {
  userId: string;
  username: string;
  password: string;
  name: TUserName;
  age: number;
  email: string;
  isActive: boolean;
  hobbies: ["string", "string"];
  address: {
    street: "string";
    city: "string";
    country: "string";
  };
  orders: TOrders;
};

export interface UserModel extends Model<TUser> {
  isUserExists(id: string): Promise<TUser | null>;
}
