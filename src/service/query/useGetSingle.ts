interface ProductType {
  count: number;
  next: string;
  previous: string;
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
}

export const getSingle = async (id: string): Promise<ProductType> => {
  try {
    const response = await fetch(
      `http://135.181.108.207/product_variant/${id}/`,
      {
        next: { revalidate: 300 },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const single =  await response.json();

    return single;
  } catch (error) {
    throw new Error("Failed to fetch products");
  }
};
