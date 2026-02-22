import { Spotlight } from "./ui/Spotlight";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Link from "next/link";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

function Hero() {
  return (
    <div className="pd-20 pt-36">
      {/* spotlight */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      {/* ===spotlight=== */}

      {/* grid and dot backgrounds */}
      <div className="absolute top-0 left-0 flex h-screen w-full items-center justify-center bg-white dark:bg-black-100/[0.03]">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:80px_100px]",
            "[background-image:linear-gradient(to_right,#f8f8f9_1px,transparent_1px),linear-gradient(to_bottom,#f8f8f9_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)]"
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100"></div>
      </div>
      {/* ===grid and dot backgrounds=== */}

      {/* heading */}
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-center text-blue-100 max-w-80">
            Dynamic Web Magic with Next.js
          </h2>

          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Transforming Concepts into Seamless Experiences"
            filter={true}
          />

          <p className="text-center md:tracking-wide mb-4 text-sm md:text-lg lg:text-2xl">
            Hi, Iam Dalia , a Next.js Developer based in Egypt
          </p>

          <MagicButton
            title="Show my work"
            icon={<FaLocationArrow />}
            position="right"
          />
        </div>
      </div>
      {/* ===heading=== */}
    </div>
  );
}

export default Hero;
