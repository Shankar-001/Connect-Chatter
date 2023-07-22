import { ChatState } from "../Context/chatProvider"
import { useState } from "react";
import { Box } from "@chakra-ui/react"
import SideDrawer from "../Components/Miscellaneous/SideDrawer"
import Chatbox from "../Components/ChatBox";
import MyChats from "../Components/MyChats";



const Chat = () => {
  const { user } = ChatState();
  const [fetchAgain, setFetchAgain] = useState(false);


  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer /> }
      <Box display="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  )
}
export default Chat