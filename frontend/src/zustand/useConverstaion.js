import { create } from "zustand";

const useConverstaion = create((set) => ({

  selectedConversation: null,
  setSelectedConversation: (selectedConversation) =>
    set({ selectedConversation }),
  
  messages: [],
  setMessages: (messages) => set({ messages }),
}));

export default useConverstaion;
