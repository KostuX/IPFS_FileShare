export default function wsSend(socket, data) {
  socket.onopen = () => {
    socket.send(JSON.stringify(data));
  };
}
