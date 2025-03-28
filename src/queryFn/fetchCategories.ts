import axios from "axios";

export type fetchCategoriesResponse = {
  id: string;
  name: string;
};

export async function fetchCategories() {
  const result = await axios.get<fetchCategoriesResponse[]>("/api/categories");

  if (result.status !== 200) {
    throw new Error("Failed to fetch categories");
  }

  return result.data;
}
