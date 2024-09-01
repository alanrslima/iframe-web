import { Avatar } from "../atoms";

export function Card() {
  return (
    <a
      href="#"
      className="rounded-lg transition-shadow hover:shadow-2xl border-black border-2 hover:border-neutral-700 hover:shadow-neutral-500 bg-neutral-800 overflow-hidden"
    >
      <img
        className="w-full h-44 "
        src="https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="background"
      />

      <div className="text-sm p-4 pt-16 relative">
        <div className="absolute -top-14 border-neutral-800 border-4 rounded-full">
          <Avatar />
        </div>
        <strong className="text-lg">John Doe</strong>
        <p className="text-neutral-400 line-clamp-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic officia
          ipsa ullam fugit! Optio hic sit et veniam quidem ea voluptatum, totam
          quasi saepe vel provident, velit repellat recusandae culpa.
        </p>
        <span>Arquitetura | Evento</span>
        <p>
          Pacotes de <strong>R$ 420 até R$ 1.520</strong>
        </p>
      </div>
    </a>
  );
}
