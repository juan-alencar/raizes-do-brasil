import RaizesDoBrasil from "@/assets/raizes-do-brasil.svg";
import { MapPin } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import {
  SiFacebook,
  SiInstagram,
  SiLinkedin,
  SiWhatsapp,
} from "react-icons/si";

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <footer className='bg-white w-full'>
      <div className='container mx-auto py-8 space-y-8 px-4 md:px-0'>
        <div className='flex flex-col md:justify-between md:flex-row gap-4'>
          <Image src={RaizesDoBrasil} alt='Logo' />
          <div className='flex flex-col gap-2 text-gray-800'>
            <p className='text-green-700'>Contatos</p>
            <span className='text-sm text-gray-300'>Telefones</span>
            <ol className='text-sm space-y-1'>
              <li>
                <Link
                  className='hover:underline hover:text-primary transition'
                  target='_blank'
                  href='tel:4730533001'
                >
                  {" "}
                  (47) 3053-3001
                </Link>
              </li>
              <li>
                <Link
                  className='hover:underline hover:text-primary transition'
                  target='_blank'
                  href='tel:+55 (47) 98816-9949'
                >
                  {" "}
                  (47) 98816-9949
                </Link>
              </li>
              <li>
                <Link
                  className='hover:underline hover:text-primary transition'
                  target='_blank'
                  href='tel:+55 (47) 98845-9419'
                >
                  {" "}
                  (47) 98845-9419
                </Link>
              </li>
            </ol>

            <span className='text-sm text-gray-300'>E-mail</span>
            <ol className='text-sm space-y-1'>
              <li>
                <Link
                  className='hover:underline hover:text-primary transition'
                  target='_blank'
                  href='mailto:contato@raizesdobrasil.net'
                >
                  contato@raizesdobrasil.net
                </Link>
              </li>
            </ol>
          </div>
          <div className='flex flex-col gap-2 text-gray-800'>
            <p className='text-green-700'>Notícias e Projetos</p>

            <ol className='text-sm space-y-1'>
              <li>
                <Link
                  href={"#"}
                  className='hover:underline hover:text-primary transition'
                  target='_blank'
                >
                  Reunião com a Setur em Praia do Forte – BA
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className='hover:underline hover:text-primary transition'
                  target='_blank'
                >
                  Apresentação do Plano de Turismo em Dias d´Ávila – BA
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className='hover:underline hover:text-primary transition'
                  target='_blank'
                >
                  Plano Municipal de Turismo de Mata de São João – BA
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className='hover:underline hover:text-primary transition'
                  target='_blank'
                >
                  Programa SP EcoAventura
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className='hover:underline hover:text-primary transition'
                  target='_blank'
                >
                  Região Turística Caminhos do Contestado – SC
                </Link>
              </li>
              <li>
                <Link
                  href={"#"}
                  className='hover:underline hover:text-primary transition'
                  target='_blank'
                >
                  Práticas ESG no ambiente empresarial
                </Link>
              </li>
            </ol>
          </div>
        </div>
        <div className='flex flex-col gap-4 md:flex-row justify-between text-sm text-gray-800'>
          <p className='flex items-center gap-2'>
            <MapPin width={16} height={16} /> Rua Frota Moreira, 175, São Paulo
          </p>
          <p>Copyright © 2023</p>
          <div className='flex gap-4 text-base items-center'>
            <SiLinkedin /> <SiWhatsapp /> <SiInstagram /> <SiFacebook />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
