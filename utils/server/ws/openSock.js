import { ws_connection } from "@/reusable/variables/connection";
const WebSocket = require("ws");

let wss = null;
export default async function openWS() {
  if (wss != null) {
    return wss;
  } else {
    wss = new WebSocket.Server({ port: ws_connection.port });
    let ws = { ws: wss };
    wss.on("connection", (ws) => {
      ws.on("message", (message) => {
        const { type, data } = JSON.parse(message);
        console.log(type, data);
      });

      ws.on("close", () => {
        console.log("Client disconnected");
      });

      ws.send(JSON.stringify({ data: "WebSocket server connected" }));
    });

    return wss;
  }
}
