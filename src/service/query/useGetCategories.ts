export interface CategoryType {
  count: number;
  next: string;
  previous: string;
  results: [
    {
      id: number;
      title: string;
      image: string;
      children: {
        id: number;
        images: string;
        title: string;
      }[];
    }
  ];
}

export const useGetCategories = async (): Promise<CategoryType> => {
  try {
    const res = await fetch("http://135.181.108.207/category/");
    if (!res.ok) {
      throw new Error("Failed to fetch categories");
    }
    const categories = res.json();
    return categories;
  } catch (error) {
    throw new Error("Failed to fetch categories");
  }
};
