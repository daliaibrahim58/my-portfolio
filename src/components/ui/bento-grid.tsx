"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { BackgroundGradientAnimation } from "./background-gradient-animation";
import { GlobeDemo } from "./GlobeDemo";
import Lottie from "react-lottie";
import { useEffect, useRef, useState } from "react";
import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id?: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  const handleCopy = () => {
    navigator.clipboard.writeText("daliaibrahim582005@gmail.com");

    setCopied(true);

    setAnimationKey((prev) => prev + 1);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(2, 0, 36)",
        backgroundColor:
          "linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(59, 59, 68, 1) 50%, rgba(93, 108, 111, 1) 100%)",
      }}
    >
      <div className={cn(id === 6 && "flex justify-center", "h-full relative")}>
        {/* div images */}
        <div className="absolute w-full h-full">
          {img && (
            <Image
              src={img}
              alt={img}
              width={500}
              height={300}
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>

        {spareImg && (
          <div
            className={cn(
              "absolute right-0 -bottom-5",
              id === 5 && "w-full opacity-80"
            )}
          >
            <Image
              src={spareImg}
              alt="spare image"
              width={500}
              height={300}
              className="object-cover object-center w-full h-full"
            />
          </div>
        )}

        {/* ===div images=== */}

        {id === 6 && (
          <BackgroundGradientAnimation>
            {/* <div className="absolute z-50 flex items-center justify-center text-white font-bold" /> */}
          </BackgroundGradientAnimation>
        )}

        {/* title && description */}
        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex-col px-5 p-5 lg:p-10 "
          )}
        >
          <div className="font-sans text-sm font-extralight text-[#c1c2d3] md:text-xs lg:text-base z-10">
            {description}
          </div>
          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
            {title}
          </div>

          {id === 2 && <GlobeDemo />}

          {id === 3 && (
            <div className="flex gap-1 lg:gap-3 w-fit absolute right-3.5  ">
              {/*  first skills */}
              <div className="flex flex-col gap-1 lg:gap-5 relative bottom-8 md:top-32 lg:top-4">
                {["React.js", "Next.js", "TypeScript"].map((item) => (
                  <span
                    key={item}
                    className="py-1 lg:py-2 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
              </div>
              {/* ===first skills=== */}

              {/*  second skills */}
              <div className="flex flex-col gap-1 lg:gap-5 relative bottom-5  md:top-28  lg:top-3">
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
                {["Redux", "ReactHooks"].map((item) => (
                  <span
                    key={item}
                    className="py-1 lg:py-2 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
              {/* ===second skills=== */}
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              <div className={`absolute -bottom-5 right-0`}>
                <Lottie
                  key={animationKey}
                  options={{
                    loop: false,
                    autoplay: copied,
                    animationData,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice",
                    },
                  }}
                />
              </div>
              <MagicButton
                title={copied ? "Email copied" : "Copy my email"}
                icon={<IoCopyOutline />}
                position="left"
                otherClasses="!bg-[#161a31]"
                handleClick={handleCopy}
              />
            </div>
          )}
        </div>
        {/* ===title && description=== */}
      </div>
    </div>
  );
};
