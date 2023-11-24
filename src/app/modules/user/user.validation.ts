import { z } from "zod";

const userNameSchema = z.object({
  firstName: z.string({ required_error: "First Name is Required" }),
  lastName: z.string({ required_error: "Last Name is Required" }),
});

const orderSchema = z.object({
  productName: z.string({ required_error: "Product Name is Required" }),
  price: z.number({ required_error: "Price is Required" }),
  quantity: z.number({ required_error: "Quantity is Required" }),
});

export const userValidationSchema = z.object({
  userId: z.string({ required_error: "User ID is Required" }),
  username: z.string({ required_error: "Username is Required" }),
  password: z.string({ required_error: "Password is Required" }),
  name: userNameSchema,
  age: z.number({ required_error: "Age is Required" }),
  email: z.string({ required_error: "Email is Required" }),
  isActive: z.boolean({ required_error: "isActive is Required" }),
  hobbies: z.array(z.string({ required_error: "Hobbies are Required" })),
  address: z.object({
    street: z.string({ required_error: "Street is Required" }),
    city: z.string({ required_error: "City is Required" }),
    country: z.string({ required_error: "Country is Required" }),
  }),
  orders: z.array(orderSchema),
});

export default userValidationSchema;
