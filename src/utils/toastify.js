import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const notifySuccess = (txt) => {
    toast.success(txt, {
      position: toast.POSITION.TOP_RIGHT,
      theme: "colored",
      toastId: 1,
    });
  };


export const notifyError = (txt) => {
    toast.error(txt, {
      position: toast.POSITION.TOP_RIGHT,
      theme: "colored",
      toastId: 1,
    });
  };