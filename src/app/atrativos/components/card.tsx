import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { DM_Serif_Text } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { twMerge } from "tailwind-merge";

const font = DM_Serif_Text({
  subsets: ["latin", "latin-ext"],
  weight: "400",
});

export interface CardProps {
  image: string;
  type: string;
  title: string;
  description: string;
  link: string;
}

const Card: FC<CardProps> = ({
  image = "https://images.unsplash.com/photo-1596573677494-accc8fbe89e8?auto=format&fit=crop&q=80&w=1168&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  type,
  title,
  description,
  link,
}) => {
  return (
    <div className='flex flex-col gap-4 bg-white rounded-xl p-4 justify-between'>
      <div className='space-y-2'>
        <AspectRatio ratio={16 / 9}>
          <Image
            src={image}
            alt='Imagem Atrativo'
            fill
            className='rounded-xl rounded-ss-3xl rounded-br-3xl  object-cover object-center'
          />
        </AspectRatio>

        <div className='text-gray-800 space-y-2'>
          <span className='rounded-full px-2 py-0.5 text-green-800 border border-1 border-green-800 font-bold text-xs'>
            {type}
          </span>
          <h1 className={twMerge(font.className, "text-lg")}>{title}</h1>
          <p className='text-sm'>{description}</p>
        </div>
      </div>

      <Button size={"sm"} className='w-fit' asChild>
        <Link href={link}>Conhecer</Link>
      </Button>
    </div>
  );
};

export default Card;
