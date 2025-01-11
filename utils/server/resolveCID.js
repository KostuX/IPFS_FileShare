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

  if (!reqAddress.ok) {
    setErrorMessage("cannot get address");
    return;
  }
  wsAddress = reqAddress.data;
  addInfoData({ title: "(API) WS Address Resolved", data: wsAddress });

  let socket = openWebSocket(wsAddress);
  setSocket(socket);

  socket.onopen = () => {
    addInfoData("WebSocket connection established");
  };
  // addInfoData("WebSocket connection established");
  //wsSend(socket, JSON.stringify({ test: "test" }));
  // console.log(socket);

  // socket.send(JSON.stringify({ data: "connect test " }));
}
