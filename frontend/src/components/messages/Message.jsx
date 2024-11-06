import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConverstaion from "../../zustand/useConverstaion";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConverstaion();

  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? "bg-blue-500" : "bg-gray-600";
  const formattedTime = extractTime(message.createdAt);
  const shakeClass = message.shouldShake ? "shake" : "";

  return (
    <div>
      <div className={`chat ${chatClassName}`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src={`${profilePic}`}
            />
          </div>
        </div>
        <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass}`}>
          {message.message}
        </div>
        <div className="chat-footer opacity-75 text-xs flex gap-1 items-center text-white">
          {formattedTime} 
          {fromMe && <div className="text-white"> &nbsp;You</div>}
        </div>
        
      </div>
    </div>
  );
};

export default Message;
