import { FaArrowCircleLeft } from "react-icons/fa";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { TiMessages } from "react-icons/ti";
import useConverstaion from "../../zustand/useConverstaion";
import { useEffect } from "react";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConverstaion();

  // useEffect(() => {
  //   return () => setSelectedConversation(null);
  // }, []);

  const handleClick = () => {
    setSelectedConversation(null);
  };

  return (
    <div className="min-w-80 max-w-full min-h-96 max-h-svh flex flex-col ">
      {!selectedConversation ? ( 
        <NoChatSelected />
      ) : (
        <>
          {/* Header of Message Container */}
          <div className="bg-slate-500 px-4 py-2 mb-2 flex items-center justify-start gap-3">
            <span className="flex justify-center items-center pt-1">
              <button className=" hover:text-white" onClick={handleClick}>
                <FaArrowCircleLeft />
              </button>
            </span>
            <span className="label-text text-white text-base">To : </span>{" "}
            <span className="text-gray-900 font-bold">
              {selectedConversation.fullName}
            </span>
          </div>
          {/* Messages component */}
          <Messages />
          {/* Message Input Component */}
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 {authUser.fullName} ❄</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
