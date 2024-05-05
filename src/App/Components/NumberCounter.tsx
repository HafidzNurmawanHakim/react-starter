import React, { FC, useEffect, useState } from "react";

const NumberCounter: FC<{ title?: string; count: number; speed?: number }> = ({
   title,
   count,
   speed,
}) => {
   const [num, setNum] = useState(0);
   useEffect(() => {
      const secon = speed || 4000;
      const duration = Math.floor(secon / count);
      console.log({ duration });
      let number = 0;
      const interval = setInterval(() => {
         number += 1;
         setNum(number);
         if (number === count) clearInterval(interval);
      }, duration);

      return () => clearInterval(interval);
   }, []);
   return (
      <div className="flex flex-col w-full justify-center items-center h-20">
         <span className="text-4xl text-fontHeader">{num}+</span>
         <span className="text-xl text-fontBase">{title}</span>
      </div>
   );
};

export default NumberCounter;
