export interface CategoryType {
  count: number;
  next: string;
  previous: string;
  results: [
    {
      id: number;
      title: string;
      image: string;
      children: {}[];
    }
  ];
}

export const useGetBanners = async (): Promise<CategoryType> => {
  try {
    const res = await fetch("http://135.181.108.207/category/");
    if (!res.ok) {
      throw new Error("Failed to fetch categories");
    }
    const banners = res.json();
    return banners;
  } catch (error) {
    throw new Error("Failed to fetch categories");
  }
};
