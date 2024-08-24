import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

export default function MarqueeImages({ data }) {
  return (
    <Marquee pauseOnHover={true} autoFill={true} className="h-52">
      {data.map((img) => (
        <img src={img} className="mr-3 h-52 w-auto" />
      ))}
    </Marquee>
  );
}
