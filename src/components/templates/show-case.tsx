import { Header, Tab } from "../molecules";
import { CardsGrid } from "../organisms/cards-grid";
import { faker } from "@faker-js/faker";

function createRandomCard() {
  return {
    title: faker.person.fullName(),
    background: faker.image.url(),
    profile: faker.image.avatarGitHub(),
    isLoading: faker.datatype.boolean(),
  };
}

function createRandomTab() {
  return {
    id: faker.string.uuid(),
    text: faker.word.adjective(),
    image: faker.image.url(),
  };
}

const cards = faker.helpers.multiple(createRandomCard, {
  count: 30,
});

const tabs = faker.helpers.multiple(createRandomTab, {
  count: 16,
});

export function ShowCase() {
  return (
    <main className="flex flex-col">
      <Header />
      <div className="flex flex-col py-6 px-6 md:px-24 gap-6">
        <Tab value={tabs[0].id} tabs={tabs} />
        <CardsGrid cards={cards} />
      </div>
    </main>
  );
}
