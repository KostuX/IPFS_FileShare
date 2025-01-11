import { useEffect, useState } from "react";

export default function ErrorMessage({ prop }) {
  const [error, setError] = useState(null);
  const message = prop.errorMessage;
  useEffect(() => {
    if (!message.ok) {
      setError(message.err);
    } else {
      setError([]);
    }
  }, [prop]);

  function prepareErrorMessage(error) {
    if (error && error.length > 0) {
      return error.map((err, index) => <div key={index}>{err}</div>);
    }
    return null;
  }

  return (
    <div className="text-center text-red-500">{prepareErrorMessage(error)}</div>
  );
}
