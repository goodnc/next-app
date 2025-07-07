import React from "react";
import Hero from "./components/hero";
import homeSrc from "/public/home.jpg";

export default function Home() {
  return <Hero src={homeSrc} alt="Home" content="Professional Cloud Hosting" />;
}
