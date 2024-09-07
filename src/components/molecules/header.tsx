import { Avatar, Button } from "../atoms";

export function Header() {
  return (
    <header className="h-24 z-50 shadow-2xl shadow-neutral-900 sticky top-0 px-24 justify-between w-full flex items-center bg-surface">
      <div />
      <div>
        <Button leftIcon="search" rounded text="Buscar" />
      </div>
      <div className="flex items-center gap-4">
        <Button size="sm" text="Criar perfil de fotógrafo" variant="ghost" />
        <Avatar
          size="xs"
          src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
      </div>
    </header>
  );
}
