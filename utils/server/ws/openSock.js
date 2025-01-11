import { ws_connection } from "@/reusable/variables/connection";
const WebSocket = require("ws");

let wss = null;
export default async function openWS() {
  if (wss != null) {
    return wss;
  } else {
    wss = new WebSocket.Server({ port: ws_connection.port });

    wss.on("connection", (ws) => {
      ws.on("message", (message) => {
        const { data } = JSON.parse(message);
        console.log(data);
        ws.send(JSON.stringify({ data: "hello from server" }));
      });

      ws.on("close", () => {
        console.log("Client disconnected");
      });

      ws.send(JSON.stringify({ data: "WebSocket server connected" }));
    });

    return wss;
  }
}
