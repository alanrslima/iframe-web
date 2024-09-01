import { Card, CardProps } from "../molecules";

export type CardsGridProps = {
  cards: CardProps[];
};

export function CardsGrid(props: CardsGridProps) {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
      {props?.cards?.map((card, index) => (
        <Card key={card.title + index} {...card} />
      ))}
    </div>
  );
}
