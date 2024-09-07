import clsx from "clsx";

export type SelectButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  selected?: boolean;
};

export function SelectButton({ selected, ...props }: SelectButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        "bg-on-surface-disabled p-0.5 transition-opacity rounded-lg",
        {
          "bg-gradient-to-r from-blue-500 to-red-500": selected,
        }
      )}
    >
      <div className="flex flex-1 justify-center bg-surface p-4 rounded-lg">
        <div className="flex flex-col w-full">
          <strong className="text-start">Pacote Premium</strong>
          <span className="text-start text-sm text-on-surface-secondary">
            Ver detalhes
          </span>
        </div>
        <strong className="">R$832</strong>
      </div>
    </button>
  );
}
