import * as React from "react";
import { SVGProps } from "react";
const ArrowLeft = (props: SVGProps<SVGSVGElement>) => (
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
         d="M18 12v2.67c0 3.31-2.35 4.67-5.22 3.01l-2.31-1.34L8.16 15c-2.87-1.66-2.87-4.37 0-6.03l2.31-1.34 2.31-1.34C15.65 4.66 18 6.01 18 9.33V12z"
      />
   </svg>
);
export default ArrowLeft;
