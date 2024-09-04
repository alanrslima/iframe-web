import { faker } from "@faker-js/faker";
import { Header, ImageCard, Outdoor, Post } from "../molecules";
import { Avatar, Button } from "../atoms";

function createRandomImages() {
  return faker.image.url();
}

const images = faker.helpers.multiple(createRandomImages, {
  count: 1,
});

export function ShowCaseTemplate() {
  return (
    <main className="flex flex-col">
      <Header />
      <div className="flex flex-col max-w-[1280px] gap-4 w-full py-6 mx-auto">
        <Outdoor images={images} />
        <div className="grid gap-4 grid-cols-3">
          <section className="col-span-2 gap-4 flex flex-col">
            <div className="items-center flex p-6 bg-surface rounded-md gap-4 ">
              <Avatar src={images[0]} size="xl" />
              <div className="gap-2 flex  flex-col">
                <h2 className="text-2xl text-on-surface-primary font-semibold">
                  John Dow
                </h2>
                <p className="text-sm text-on-surface-secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium, odio accusamus quas quam voluptatum rem pariatur
                  odit amet. Sapiente eligendi autem officiis. Quasi praesentium
                  molestias odit tenetur modi deleniti vel?
                </p>
              </div>
            </div>
            <div className="flex p-6 bg-surface gap-4 rounded-md">
              <h2 className="text-2xl text-on-surface-primary font-semibold">
                Especialidades
              </h2>
            </div>
            <div className="flex flex-col p-6 bg-surface gap-4 rounded-md">
              <h2 className="text-2xl text-on-surface-primary font-semibold">
                Portifólio
              </h2>
              <div className="flex gap-4">
                <ImageCard />
                <ImageCard />
                <ImageCard />
                <ImageCard />
              </div>
            </div>
          </section>

          <section className="col-span-1 p-6 self-start rounded-md bg-surface">
            <Button full text="Agendar" />
          </section>
        </div>
        <div className="flex p-6 flex-col bg-surface gap-4 rounded-md">
          <h2 className="text-2xl text-on-surface-primary font-semibold">
            Avaliações dos clientes
          </h2>
          <div className="grid grid-cols-2 gap-6">
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col py-6 px-6 md:px-24 gap-6"></div> */}
    </main>
  );
}
