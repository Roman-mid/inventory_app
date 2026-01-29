import prisma from '@/lib/prisma';
import { getCurrentUser } from '@/lib/auth';

const getMetricsData = async () => {
  const user = await getCurrentUser();

  const totalProducts = await prisma.product.count({
    where: { userId: user.id },
  });

  const lowStock = await prisma.product.count({
    where: {
      userId: user.id,
      lowStockAt: { not: null },
      quantity: { lte: 5 },
      // quantity: { lte: 5 },
    },
  });

  const allProducts = await prisma.product.findMany({
    where: { userId: user.id },
    // orderBy: { name: 'asc' },
    select: { price: true, quantity: true, createdAt: true },
  });

  const recent = await prisma.product.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: 'desc' },
    take: 5,
  });

  const totalValue = allProducts.reduce((acc, product) => {
    return acc + Number(product.price) * Number(product.quantity);
  }, 0);

  const metricsData = [
    { label: 'Total Products', value: totalProducts },
    { label: 'Total Inventory Value', value: totalValue.toFixed(0) },
    { label: 'Low Stock', value: lowStock },
  ];

  return { metricsData, recent, allProducts, totalProducts };
};

export default getMetricsData;

export interface MetricsData {
  label: string;
  value: number | string;
}
