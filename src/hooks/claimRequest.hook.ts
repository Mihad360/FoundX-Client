import { useMutation } from "@tanstack/react-query";
import { claimRequest } from "../services/claimRequest";
import { toast } from "sonner";

export const useClaimRequest = () => {
  return useMutation({
    mutationKey: ["claimReqData"],
    mutationFn: async (claimReqData) => {
      return await claimRequest(claimReqData);
    },
    onSuccess: () => {
      toast.success("Claim item request Successfull", { duration: 3000 });
    },
    onError: (error) => {
      console.log(error.message);
      toast.error(error.message || "Claim item request Failed", {
        duration: 4000,
      });
    },
  });
};
