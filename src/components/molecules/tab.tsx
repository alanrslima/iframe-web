import { TabItem, TabItemProps } from "../atoms";

export type TabProps = {
  tabs: TabItemProps[];
  value: string;
  onChange?: (value: string) => void;
};

export function Tab(props: TabProps) {
  return (
    <div className="flex gap-4 overflow-hidden">
      {props.tabs?.map((tab, index) => (
        <TabItem
          key={tab.text + index}
          {...tab}
          isSelected={tab.id === props.value}
        />
      ))}
    </div>
  );
}
