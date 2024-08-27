"use client";
import RSVP from "@/components/rsvp";
import { useState, useEffect } from "react";

export default function Home() {
  const [fact, setFact] = useState("");
  
  useEffect(() => {
    async function getData() {
      const response = await fetch("https://dog-api.kinduff.com/api/facts");
      const data = await response.json();
      setFact(data.facts[0]);
    }

    getData();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 relative">
      <div className="absolute bottom-2 left-2 pb-4 w-full">
        <p className="font-gaegu text-center w-[90vw] m-auto">Did you know? {fact}</p>
      </div>
      <div className="absolute top-2 right-2">
        <RSVP />
      </div>
      <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="true"></link>
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossorigin
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Darumadrop+One&family=Gaegu&family=Roboto:wght@300;400;500;700&display=swap"
        rel="stylesheet"
      ></link>
      <div>
        <h1 className="font-darum text-3xl text-darkYellow text-center pb-3">
          UW Student Wellness Office: Therapy puppies
        </h1>
        <p className="font-gaegu text-center text-xl max-w-md m-auto">
          Come interact with puppies as a study break. The event is completely free for students. 
        </p>
        <p className="font-gaegu text-center text-xl max-w-md m-auto mt-3">
          When? December 12th from 1-5pm 
        </p>
        <p className="font-gaegu text-center text-xl max-w-md m-auto">
          Where? Student life center
        </p>
        <img src="/dog.png" className="max-w-md w-[90vw] my-3 m-auto" />
        <RSVP />
      </div>
    </main>
  );
}
