"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidationSchema = void 0;
const zod_1 = require("zod");
const userNameSchema = zod_1.z.object({
    firstName: zod_1.z.string({ required_error: "First Name is Required" }),
    lastName: zod_1.z.string({ required_error: "Last Name is Required" }),
});
const orderSchema = zod_1.z.object({
    productName: zod_1.z.string({ required_error: "Product Name is Required" }),
    price: zod_1.z.number({ required_error: "Price is Required" }),
    quantity: zod_1.z.number({ required_error: "Quantity is Required" }),
});
exports.userValidationSchema = zod_1.z.object({
    userId: zod_1.z.string({ required_error: "User ID is Required" }),
    username: zod_1.z.string({ required_error: "Username is Required" }),
    password: zod_1.z.string({ required_error: "Password is Required" }),
    name: userNameSchema,
    age: zod_1.z.number({ required_error: "Age is Required" }),
    email: zod_1.z.string({ required_error: "Email is Required" }),
    isActive: zod_1.z.boolean({ required_error: "isActive is Required" }),
    hobbies: zod_1.z.array(zod_1.z.string({ required_error: "Hobbies are Required" })),
    address: zod_1.z.object({
        street: zod_1.z.string({ required_error: "Street is Required" }),
        city: zod_1.z.string({ required_error: "City is Required" }),
        country: zod_1.z.string({ required_error: "Country is Required" }),
    }),
    orders: zod_1.z.array(orderSchema),
});
exports.default = exports.userValidationSchema;
