import clsx from "clsx";

export type TabItemProps = {
  id: string;
  image?: string;
  text: string;
  isSelected?: boolean;
};

export function TabItem(props: TabItemProps) {
  return (
    <a
      href="#"
      className="flex flex-col items-center transition-opacity gap-2 hover:opacity-60"
    >
      {props.image && (
        <div
          className={clsx("rounded-full p-1", {
            "bg-gradient-to-br from-blue-500 to-red-600": props.isSelected,
          })}
        >
          <img
            src={props.image}
            className="min-h-14 h-14 min-w-14 w-14 rounded-full object-cover"
            alt="image"
          />
        </div>
      )}
      <span
        className={clsx("text-sm text-neutral-400", {
          "text-neutral-100": props.isSelected,
        })}
      >
        {props.text}
      </span>
    </a>
  );
}
