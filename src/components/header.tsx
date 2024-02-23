import RaizesDoBrasil from "@/assets/raizes-do-brasil.svg";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cva, type VariantProps } from "class-variance-authority";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "./ui/button";

const headerVariants = cva(
  "container mx-auto flex items-center w-full justify-between gap-8 bg-white py-4",
  {
    variants: {
      variant: {
        default: "px-4 md:px-0",
        float: "px-8 rounded-2xl",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface HeaderProps extends VariantProps<typeof headerVariants> {
  className?: string;
}

const Header: FC<HeaderProps> = ({ className = "", variant }) => {
  return (
    <header className={twMerge(headerVariants({ variant, className }))}>
      <Image src={RaizesDoBrasil} alt='Logo' />
      <ol className='md:flex hidden gap-1'>
        <li>
          <Button variant={"ghost"} asChild>
            <Link href=''>Início</Link>
          </Button>
        </li>
        <li>
          <Button variant={"ghost"} asChild>
            <Link href=''>Cidades</Link>
          </Button>
        </li>
        <li>
          <Button variant={"ghost"} asChild>
            <Link href=''>Mapa</Link>
          </Button>
        </li>
        <li>
          <Button variant={"outline"} asChild>
            <Link href=''>Acessar</Link>
          </Button>
        </li>
      </ol>
      <Sheet>
        <SheetTrigger className='flex md:hidden' asChild>
          <Button size={"icon"} variant={"ghost"}>
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>
              <Image src={RaizesDoBrasil} alt='Logo' className='mx-auto mb-4' />
            </SheetTitle>
            <SheetDescription asChild>
              <ol className='flex flex-col gap-2'>
                <li>
                  <Button variant={"ghost"} asChild>
                    <Link className='w-full' href=''>
                      Início
                    </Link>
                  </Button>
                </li>
                <li>
                  <Button variant={"ghost"} asChild>
                    <Link className='w-full' href=''>
                      Cidades
                    </Link>
                  </Button>
                </li>
                <li>
                  <Button variant={"ghost"} asChild>
                    <Link className='w-full' href=''>
                      Mapa
                    </Link>
                  </Button>
                </li>
                <li>
                  <Button variant={"outline"} asChild>
                    <Link className='w-full' href=''>
                      Acessar
                    </Link>
                  </Button>
                </li>
              </ol>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;
