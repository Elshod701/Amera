interface ProductVariantType {
  count: number;
  next: string;
  previous: string;
  results: {
    id: number;
    is_available: boolean;
    title: string;
    images: {
      image: string;
      order: number;
    }[];
    product: number;
    attribute_value: [];
    other_detail: string;
    price: string;
    price_with_discount: string;
    quantity: number;
  }[];
}

export const useGetProducts = async (): Promise<ProductVariantType> => {
  try {
    const res = await fetch("http://135.181.108.207/product_variant/");
    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }
    const products = res.json();
    return products;
  } catch (error) {
    throw new Error("Failed to fetch products");
  }
};
