import React from "react";
import Hero from "../components/hero";
import scaleSrc from "/public/scale.jpg";

export default function Page() {
  return <Hero src={scaleSrc} alt="Scale" content="Scale ~" />;
}
