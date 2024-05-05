import * as React from "react";
import { SVGProps } from "react";
const ArrowRight = (props: SVGProps<SVGSVGElement>) => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
   >
      <path
         stroke="#FF8A65"
         strokeLinecap="round"
         strokeLinejoin="round"
         strokeMiterlimit={10}
         strokeWidth={1.5}
         d="M6 12V9.33c0-3.31 2.35-4.67 5.22-3.01l2.31 1.34L15.84 9c2.87 1.66 2.87 4.37 0 6.03l-2.31 1.34-2.31 1.34C8.35 19.34 6 17.99 6 14.67V12z"
      />
   </svg>
);
export default ArrowRight;
