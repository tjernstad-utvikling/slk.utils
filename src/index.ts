import data from "./checkpointCategories.json";

export const categories: Category[] = { ...data.categories };

interface Category {
  key: string;
  name: string;
  groups: {
    key: number;
    name: string;
  }[];
}
