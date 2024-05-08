export interface SubType {
  count: number;
  next: string;
  previous: string;
  results: {
    id: number;
    title: string;
    image: string;
    price: string;
  }[];
}

export const useGetSub = async (): Promise<SubType> => {
  try {
    const res = await fetch("http://135.181.108.207/api/subcategory/?limit=8");
    if (!res.ok) {
      throw new Error("Failed to fetch subcategory");
    }
    const subcategory = res.json();
    return subcategory;
  } catch (error) {
    throw new Error("Failed to fetch subcategory");
  }
};
