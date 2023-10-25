"use client";
import Image from "next/image";
import { FC } from "react";
import { twMerge } from "tailwind-merge";

import LoginImage from "@/assets/login-image.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import * as Checkbox from "@radix-ui/react-checkbox";
import { ArrowRight, CheckIcon, LogInIcon } from "lucide-react";
import RaizesDoBrasil from "../../../public/raizes-do-brasil.svg";

import { DM_Serif_Text } from "next/font/google";
const font = DM_Serif_Text({ subsets: ["latin", "latin-ext"], weight: "400" });

interface LoginProps {}

const Login: FC<LoginProps> = () => {
  return (
    <main className='grid grid-cols-12'>
      <section className='hidden md:inline md:col-span-4  xl:col-span-8'>
        <Image
          className='h-full object-cover'
          src={LoginImage}
          alt='Login Image'
        ></Image>
      </section>
      <section className='col-span-12 md:col-span-8 xl:col-span-4 flex flex-col justify-between min-h-screen h-full p-8 md:p-16'>
        <Image src={RaizesDoBrasil} alt='Logo' />
        <div>
          <h1 className={twMerge(["text-2xl mb-6", font.className])}>Acesso</h1>
          <div className='flex flex-col gap-4'>
            <div className='space-y-2'>
              <Input type='text' placeholder='Nome de usuário ou e-mail' />
              <Input type='password' placeholder='Senha' />
            </div>

            <div className='flex gap-2 items-center'>
              <Checkbox.Root
                id='remember'
                className='hover:bg-green-100 flex h-[16px] w-[16px] appearance-none items-center justify-center rounded-[4px] bg-white outline-none border border-green-700 data-[state=checked]:bg-green-700 transition'
                defaultChecked
              >
                <Checkbox.Indicator className='text-gray-50'>
                  <CheckIcon width={12} height={12} />
                </Checkbox.Indicator>
              </Checkbox.Root>
              <label htmlFor='remember'>Lembrar-me</label>
            </div>

            <Button className='space-x-2 md:w-fit'>
              <LogInIcon width={16} height={16} /> <p>Entrar</p>
            </Button>
          </div>

          <p className='text-gray-400 mt-4'>
            Esqueceu a senha?{" "}
            <a href='' className='text-primary hover:underline transition'>
              Recuperar agora
            </a>
          </p>
        </div>

        <a
          href=''
          className='group flex w-fit gap-4 px-4 py-1 -ml-4 rounded-full items-center transition text-gray-400 hover:bg-gray-100'
        >
          Ir para o CIMVI{" "}
          <ArrowRight
            width={16}
            height={16}
            className='invisible group-hover:visible text-primary transition'
          />
        </a>

        <span className='text-sm text-gray-400'>
          Desenvolvido por{" "}
          <a
            className='hover:underline hover:text-primary transition'
            href='https://brgweb.com.br/'
            target='_blank'
          >
            BRGWeb
          </a>
        </span>
      </section>
    </main>
  );
};

export default Login;
