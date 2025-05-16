import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type TClaimRequest = {
  item: string;
  description: string;
  answers: string[];
};

export type TFormData = {
  [key: `answer-${number}`]: string;
  description: string;
};
export type ClaimRequestFn = () => void;
