import { toast } from "sonner";

const useToast = () => {
  const toastError = () => {
    toast.error("Something went wrong", {
      style: {
        backgroundColor: "red",
        borderColor: "red",
        color: "white",
      },
    });
  };

  return { toastError };
};

export default useToast;
