import { Avatar } from "../atoms";

export function Item() {
  return (
    <div className="flex gap-4">
      <Avatar
        size="sm"
        src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      <div>
        <strong className="text-on-surface-primary">Paisagem</strong>
        <p className="text-sm text-on-surface-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, autem
          impedit suscipit, voluptas nisi vel beatae maxime cum doloribus velit
          tempore sint culpa porro eligendi illum veritatis, eaque quod
          obcaecati?
        </p>
      </div>
    </div>
  );
}
