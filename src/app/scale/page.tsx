import React from "react";
import Hero from "../components/hero";
import scaleSrc from "/public/scale.jpg";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scale",
};
export default function Page() {
  return <Hero src={scaleSrc} alt="Scale" content="Scale ~" />;
}
