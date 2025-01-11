export default function openWebSocket(address, onOpen, onMessage, onError) {
  const url = `ws://${address.address}:${address.port}`;
  let socket = null;

  try {
    socket = new WebSocket(url);
  } catch (e) {
    console.error("cannot open socket", e);
  }
  /*
  socket.onopen = () => {
    console.log("WebSocket connection established");
    if (onOpen) {
      onOpen(socket);
    }
  };

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (onMessage) {
      onMessage(data);
    }
  };

  socket.onerror = (error) => {
    console.error("WebSocket error:", error);
    if (onError) {
      onError(error);
    }
  };

  socket.onclose = () => {
    console.log("WebSocket connection closed");
  };
*/
  return socket;
}
