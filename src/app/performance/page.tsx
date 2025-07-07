import React from "react";
import Hero from "../components/hero";
import performanceSrc from "/public/performance.jpg";

export default function Page() {
  return (
    <Hero src={performanceSrc} alt="Performance" content="Performance ~" />
  );
}
