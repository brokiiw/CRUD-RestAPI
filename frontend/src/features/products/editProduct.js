
import { axiosInstance } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

export const editProduct = ({ onSuccess }) => {
  return useMutation({
    mutationFn: async (body) => {
      const productsResponse = await axiosInstance.patch(
        `/products/${body.id}`,
        body
      );

      return productsResponse;
    },
    onSuccess,
  });
};
