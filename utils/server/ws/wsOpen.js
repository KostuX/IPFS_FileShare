export default async function openWebSocket({ address }) {
  const url = `ws://${address.address}:${address.port}`;
  let socket = null;

  try {
    socket = new WebSocket(url);
  } catch (e) {
    console.error("cannot open socket", e);
  }

  socket.onclose = () => {
    console.log("WebSocket connection closed");
  };
  socket.onopen = () => {
    console.log("WebSocket connection established");
  };
  socket.onerror = (error) => {
    console.error("WebSocket error:", error);
  };
  return socket;
}
