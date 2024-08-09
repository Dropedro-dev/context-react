import { CountContext } from "@/contexts/CountContext";
import { useContext } from "react";

const OnlineUsers = () => {
    const countCtx = useContext(CountContext);
    
    const handleBanAll =()=>{
        countCtx?.setOnlineCount(0)
    }
    return(
        <>
            <div>Online: {countCtx?.onlineCount}</div>
            <button onClick={handleBanAll}>Banir todo Mundo</button>
        </>
    )
}

export default OnlineUsers;