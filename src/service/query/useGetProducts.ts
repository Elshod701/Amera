export interface ProductType {
  count: number;
  next: string;
  previous: string;
  results: [
    {
      id: number;
      image: string;
      title: string;
      price: string;
      is_available: boolean;
      category: string;
      is_new: boolean;
    }
  ];
}

export const useGetProducts = async (): Promise<ProductType> => {
  try {
    const res = await fetch("http://135.181.108.207/product/");
    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }
    const products = res.json();
    return products;
  } catch (error) {
    throw new Error("Failed to fetch products");
  }
};
