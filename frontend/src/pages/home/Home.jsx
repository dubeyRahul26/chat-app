import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";
import useConverstaion from "../../zustand/useConverstaion";

const Home = () => {
  const { selectedConversation, setSelectedConversation } = useConverstaion();
  console.log("Selected Conversation:", selectedConversation);  
  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ">
      {!selectedConversation ? ( <Sidebar />) : ( <MessageContainer />)}
    </div>
  );
};

export default Home;
