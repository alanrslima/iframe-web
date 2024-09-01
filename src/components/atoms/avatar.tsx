import clsx from "clsx";

export type AvatarProps = {
  src: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
};

export function Avatar({ size = "lg", src }: AvatarProps) {
  return (
    <img
      className={clsx("rounded-full object-cover", {
        "w-12 h-12": size === "xs",
        "w-16 h-16": size === "sm",
        "w-20 h-20": size === "md",
        "w-24 h-24": size === "lg",
        "w-28 h-28": size === "xl",
      })}
      src={src}
      alt="Profile"
    />
  );
}
