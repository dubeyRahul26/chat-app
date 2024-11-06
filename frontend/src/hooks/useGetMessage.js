import { useEffect, useState } from "react";
import useConverstaion from "../zustand/useConverstaion";
import toast from "react-hot-toast";

const useGetMessages = () => {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConverstaion();

  const getMessages = async () => {
    setLoading(true);
    try {
      const res = await fetch(`api/messages/${selectedConversation._id}`);
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setMessages(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (selectedConversation?._id) getMessages();
  }, [selectedConversation?._id, setMessages]);

  return {loading , messages}
};
export default useGetMessages;