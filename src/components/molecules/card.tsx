import { Avatar, Icon } from "../atoms";

export type CardProps = {
  title: string;
  background: string;
  profile: string;
  isLoading?: boolean;
};

export function Card(props: CardProps) {
  if (props.isLoading) return <CardLoading />;

  return (
    <a
      href="#"
      className="rounded-lg border-2 border-surface hover:border-on-surface-disabled transition-all hover:shadow-2xl hover:shadow-neutral-600 bg-surface overflow-hidden"
    >
      <img
        className="w-full h-44 object-cover"
        src={props.background}
        alt="background"
      />

      <div className="text-sm p-4 pt-16 relative">
        <div className="absolute shadow-lg shadow-neutral-900 -top-16 p-1 rounded-full bg-neutral-800">
          <Avatar src={props.profile} />
        </div>
        <div className="flex justify-between items-center">
          <strong className="text-lg">{props.title}</strong>
          <div className="flex items-center gap-1">
            <Icon name="star" />
            <strong className="text-sm">4,96</strong>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-red line-clamp-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic
            officia ipsa ullam fugit! Optio hic sit et veniam quidem ea
            voluptatum, totam quasi saepe vel provident, velit repellat
            recusandae culpa.
          </p>
          <span>Arquitetura | Evento</span>
          <p>
            Pacotes de <strong>R$ 420 até R$ 1.520</strong>
          </p>
        </div>
      </div>
    </a>
  );
}

function CardLoading() {
  return (
    <div className="rounded-lg transition-shadow bg-surface overflow-hidden">
      <div className="animate-pulse">
        <div className="w-full h-44  bg-on-surface-disabled object-cover" />
        <div className="text-sm p-4 pt-16 relative">
          <div className="bg-on-surface-disabled rounded-md h-5 w-1/2" />
          <div className="bg-on-surface-disabled rounded-md h-3 mt-3 w-full" />
          <div className="bg-on-surface-disabled rounded-md  h-3 mt-2 w-full" />
          <div className="bg-on-surface-disabled rounded-md  h-3 mt-2 w-1/2" />
          <div className="bg-on-surface-disabled rounded-md  h-3 mt-2 w-2/3" />
        </div>
      </div>
    </div>
  );
}
