import React from "react";
import Hero from "./components/hero";
import homeSrc from "/public/home.jpg";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return <Hero src={homeSrc} alt="Home" content="Professional Cloud Hosting" />;
}
