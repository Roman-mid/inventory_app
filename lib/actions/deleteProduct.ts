'use server';

import { getCurrentUser } from '../auth';
import prisma from '@/lib/prisma';

export const deleteProduct = async (productId: string) => {
  const user = await getCurrentUser();

  await prisma.product.delete({
    where: { id: productId, userId: user.id },
  });
};
