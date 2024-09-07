import clsx from "clsx";

export type StatProps = {
  primary?: boolean;
};

export function Stat(props: StatProps) {
  return (
    <div
      className={clsx("bg-black gap-10 p-6 flex flex-col rounded-lg", {
        "bg-gradient-to-br from-blue-500 to-red-500": props.primary,
      })}
    >
      <span>Profissionalismo</span>
      <strong className="text-3xl">4,6</strong>
    </div>
  );
}
