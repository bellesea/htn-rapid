"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [fact, setFact] = useState("");

  useEffect(() => {
   // CODE FOR API GOES HERE
  }, []);

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center px-24 relative">
        <div className="hidden md:block absolute top-2 right-2">
          {/* RSVP GOES HERE */}
        </div>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="true"
        ></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Darumadrop+One&family=Gaegu&family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        ></link>
        <div className="grid md:grid-cols-2 gap-3 py-6">
          <div className="flex justify-center items-center">
            <div>
              <h1 className="font-darum text-2xl md:text-3xl text-darkYellow pb-3">
                Paws for Wellness
              </h1>
              <p className="font-gaegu text-lg md:text-xl max-w-lg m-auto">
                Come destress and play with our adorable therapy dogs. Research
                shows it lowers your stress hormones, Cortisol, and increases
                your feel-good hormones, Oxytocin. Also, it's dogs... you
                probably don't need more convincing but in case you do, it's
                also free!
              </p>
              <p className="font-gaegu text-lg md:text-xl max-w-lg m-auto mt-3 font-bold">
                ⏰ When? December 12th, 1-5pm
              </p>
              <p className="font-gaegu text-lg md:text-xl max-w-lg m-auto font-bold">
                📍 Where? Student life center
              </p>
              {/* RSVP GOES HERE */}
            </div>
          </div>

          <img
            src="/dog.jpg"
            className="max-w-lg w-full rounded-md my-3 m-auto"
          />
        </div>

        <div className="relative py-6 w-[90vw] max-w-2xl">
          <p className="font-gaegu text-center text-darkYellow">
            {/* DID YOU KNOW GOES HERE */}
          </p>
        </div>
      </main>
    </>
  );
}
