import { useContext } from "react";
import { contextApi } from "../../Context/Context";

function Username() {
  const {user,uname} = useContext(contextApi);
  if(!user) return;
    return <div className="hidden text-sm font-semibold md:block">{uname? user : ""}</div>;
  }
  
  export default Username;
  