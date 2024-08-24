// for making a post request https://theconfuzedsourcecode.wordpress.com/2019/11/11/you-may-restfully-submit-to-your-google-forms/
import { useState } from "react";

export default function Form() {
  const [email, setEmail] = useState("bellesee1212@gmail.com");
  const [status, setStatus] = useState("loading");

  const submitVote = async () => {
    try {
      const response = await fetch("/api/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <>
      <button onClick={() => submitVote()}></button>
    </>
  );
}
