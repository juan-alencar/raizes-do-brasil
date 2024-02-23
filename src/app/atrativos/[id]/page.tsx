import Footer from "@/components/footer";
import Header from "@/components/header";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ArrowRight, Info, Mail, MapPin, Phone, Star } from "lucide-react";
import { DM_Serif_Display } from "next/font/google";
import Image from "next/image";
import { FC } from "react";
import { twMerge } from "tailwind-merge";
const font = DM_Serif_Display({
  subsets: ["latin", "latin-ext"],
  weight: "400",
});

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
interface AtractivePageProps {}

const AtractivePage: FC<AtractivePageProps> = () => {
  return (
    <>
      <main className='flex flex-col gap-16'>
        <section className='bg-white pb-12 space-y-4'>
          <Header />
          <div className='container mx-auto flex justify-between px-4 md:px-0'>
            <div className='w-full md:w-3/5 flex flex-col justify-center gap-4 items-start'>
              <p className='text-xl 2xl:text-2xl text-gray-400'>Timbó-SC</p>
              <h1
                className={twMerge([
                  font.className,
                  "text-5xl md:text-6xl lg:max-w-[50%] 2xl:max-w-[50%] 2xl:text-8xl text-gray-900",
                ])}
              >
                Timbó Park Hotel
              </h1>
              <button className='text-green-700 font-medium text-lg flex gap-2 items-center hover:bg-green-50 px-4 py-1 -ml-4 rounded-full transition'>
                Visitar site <ArrowRight width={16} height={16} />
              </button>
            </div>
            <div className='w-2/5 hidden lg:inline-block'>
              <AspectRatio ratio={16 / 9}>
                <Image
                  src={
                    "https://images.unsplash.com/photo-1596573677494-accc8fbe89e8?auto=format&fit=crop&q=80&w=1168&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                  alt='Imagem Atrativo'
                  fill
                  className='rounded-xl rounded-ss-3xl rounded-br-3xl object-cover object-center'
                />
              </AspectRatio>
            </div>
          </div>
        </section>

        <section className='container mx-auto flex flex-col md:flex-row justify-between gap-8 px-4 md:px-0'>
          <iframe
            width='702'
            height='300'
            src='https://www.youtube.com/embed/C-DdRVCw_-Y'
            title='Timbó Park Hotel'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen
            className='w-full md:w-2/5'
          ></iframe>
          <div className='w-full md:w-3/5 space-y-2'>
            <h2 className={twMerge([font.className, "text-xl "])}>Descrição</h2>
            <p>
              O Timbó Park Hotel tem a proposta de criar uma experiência
              intimista e agradável através da união entre o conforto de sua
              estrutura e o próximo contato com a natureza. O hotel prioriza os
              atrativos da região como a cultura e gastronomia ítalo germânica,
              o pólo de cervejarias artesanais e o roteiro de cicloturismo do
              Vale Europeu.
            </p>
          </div>
        </section>

        <section className='container mx-auto space-y-2 px-4 md:px-0'>
          <h2 className={twMerge([font.className, "text-xl "])}>Observações</h2>
          <ul className='space-y-2'>
            <li className='flex gap-2 items-center '>
              <Info width={16} height={16} className='text-green-700' />
              As acomodações são divididas em apartamentos standard, luxo e
              suíte
            </li>
            <li className='flex gap-2 items-center'>
              <Info width={16} height={16} className='text-green-700' />
              Todos os quartos são amplos e confortáveis, fazendo de sua estadia
              algo prazeroso e especial
            </li>
            <li className='flex gap-2 items-center'>
              <Info width={16} height={16} className='text-green-700' />A
              decoração discreta e, ao mesmo tempo, elegante foi pensada para
              proporcionar momentos de tranquilidade e descanso
            </li>
            <li className='flex gap-2 items-center'>
              <Info width={16} height={16} className='text-green-700' />
              Todos os quartos são equipados com TV, wi-fi, frigobar e
              ar-condicionado
            </li>
          </ul>
        </section>

        <section className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-0'>
          <div className='bg-white flex flex-col gap-2 rounded-xl p-4'>
            <p className={twMerge([font.className, "text-xl "])}>Avaliações</p>
            <div className='flex gap-2 items-center'>
              <Star width={16} height={16} className='text-green-700' />
              <span>4.5/5</span>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <button className='text-green-700 font-medium text-sm w-fit flex gap-2 items-center hover:bg-green-50 px-2 py-1 -ml-2 rounded-full transition'>
                  Deixar sua avaliação <ArrowRight width={16} height={16} />
                </button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                    <p className={twMerge([font.className, "text-xl "])}>
                      Deixe sua avaliação
                    </p>
                  </DialogTitle>
                  <DialogDescription>
                    Compartilhe sua opinião sobre esse destino!
                  </DialogDescription>
                </DialogHeader>
                <div className='flex flex-col gap-4'>
                  <div className='flex gap-2 text-green-700'>
                    <Star className='hover:fill-primary' />
                    <Star className='hover:fill-primary' />
                    <Star className='hover:fill-primary' />
                    <Star className='hover:fill-primary' />
                    <Star className='hover:fill-primary' />
                  </div>
                  <p className='text-gray-400'>O que você recomenda?</p>
                  <div className='flex gap-2'>
                    <Button variant={"outline"}>Ambiente</Button>
                    <Button variant={"outline"}>Culinária</Button>
                    <Button variant={"outline"}>Hospitalidade</Button>
                    <Button variant={"outline"}>Destino</Button>
                  </div>
                  <Input placeholder='Deixe seu comentário' />
                </div>
                <DialogFooter>
                  <Button>Avaliar</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
          <div className='bg-white flex flex-col gap-2 rounded-xl p-4'>
            <p className={twMerge([font.className, "text-xl "])}>Endereço</p>
            <div className='flex gap-2'>
              <MapPin width={16} height={16} className='text-green-700' />
              <div>
                <p className='leading-none'> Rua Blumenau, 141 - Centro</p>
                <small>Timbó - Santa Catarina</small>
              </div>
            </div>
          </div>
          <div className='bg-white flex flex-col gap-2 rounded-xl p-4'>
            <p className={twMerge([font.className, "text-xl "])}>Contato</p>
            <ol>
              <li className='flex gap-2 items-center'>
                <Mail width={16} height={16} className='text-green-700' />
                reservas@timbopark.com.br
              </li>
              <li className='flex gap-2 items-center'>
                <Phone width={16} height={16} className='text-green-700' /> 47
                3281-0700
              </li>
            </ol>
          </div>
        </section>

        <section className='container mx-auto pb-16 px-4 md:px-0'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3560.3384941590925!2d-49.277122125529395!3d-26.82918408971711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDQ5JzQ1LjEiUyA0OcKwMTYnMjguNCJX!5e0!3m2!1spt-BR!2sbr!4v1698377289103!5m2!1spt-BR!2sbr'
            width='600'
            height='450'
            style={{ border: 0 }}
            allowFullScreen
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
            className='w-full rounded-lg'
          ></iframe>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AtractivePage;
