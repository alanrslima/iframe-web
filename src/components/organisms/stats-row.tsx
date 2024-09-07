import { Stat } from "../molecules/stat";

export function StatsRow() {
  return (
    <div className="grid gap-4 grid-cols-6 ">
      <Stat primary />
      <Stat />
      <Stat />
      <Stat />
      <Stat />
      <Stat />
    </div>
  );
}
