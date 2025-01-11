export default function wsSend(socket, data) {
  socket.onopen((d) => {
    socket.send(data);
  });
}
