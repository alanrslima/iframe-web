export function ImageCard() {
  return (
    <div className="min-h-80 group cursor-pointer relative w-full rounded-lg overflow-hidden">
      <img
        className="object-cover h-full w-full"
        src="https://images.pexels.com/photos/1955134/pexels-photo-1955134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt=""
      />
      <div className="opacity-0 flex-col flex group-hover:opacity-100 duration-500 transition-opacity justify-end absolute bg-gradient-to-t from-black to-transparent bottom-0 top-0 left-0 right-0 p-6">
        <strong className="text-on-surface-primary">Animais fantásticos</strong>
        <span className="text-on-surface-secondary text-sm">
          Animais no frio do Ártico
        </span>
      </div>
    </div>
  );
}
