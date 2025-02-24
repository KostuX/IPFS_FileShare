import wsGetAddress from "./wsGetAddress";
import WSocket from "./wSocket";
export default async function openWebSocket() {
  const { address, error } = await wsGetAddress();

  const socket = new WSocket({ address });

  return socket;
}
