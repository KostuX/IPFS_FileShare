import wsGetAddress from "./ws/wsGetAddress";
import openWebSocket from "./ws/wsOpen";
import wsSend from "./ws/wsSend";

export default async function resolveCID({
  input,
  setErrorMessage,
  addInfoData,
  setSocket,
}) {
  const reqAddress = await wsGetAddress({ setErrorMessage });
  let wsAddress = {};

  if (reqAddress.ok !== true) {
    setErrorMessage("Cannot get address of the server");

    return;
  }

  wsAddress = reqAddress.data;

  let socket = await openWebSocket(wsAddress);

  let request = {
    type: "GET_CID_INFO",
    data: input,
  };

  wsSend(socket, request);

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (data.type === "INFO") {
      addInfoData(data);
    }
    console.log(data);
  };

  // socket.close();
}
