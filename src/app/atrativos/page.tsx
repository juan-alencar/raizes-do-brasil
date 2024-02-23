import Header from "@/components/header";

import HeaderImage from "@/assets/header-image.jpg";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Filter, Globe2 } from "lucide-react";
import { DM_Serif_Display } from "next/font/google";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import Card, { CardProps } from "./components/card";
const font = DM_Serif_Display({
  subsets: ["latin", "latin-ext"],
  weight: "400",
});

const cards: CardProps[] = [
  {
    type: "Serviço",
    description:
      "Fábrica artesanal de cachaça desde 1940. Fundada por Benvenutto Tessarollo, descendente de imigrantes italianos.",
    title: "Cachaças Tessarollo",
    image:
      "https://images.unsplash.com/photo-1596573677494-accc8fbe89e8?auto=format&fit=crop&q=80&w=1168&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "atrativos/1",
  },
  {
    type: "Ponto de Interesse",
    title: "Cachoeira Negherbon",
    description:
      "Bela cachoeira com piscina natural para banho. Localizada a 9 km do centro de Doutor Pedrinho.",
    image:
      "https://images.unsplash.com/photo-1596573677494-accc8fbe89e8?auto=format&fit=crop&q=80&w=1168&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "atrativos/1",
  },
  {
    type: "Serviço",
    description:
      "Fábrica artesanal de cachaça desde 1940. Fundada por Benvenutto Tessarollo, descendente de imigrantes italianos.",
    title: "Cachaças Tessarollo",
    image:
      "https://images.unsplash.com/photo-1596573677494-accc8fbe89e8?auto=format&fit=crop&q=80&w=1168&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "atrativos/1",
  },
];

const AtrativosTuristicos = () => {
  return (
    <main className='flex flex-col relative bg-gray-50 min-h-screen pt-8 gap-8'>
      <Image
        className='absolute top-0 max-h-[80vh] object-cover object-center  brightness-50'
        src={HeaderImage}
        alt={"imagem"}
        fill
      />

      <section
        className='container mx-auto flex flex-col h-[80vh] max-h-[80vh] z-10 px-4'
        style={{ height: "calc(80vh - 2rem)" }}
      >
        <Header variant={"float"} />
        <div className='h-full flex flex-col justify-center'>
          <span className='text-white  2xl:text-2xl'>Patrimônio Turístico</span>
          <h1
            className={twMerge([
              font.className,
              "text-5xl md:text-6xl text-white max-w-[30%] 2xl:max-w-[40%] 2xl:text-8xl",
            ])}
          >
            Vale Europeu Catarinense
          </h1>
        </div>
      </section>

      <section className='container bg-white p-4 rounded-lg mx-auto space-y-2'>
        <div className='flex justify-between'>
          <div className='flex gap-1 font-medium items-center text-gray-600'>
            <Filter width={16} height={16} className='text-green-700' />
            <p>Filtrar</p>
          </div>
          <button
            className='flex gap-1 font-medium items-center text-gray-400 text-sm py-1 px-2 rounded-md
          hover:bg-gray-100 hover:text-gray-700'
          >
            <Globe2 width={16} height={16} /> <p>Visualizar no Mapa</p>
          </button>
        </div>
        <div className='flex flex-col-reverse md:flex-row gap-2 justify-between'>
          <div className='flex gap-2 flex-wrap'>
            <Button variant={"secondary"}>Atrativos</Button>
            <Button variant={"secondary"}>Serviços</Button>
            <Button variant={"secondary"}>Pontos de Interesse</Button>
          </div>
          <div>
            <Input placeholder='Buscar Atratativo' />
          </div>
        </div>
      </section>

      <section className='container mx-auto space-y-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
          {cards.map(({ title, type, description, image, link }, index) => (
            <Card
              key={index}
              type={type}
              description={description}
              title={title}
              image={image}
              link={link}
            />
          ))}
        </div>
        <button className='text-green-700 font-medium text-sm flex gap-2 items-center hover:bg-green-100 p-2 rounded-full'>
          Ver Mais <ArrowRight width={16} height={16} />
        </button>
      </section>

      <Footer />
    </main>
  );
};

export default AtrativosTuristicos;
