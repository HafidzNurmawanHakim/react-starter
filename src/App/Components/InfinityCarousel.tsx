import { Image } from "@nextui-org/react";
import { animate, useMotionValue, motion, MotionValue } from "framer-motion";
import React, { useEffect } from "react";
import useMeasure from "react-use-measure";

const data = [
   {
      image: "/images/javascript.png",
      desc: "Javascript",
   },
   {
      image: "/images/typescript.png",
      desc: "Typescript",
   },
   {
      image: "/images/react.png",
      desc: "React",
   },
   {
      image: "/svg/next.svg",
      desc: "Next",
   },
   {
      image: "/images/css.png",
      desc: "CSS",
   },
   {
      image: "/svg/sass.svg",
      desc: "Sass",
   },
   {
      image: "/images/tailwind.png",
      desc: "Tailwind",
   },
   {
      image: "/images/bootstrap.png",
      desc: "Bootstrap",
   },
   {
      image: "/images/antd.png",
      desc: "Ant Design",
   },
   {
      image: "/images/express.png",
      desc: "Express",
   },
   {
      image: "/images/nestjs.png",
      desc: "Nest Js",
   },
   {
      image: "/images/python.png",
      desc: "Python",
   },
   {
      image: "/images/django.png",
      desc: "Django",
   },
   {
      image: "/images/github.png",
      desc: "Git",
   },
   {
      image: "/images/postman.png",
      desc: "Postman",
   },
];

const InfinityCarousel = () => {
   return (
      <div className="relative w-full mt-10 ml-4 overflow-hidden">
         {/* Wrapping div for seamless looping */}
         <motion.div
            className="flex gap-10"
            animate={{
               x: ["0%", "-100%"],
               transition: {
                  ease: "linear",
                  duration: 30,
                  repeat: Infinity,
               },
            }}
         >
            {[...data, ...data].map((slide, index) => (
               <div
                  key={index}
                  className="flex-shrink-0"
                  style={{ width: `${100 / data.length}%` }}
               >
                  <div className="flex items-center justify-center h-full">
                     <Image src={slide.image} alt="icons" className="w-10" />
                  </div>
               </div>
            ))}
         </motion.div>
      </div>
   );
};

export default InfinityCarousel;
