import React, { useEffect, useState } from "react";

const NumberCounter = () => {
   const [num, setNum] = useState(0);
   useEffect(() => {
      const secon = 4000;
      const duration = Math.floor(4000 / 99);
      let number = 0;
      const interval = setInterval(() => {
         number += 1;
         setNum(number);
         if (number === 99) clearInterval(interval);
      }, duration);

      return () => clearInterval(interval);
   }, []);
   return <div>{num}</div>;
};

export default NumberCounter;
