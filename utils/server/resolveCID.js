import wsGetAddress from "./ws/wsGetAddress";
import openWebSocket from "./ws/wsOpen";
import wsSend from "./ws/wsSend";
import nookies from "nookies";

export default async function resolveCID({
  input,
  setErrorMessage,
  addInfoData, 
}) {
  const {address, error} = await wsGetAddress();
  let wsAddress = {};
  setErrorMessage("Cannot get address of the server");
  // Check session
  const user = nookies.get(null).user;

 console.log(error)

  if (!error.ok ) {
    setErrorMessage("Cannot get address of the server");
    return;
  }

  wsAddress = address

  let socket = await openWebSocket(wsAddress);

  let request = {
    type: "GET_CID_INFO",
    data: input,
    user: user,
  };

  wsSend(socket, request);

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (data.type === "JOB") {
      addInfoData(data);
    }
    console.log(data);
  };

  // socket.close();
}
