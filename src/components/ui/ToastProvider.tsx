import * as Toast from "@radix-ui/react-toast";
import {
  useState,
  type ReactNode,
} from "react";
import { ToastContext } from "./ToastContext";

export type ToastContextType = {
  showToast: (message: string) => void;
};


export function ToastProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const showToast = (msg: string) => {
    setMessage(msg);
    setOpen(false); 
    requestAnimationFrame(() => setOpen(true));
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      <Toast.Provider duration={3000}>
        {children}

        <Toast.Root open={open} onOpenChange={setOpen} className="ToastRoot toast-bg">
          <Toast.Title>{message}</Toast.Title>
        </Toast.Root>

        <Toast.Viewport className="ToastViewport" />
      </Toast.Provider>
    </ToastContext.Provider>
  );
}
