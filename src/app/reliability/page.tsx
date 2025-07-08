import React from "react";
import Hero from "../components/hero";
import reliabilitySrc from "/public/reliability.jpg";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reliability",
};
export default function Page() {
  return (
    <Hero src={reliabilitySrc} alt="Reliability" content="Reliability ~" />
  );
}
