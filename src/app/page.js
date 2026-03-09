import Hero from "@/components/LandingPage/Hero";
import Image from "next/image";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <div className="px-[124px] py-[32px]">
      <Navbar />
      <Hero />
    </div>
  );
}
