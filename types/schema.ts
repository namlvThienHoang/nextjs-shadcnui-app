import { z } from "zod";

export const productSchema = z.object({
  id: z.number().optional(),
  title: z.string().optional(),
  description: z.string().optional(),
  category: z.string().optional(),
  price: z.number().optional(),
  discountPercentage: z.number().optional(),
  rating: z.number().optional(),
  stock: z.number().optional(),
  tags: z.array(z.string()).optional(),
  brand: z.string().optional(),
  sku: z.string().optional(),
  weight: z.number().optional(),
  warrantyInformation: z.string().optional(),
  shippingInformation: z.string().optional(),
  reviews: z.array(
    z.object({
      rating: z.number().optional(),
      comment: z.string().optional(),
      date: z.string().optional(), // hoặc z.date() nếu bạn muốn parse thành object Date
      reviewerName: z.string().optional(),
      reviewerEmail: z.string().email().optional(), // Email phải được xác thực định dạng
    })
  ).optional(),
  meta: z.object({
    createdAt: z.string().optional(), // Hoặc z.date() nếu bạn cần convert thành Date object
    updatedAt: z.string().optional(),
    qrCode: z.string().optional(), // Có thể có hoặc không
  }).optional(),
  thumbnail: z.string().optional(), // Có thể có hoặc không
  images: z.array(z.string()).optional(), // Có thể có hoặc không
});

export type Product = z.infer<typeof productSchema>
