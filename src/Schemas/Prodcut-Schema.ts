import { z } from "zod";

export const categoryOptions = [
  "Antibiotic",
  "Antidiabetic",
  "GI",
  "Vitamin",
  "Cardiac",
] as const;
export const statusOptions = ["Critical", "Low Stock", "In Stock"] as const;

export const addProductSchema = z.object({
  name: z.string().min(2, "Product name must be at least 2 characters"),
  description: z.string().min(3, "Description must be at least 3 characters"),
  sku: z.string().regex(/^SKU-\d{5}$/, "SKU must be in format SKU-12345"),
  category: z.enum(categoryOptions),
  price: z.number().positive("Price must be greater than 0"),
  stock: z
    .number()
    .int("Stock must be a whole number")
    .min(0, "Stock cannot be negative"),
  expiry: z.string().min(3, "Expiry is required"),
  status: z.enum(statusOptions),
});
