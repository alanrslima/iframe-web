import { ReactNode } from "react";
import { IoMdStar } from "react-icons/io";

export type IconName = "star";

export type IconProps = {
  name: IconName;
  size?: number;
};

const iconMapper: { [key in IconName]: ReactNode } = {
  star: <IoMdStar />,
};

export function Icon(props: IconProps) {
  return iconMapper[props.name];
}
