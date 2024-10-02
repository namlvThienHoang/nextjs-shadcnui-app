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
      date: z.string().optional(), 
      reviewerName: z.string().optional(),
      reviewerEmail: z.string().email().optional(), 
    })
  ).optional(),
  meta: z.object({
    createdAt: z.string().optional(), 
    updatedAt: z.string().optional(),
    qrCode: z.string().optional(), 
  }).optional(),
  thumbnail: z.string().optional(), 
  images: z.array(z.string()).optional(), 
});


export const taskSchema = z.object({
  id: z.string().optional(),
  title: z.string().optional(),
  code: z.string().optional(),
  status: z.string().optional(),
  label: z.string().optional(),
  priority: z.string().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export type Product = z.infer<typeof productSchema>
export type Task = z.infer<typeof taskSchema>
