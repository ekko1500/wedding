"use client";

import HisStory from "@/components/HIsStory";
import HappyCouple from "@/components/HappyCouple";
import HerStory from "@/components/HerStory";
import LandingPage from "@/components/LandingPage";
import NavBar from "@/components/NavBar";
import Slider from "@/components/Slider";
import Map from "@/components/Map";
// import Gallery from "../components/Gallery";
import { ThemeProvider, Carousel } from "@material-tailwind/react";
import Time from "@/components/Time";
export { Carousel };
export default function Home() {
  return (
    <ThemeProvider>
      <NavBar />
      <Slider />

      <HappyCouple />
      <HisStory />
      <HerStory />
      <Time />
      <Map />
    </ThemeProvider>
  );
}
