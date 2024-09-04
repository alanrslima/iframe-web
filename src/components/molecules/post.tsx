import { Avatar } from "../atoms";

export function Post() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-4">
        <Avatar
          size="xs"
          src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
        <div className="flex flex-col">
          <strong>Willian House</strong>
          <span className="text-sm">Washington, EUA</span>
        </div>
      </div>

      <p className="text-sm text-on-surface-secondary">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit ut
        cupiditate, totam neque eius minus quam quod voluptatibus ipsa molestiae
        est error illo corporis mollitia quibusdam, corrupti obcaecati
        laboriosam maxime?
      </p>
    </div>
  );
}
