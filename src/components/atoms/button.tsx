import clsx from "clsx";
import { Icon, IconNames } from "./icon";

type ButtonVariants = "solid" | "link" | "ghost";

type ButtonSizes = "xs" | "sm" | "md" | "lg";

export type ButtonProps = {
  leftIcon?: IconNames;
  variant?: ButtonVariants;
  size?: ButtonSizes;
  text: string;
  full?: boolean;
  rounded?: boolean;
};

export function Button({
  leftIcon,
  size = "md",
  text,
  variant = "solid",
  full,
  rounded,
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "flex items-center justify-center font-semibold gap-2 px-6 transition-all",
        { "h-8 text-xs": size === "xs" },
        { "h-10 text-sm": size === "sm" },
        { "h-12 text-md": size === "md" },
        { "h-14 text-lg": size === "lg" },
        { "hover:underline": variant === "link" },
        {
          "bg-gradient-to-r from-blue-500 hover:opacity-60 to-red-500 ":
            variant === "solid",
        },
        { "hover:bg-neutral-700 rounded-md": variant === "ghost" },
        { "w-full": full === true },
        { "rounded-full": rounded },
        { "rounded-md": !rounded }
      )}
    >
      {leftIcon && <Icon name="search" />}
      {text}
    </button>
  );
}
