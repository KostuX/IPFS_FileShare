import getWsAddress from "./ws/getWsAddress";
export default async function resolveCID({ input, setErrorMessage, setInfo }) {
  const reqAddress = await getWsAddress({ setErrorMessage });
  let wsAddress = {};

  if (reqAddress.ok) {
    wsAddress = reqAddress.data;
    console.log(wsAddress);
  }
}
