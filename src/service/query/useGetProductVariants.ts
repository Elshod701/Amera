export interface CategoryList {
  id: number;
  title: string;
  price: string;
  images: {
    image: string;
    image_id: number;
  }[];
}

export interface DataType {
  key: number;
  title: string;
  id: number;
  image: string;
  count: number;
  results: CategoryList[];
}

export const useGetSubVariant = async (
  id: number | undefined
): Promise<DataType> => {
  try {
    const response = await fetch(
      `http://135.181.108.207/product_variant/?product__category=${id}`,
      {
        next: { revalidate: 3 },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch banners");
    }
    const banners = response.json();
    return banners;
  } catch (error) {
    throw new Error("Failed to fetch banners");
  }
};
