import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import React, { Dispatch, SetStateAction, useState } from "react";
import ArrowLeft from "../Icons/ArrowLeft";
import ArrowRight from "../Icons/ArrowRight";

const { REACT_APP_BASE_URL } = process.env;

interface CarouselProps {
   data: Array<any>;
   index: number;
   setIndex: Dispatch<SetStateAction<number>>;
   render?: (props: any, index: number) => JSX.Element;
}

export default function Carousel({
   data,
   index,
   setIndex,
   render,
}: CarouselProps) {
   const [onHover, setOnHover] = useState(false);
   return (
      <MotionConfig transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}>
         <div
            className="h-full"
            onMouseEnter={() => setOnHover(true)}
            onMouseLeave={() => setOnHover(false)}
         >
            <div className="mx-auto flex h-full max-w-7xl flex-col justify-center">
               <div className="relative overflow-hidden">
                  <div className="flex h-full ">
                     {data.map((item, i) => {
                        return (
                           <motion.div
                              animate={{ x: `-${index * 100}%` }}
                              className="gap-2"
                              key={i}
                           >
                              <div className="w-[860px]">
                                 {render ? (
                                    render(item, i)
                                 ) : (
                                    <>{item.itemTitle}</>
                                 )}
                              </div>
                           </motion.div>
                        );
                     })}
                  </div>
                  <AnimatePresence initial={false}>
                     {index > 0 && onHover && (
                        <motion.button
                           initial={{ opacity: 0 }}
                           animate={{ opacity: 0.7 }}
                           exit={{ opacity: 0, pointerEvents: "none" }}
                           whileHover={{ opacity: 1 }}
                           className="absolute left-2 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-foreground"
                           onClick={() => setIndex(index - 1)}
                        >
                           <ArrowLeft />
                        </motion.button>
                     )}
                  </AnimatePresence>

                  <AnimatePresence initial={false}>
                     {index + 1 < data.length && onHover && (
                        <motion.button
                           initial={{ opacity: 0 }}
                           animate={{ opacity: 0.7 }}
                           exit={{ opacity: 0, pointerEvents: "none" }}
                           whileHover={{ opacity: 1 }}
                           className="absolute right-2 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-foreground"
                           onClick={() => setIndex(index + 1)}
                        >
                           <ArrowRight />
                        </motion.button>
                     )}
                  </AnimatePresence>
               </div>
            </div>
         </div>
      </MotionConfig>
   );
}
