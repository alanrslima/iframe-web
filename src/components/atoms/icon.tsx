import { ReactNode } from "react";
import { IoMdStar, IoMdSearch } from "react-icons/io";

export type IconNames = "star" | "search";

export type IconProps = {
  name: IconNames;
  size?: number;
};

const iconMapper: { [key in IconNames]: ReactNode } = {
  star: <IoMdStar />,
  search: <IoMdSearch />,
};

export function Icon(props: IconProps) {
  return iconMapper[props.name];
}
