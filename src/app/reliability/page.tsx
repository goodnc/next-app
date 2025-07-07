import React from "react";
import Hero from "../components/hero";
import reliabilitySrc from "/public/reliability.jpg";

export default function Page() {
  return (
    <Hero src={reliabilitySrc} alt="Reliability" content="Reliability ~" />
  );
}
