import { cn } from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const DISTANCE = 120;

const TRANSITION_ENTER = {
   duration: 0.64,
   ease: [0.43, 0.13, 0.23, 0.96],
};
const TRANSITION_EXIT = {
   duration: 0.48,
   ease: [0.43, 0.13, 0.23, 0.96],
};
const varFadeIn = {
   initial: { opacity: 0 },
   animate: { opacity: 1, transition: TRANSITION_ENTER },
   exit: { opacity: 0, transition: TRANSITION_EXIT },
};

const varFadeInLeft = {
   initial: { x: -DISTANCE, opacity: 0 },
   animate: { x: 0, opacity: 1, transition: TRANSITION_ENTER },
   exit: { x: -DISTANCE, opacity: 0, transition: TRANSITION_EXIT },
};

const varFadeInRight = {
   initial: { x: DISTANCE, opacity: 0 },
   animate: { x: 0, opacity: 1, transition: TRANSITION_ENTER },
   exit: { x: DISTANCE, opacity: 0, transition: TRANSITION_EXIT },
};

const TRANSITION_ENTER_OUT = {
   duration: 0.64,
   ease: [0.43, 0.13, 0.23, 0.96],
};
const TRANSITION_EXIT_OUT = {
   duration: 0.48,
   ease: [0.43, 0.13, 0.23, 0.96],
};
const varFadeOut = {
   initial: { opacity: 1 },
   animate: { opacity: 0, transition: TRANSITION_ENTER_OUT },
   exit: { opacity: 1, transition: TRANSITION_EXIT_OUT },
};

const varFadeOutLeft = {
   initial: { x: 0, opacity: 1 },
   animate: { x: -DISTANCE, opacity: 0, transition: TRANSITION_ENTER },
   exit: { x: 0, opacity: 1, transition: TRANSITION_EXIT },
};

const varFadeOutRight = {
   initial: { x: 0, opacity: 1 },
   animate: { x: DISTANCE, opacity: 0, transition: TRANSITION_ENTER },
   exit: { x: 0, opacity: 1, transition: TRANSITION_EXIT },
};

const FadeText = () => {
   const [text, setText] = useState(0);
   const [isVisible, setIsVisible] = useState(true);
   const tex = [
      {
         big1: "Growth",
         con: "for your",
         big2: "Business",
      },
      {
         big1: "Accelerate",
         con: "your",
         big2: "Agency",
      },
      {
         big1: "Creative",
         con: "for",
         big2: "Everyone",
      },
   ];

   useEffect(() => {
      let currentIndex = 0;
      const intervalId = setInterval(() => {
         currentIndex = (currentIndex + 1) % tex.length;
         setText(currentIndex);
         setIsVisible(true);
      }, 4000);

      return () => {
         clearInterval(intervalId);
      };
   }, []);

   const textColor = ["text-danger", "text-secondary", "text-success"];

   return (
      <div className="flex h-full">
         <div className="w-3/5 ">
            <AnimatePresence mode="wait">
               {tex.map((item, index) => {
                  return (
                     index === text && (
                        <motion.div
                           initial={{ x: 120, opacity: 0 }}
                           animate={{
                              x: 20,
                              opacity: 1,
                           }}
                           transition={{
                              duration: 4,
                           }}
                           exit={{ x: 120, opacity: 0 }}
                           key={index}
                        >
                           <div className="flex">
                              <h1 className="text-[3rem]">{item.big1}</h1>
                              <span className="self-end block text-2xl ml-2">
                                 {item.con}
                              </span>
                           </div>
                           <h1 className={cn("text-[4rem]", textColor[index])}>
                              {item.big2}
                           </h1>
                        </motion.div>
                     )
                  );
               })}
            </AnimatePresence>
         </div>
      </div>
   );
};

export default FadeText;
