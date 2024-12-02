"use client";

import { useToast } from "@/data/hooks/useToast";
import { createContext, useCallback } from "react";

export interface MessageContextProps {
  addSuccessMessage: (message: string) => void;
  addErrorMessage: (message: string) => void;
}

const MessageContext = createContext<MessageContextProps>({} as any);

export function MessageContextProvider(props: any) {
  const { toast } = useToast();

  const addMessage = useCallback(
    function (type: "success" | "error", text: string) {
      toast({
        title:
          type === "success" ? "Tudo certo por aqui!" : "Ops, algo deu errado!",
        description: text,
        variant: type === "success" ? "default" : "destructive",
      });
    },
    [toast]
  );

  return (
    <MessageContext.Provider
      value={{
        addSuccessMessage: (message: string) => addMessage("success", message),
        addErrorMessage: (message: string) => addMessage("error", message),
      }}
    >
      {props.children}
    </MessageContext.Provider>
  );
}

export default MessageContext;
