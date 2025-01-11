import { api_getWsAddress } from "@/reusable/variables/apiRoutes";
export default async function getWsAddress({ setErrorMessage }) {
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
    } catch (error) {
      data = { message: "Invalid JSON response" };
    }

    if (data.ok) {
      setErrorMessage({ ok: true, err: [] });
      return data;
    } else {
      setErrorMessage({
        ok: false,
        err: [data.message || "Submission failed"],
      });
    }
  } catch (error) {
    setErrorMessage({
      ok: false,
      err: [error.message || "An error occurred"],
    });
  }
}
