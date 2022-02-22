import type { NextPage } from 'next'
import Seo from 'components/Seo'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { AiOutlineLink, AiOutlineSchedule } from 'react-icons/ai'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <>
      <Seo title='Roseli Stefane | Psicóloga Clínica • CRP 12/20169' />
      <main className='p-12 bg-white dark:bg-gray-900'>
        <div className='mx-auto shadow-lg rounded-md w-80 bg-white dark:bg-gray-800'>
          <img
            alt='profil'
            src='/images/roseli-2.jpg'
            className='rounded-t-lg h-28 object-cover object-top w-full mb-4 opacity-20 dark:opacity-10'
          />
          <div className='flex flex-col items-center justify-center p-4 -mt-16'>
            <a
              href='https://roselistefanepsi.com.br'
              className='block relative rounded-full overflow-hidden shadow-lg h-16 w-16 border-2 border-white dark:border-gray-800 mb-2'
            >
              <img
                alt='profil'
                src='/images/roseli-1.jpg'
                className='mx-auto object-cover'
              />
            </a>
            <p className='text-gray-800 dark:text-white text-xl font-medium mt-2'>
              Roseli Stefane
            </p>
            <p className='text-gray-400 text-xs mb-4'>
              Psicóloga Clínica • CRP 12/20169
            </p>
            <p className='text-xs p-2 bg-rose-500 text-white px-4 rounded-full'>
              Atendimento Presencial e Online
            </p>
            <div className='rounded-lg p-2 w-full mt-4'>
              <p className='text-sm text-gray-600 dark:text-gray-400 text-center'>
                O objetivo do meu trabalho é proporcionar condições para que
                você consiga criar novas formas de viver, desenvolvendo e
                ampliando a sua própria consciência sobre sua visão de mundo.
              </p>
            </div>
            {false && (
              <div className='rounded-lg p-2 w-full mt-4'>
                <div className='flex items-center justify-between text-sm text-gray-600 dark:text-gray-200'>
                  <p className='flex flex-col'>
                    Articles
                    <span className='text-black dark:text-white font-bold'>
                      34
                    </span>
                  </p>
                  <p className='flex flex-col'>
                    Followers
                    <span className='text-black dark:text-white font-bold'>
                      455
                    </span>
                  </p>
                  <p className='flex flex-col'>
                    Rating
                    <span className='text-black dark:text-white font-bold'>
                      9.3
                    </span>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className='flex flex-col mx-auto w-80 items-center justify-center mt-6'>
          <ul className='flex flex-col w-full'>
            <li className='flex flex-row mb-2'>
              <a
                href='https://api.whatsapp.com/send?phone=5548991682211&text=Ol%C3%A1%20Roseli%2C%20Gostaria%20de%20agendar%20um%20hor%C3%A1rio%20de%20terapia.'
                className='shadow-lg select-none cursor-pointer bg-rose-500 rounded-md flex flex-1 items-center p-4'
              >
                <div className='flex flex-col w-10 h-10 justify-center items-center mr-4'>
                  <span className='block relative'>
                    <AiOutlineSchedule className='text-3xl text-white' />
                  </span>
                </div>
                <div className='flex-1 pl-1'>
                  <div className='font-medium text-white'>Agendamento</div>
                  <div className='text-rose-300 text-sm'>
                    Agende aqui sua terapia.
                  </div>
                </div>
              </a>
            </li>
            <li className='flex flex-row mb-2'>
              <a
                href='https://api.whatsapp.com/send?phone=5548991682211&text=Ol%C3%A1%20Roseli%2C%20Gostaria%20de%20entrar%20em%20contato!'
                className='shadow-lg select-none cursor-pointer bg-rose-500 rounded-md flex flex-1 items-center p-4'
              >
                <div className='flex flex-col w-10 h-10 justify-center items-center mr-4'>
                  <span className='block relative'>
                    <FaWhatsapp className='text-3xl text-white' />
                  </span>
                </div>
                <div className='flex-1 pl-1'>
                  <div className='font-medium text-white'>Entre em Contato</div>
                  <div className='text-rose-300 text-sm'>
                    Tem alguma dúvida?
                  </div>
                </div>
              </a>
            </li>
            <li className='flex flex-row mb-2'>
              <a
                href='https://roselistefanepsi.com.br'
                className='shadow-lg select-none cursor-pointer bg-rose-500 rounded-md flex flex-1 items-center p-4'
              >
                <div className='flex flex-col w-10 h-10 justify-center items-center mr-4'>
                  <span className='block relative'>
                    <AiOutlineLink className='text-3xl text-white' />
                  </span>
                </div>
                <div className='flex-1 pl-1'>
                  <div className='font-medium text-white'>
                    Conheça meu Trabalho
                  </div>
                  <div className='text-rose-300 text-sm'>
                    Acesse meu site e conheça mais.
                  </div>
                </div>
              </a>
            </li>
            <li className='flex flex-row mb-2'>
              <a
                href='https://instagram.com/roselistefane.psi'
                className='shadow-lg select-none cursor-pointer bg-rose-500 rounded-md flex flex-1 items-center p-4'
              >
                <div className='flex flex-col w-10 h-10 justify-center items-center mr-4'>
                  <span className='block relative'>
                    <FaInstagram className='text-3xl text-white' />
                  </span>
                </div>
                <div className='flex-1 pl-1'>
                  <div className='font-medium text-white'>Instagram</div>
                  <div className='text-rose-300 text-sm'>
                    Siga-me no Instagram.
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </main>
    </>
  )
}

export default Home
