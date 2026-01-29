import { z } from 'zod';

export const ProductSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  price: z.coerce.number().nonnegative('Price must be positive'),
  quantity: z.coerce.number().int().min(0, 'Quantity must be positive'),
  sku: z.string().optional(),
  lowStockAt: z.coerce.number().int().min(0).optional(),
});
