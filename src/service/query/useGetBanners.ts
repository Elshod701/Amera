export interface BannerType {
  count: number;
  next: string;
  previous: string;
  results: {
    id: number;
    created_at: string;
    updated_at: string;
    image: string;
    title: string;
    description: string;
  }[];
}

export const useGetBanners = async (): Promise<BannerType> => {
  try {
    const res = await fetch("http://135.181.108.207/banner/");
    if (!res.ok) {
      throw new Error("Failed to fetch banners");
    }
    const banners = res.json();
    return banners;
  } catch (error) {
    throw new Error("Failed to fetch banners");
  }
};
