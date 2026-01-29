interface Product {
  id: string;
  name: string;
  sku: string | null;
  price: number;
  quantity: number;
  lowStockAt: number | null;
}

export interface TBodyProps {
  products: Product[];
}
