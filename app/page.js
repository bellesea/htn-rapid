"use client";
import Image from "next/image";
import Confetti from "@/components/confetti";
import Marquee from "@/components/marquee";
import Form from "@/components/form";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossorigin
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Darumadrop+One&family=Gaegu&family=Roboto:wght@300;400;500;700&display=swap"
        rel="stylesheet"
      ></link>
      <h1 className="font-darum text-3xl text-darkYellow">Therapy dogs</h1>
    </main>
  );
}
