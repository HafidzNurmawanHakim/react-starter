import * as React from "react";
import { SVGProps } from "react";
const LeftChevron = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		stroke="currentColor"
		strokeWidth={1.5}
		className="w-6 h-6"
		viewBox="0 0 24 24"
		width="1em"
		height="1em"
		{...props}
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
		/>
	</svg>
);
export default LeftChevron;
