import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.

export const userSchema = z.object({
  id: z.number(),
  firstName: z.string(),
  lastName: z.string(),
  age: z.number(), // Tuổi là số nguyên
  gender: z.enum(["male", "female", "other"]), // Chỉ nhận các giá trị trong danh sách
  email: z.string().email(), // Email cần được xác thực định dạng
  phone: z.string(),
  username: z.string(),
  password: z.string(),
  birthDate: z.string(), // Có thể là định dạng chuỗi hoặc có thể chuyển sang z.date() nếu bạn muốn parse nó thành đối tượng Date
  image: z.string().optional(),
  address: z.object({
    address: z.string(),
    city: z.string(),
    state: z.string(),
    stateCode: z.string(),
    postalCode: z.string(),
    country: z.string(),
  }),
  university: z.string(),
  bank: z.object({
    cardExpire: z.string(),
    cardNumber: z.string(),
    cardType: z.string(),
    currency: z.string(),
    iban: z.string(),
  }),
  role: z.enum(["admin", "moderator", "user"]), // Role chỉ nhận giá trị từ danh sách
});


export type Customer = z.infer<typeof userSchema>