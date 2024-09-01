export type AvatarProps = {
  src: string;
};

export function Avatar(props: AvatarProps) {
  return (
    <img
      className="w-24 h-24 rounded-full object-cover"
      src={props.src}
      alt="Profile"
    />
  );
}
