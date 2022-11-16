import { Category } from "../contracts/checkpoint";
import data from "./checkpointCategories.json";

export const categories: Category[] = [...data.categories];
