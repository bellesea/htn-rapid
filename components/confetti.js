import { useRef, useEffect } from "react";
import JSConfetti from 'js-confetti'

// https://www.npmjs.com/package/js-confetti

export default function Confetti() {
  function confetti() {
    jsConfetti.current.addConfetti({
      emojis: ["🐶", "🐕", "🐾", "🐩", "🦴"],
    });
  }
  let jsConfetti = useRef();

  useEffect(() => {
    jsConfetti.current = new JSConfetti();
  }, []);
  return (
    <div
      onClick={() => {
        confetti();
      }}

      className="bg-yellow-600 px-3 py-2 rounded-lg cursor-pointer"
    >
      🐶
    </div>
  );
}
