export type OutdoorProps = {
  images: string[];
};

export function Outdoor(props: OutdoorProps) {
  return (
    <div className="w-full rounded-xl flex overflow-hidden h-[50dvh]">
      {props.images.map((image) => (
        <img className="w-full object-cover h-full " key={image} src={image} />
      ))}
    </div>
  );
}
