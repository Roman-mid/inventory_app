import { getCurrentUser } from '@/lib/auth';
import prisma from '@/lib/prisma';

interface Params {
  q?: string | undefined;
  page?: string | undefined;
}

export const getPaginationData = async (params: Params) => {
  const q = (params.q || '').trim();
  const page = Math.max(1, Number(params.page ?? 1));
  const pageSize = 5;

  const user = await getCurrentUser();
  const items = await prisma.product.findMany({
    where: { userId: user.id, name: { contains: q, mode: 'insensitive' } },
    orderBy: { createdAt: 'desc' },
    skip: (page - 1) * pageSize,
    take: pageSize,
  });

  const products = items.map((p) => ({
    id: p.id,
    name: p.name,
    sku: p.sku,
    price: p.price.toNumber(), // ✅ Decimal → number
    quantity: p.quantity,
    lowStockAt: p.lowStockAt,
  }));

  const totalCount = await prisma.product.count({
    where: { userId: user.id, name: { contains: q, mode: 'insensitive' } },
  });

  const totalPages = Math.max(1, Math.ceil(totalCount / pageSize));

  return { totalPages, items, page, pageSize, q, products };
};
