import { useContext } from "react";
import MessageContext from "../contexts/MessageContext";

const useMessages = () => useContext(MessageContext);

export default useMessages;
