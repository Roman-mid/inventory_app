'use server';

import prisma from '@/lib/prisma';
import { getCurrentUser } from '../auth';
import { redirect } from 'next/navigation';
import { ProductSchema } from './productSchema';

export const createProduct = async (formData: FormData) => {
  const user = await getCurrentUser();

  const parsed = ProductSchema.safeParse({
    name: formData.get('name'),
    price: formData.get('price'),
    quantity: formData.get('quantity'),
    sku: formData.get('sku') || undefined,
    lowStockAt: formData.get('lowStockAt') || undefined,
  });

  if (!parsed.success) {
    throw new Error('Validation failed');
  }

  try {
    await prisma.product.create({
      data: { ...parsed.data, userId: user.id },
    });
    redirect('/inventory');
  } catch (error) {
    if (error instanceof Error && error.message === 'NEXT_REDIRECT') {
      throw error;
    }
    throw new Error('Failed to create product');
  }
};
