import { z } from "zod";

export const productSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  category: z.string(),
  price: z.number(),
  discountPercentage: z.number(),
  rating: z.number(),
  stock: z.number(),
  tags: z.array(z.string()),
  brand: z.string().optional(),
  sku: z.string(),
  weight: z.number(),
  dimensions: z.object({
    width: z.number(),
    height: z.number(),
    depth: z.number(),
  }),
  warrantyInformation: z.string(),
  shippingInformation: z.string(),
  availabilityStatus: z.string(),
  reviews: z.array(
    z.object({
      rating: z.number(),
      comment: z.string(),
      date: z.string(), // hoặc z.date() nếu bạn muốn parse thành object Date
      reviewerName: z.string(),
      reviewerEmail: z.string().email(), // Email phải được xác thực định dạng
    })
  ),
  returnPolicy: z.string(),
  minimumOrderQuantity: z.number(),
  meta: z.object({
    createdAt: z.string(), // Hoặc z.date() nếu bạn cần convert thành Date object
    updatedAt: z.string(),
    barcode: z.string(),
    qrCode: z.string().optional(), // Có thể có hoặc không
  }),
  thumbnail: z.string().optional(), // Có thể có hoặc không
  images: z.array(z.string()).optional(), // Có thể có hoặc không
});

export type Product = z.infer<typeof productSchema>
