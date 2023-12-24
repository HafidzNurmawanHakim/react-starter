import * as React from "react";
import { SVGProps } from "react";
const MinusIcon = (props: SVGProps<SVGSVGElement>) => (
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
		<path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
	</svg>
);
export default MinusIcon;
