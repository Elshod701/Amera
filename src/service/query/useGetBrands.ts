export interface BrandType {
  count: number;
  next: string;
  previous: string;
  results: [
    {
      id: number;
      title: string;
      image: string;
    }
  ];
}

export const useGetBrands = async (): Promise<BrandType> => {
  try {
    const res = await fetch("http://135.181.108.207/brand/");
    if (!res.ok) {
      throw new Error("Failed to fetch brands");
    }
    const brand = res.json();
    return brand;
  } catch (error) {
    throw new Error("Failed to fetch brands");
  }
};
