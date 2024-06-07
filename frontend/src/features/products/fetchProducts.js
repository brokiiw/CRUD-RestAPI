
import { axiosInstance } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export const fetchProducts = ({ onError }) => {
  return useQuery({
    queryFn: async () => {
      const productsResponse = await axiosInstance.get("/products");

      return productsResponse;
    },
    queryKey: ["fetch.products"],
    onError,
  });
};
