import { api_getWsAddress } from "@/reusable/variables/apiRoutes";
export default async function wsGetAddress() {
  let error = { ok: true, err: [] }
  let data = {}
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ type: "getWsAddress", key: "need ID key" }),
  };
  try {
    const response = await fetch(api_getWsAddress, options);
    let data;
    try {
      data = await response.json();
    } catch (e) {

      error = { ok: false, err: ["Invalid JSON response"] }

    }

    if (data.ok) {
      return { address:data.data, error:error}

    } else {
      error = { ok: false, err: ["Submission failed"] }

    }
  } catch (error) {
    error = { ok: false, err: ["An error occurred"] }
  }

  return { data, error }
}
