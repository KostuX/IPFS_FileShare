export default function openWebSocket(url, onOpen, onMessage, onError) {
  const socket = new WebSocket(url);

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

  return socket;
}
