import React from "react";
import Hero from "../components/hero";
import performanceSrc from "/public/performance.jpg";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Performance",
};
export default function Page() {
  return (
    <Hero src={performanceSrc} alt="Performance" content="Performance ~" />
  );
}
