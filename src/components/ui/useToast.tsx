import { useContext } from "react";
import { type ToastContextType } from "./ToastProvider";
import { ToastContext } from "./ToastContext";



export function useToast(): ToastContextType  {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }

  return context;
}
