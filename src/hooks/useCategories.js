import { addNewCategory, getCategories } from "@/services/categoryService";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useGetCategories = () =>
  useQuery({
    queryKey: ["get-categories"],
    queryFn: getCategories,
    retry: false,
    refetchOnWindowFocus: true,
  });

export const useAddCategory = () => useMutation({ mutationFn: addNewCategory });
