import { Icon, IconNames } from "./icon";

type ButtonVariants = "solid" | "link" | "ghost";

export type ButtonProps = {
  leftIcon?: IconNames;
  variant?: ButtonVariants;
};

export function Button() {
  return (
    <button className="flex items-center font-semibold px-6 py-2 rounded-full gap-2 bg-gradient-to-r from-blue-500 to-red-500">
      <Icon name="search" />
      Buscar
    </button>
  );
}
