"use client"
import Link from 'next/link'
import { FC } from 'react'
import { Button } from './ui/button'

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

// components
import Projectcard from '@/components/ProjectCard';

interface WorkProps {
  
}

export interface Project {
  image: string;
  catogary: string;
  name: string;
  description: string;
  link: string;
  githubLink: string;
}

export const projectsData: Project[] = [
  {
    image: '/work/3.png',
    catogary: 'react js',
    name: 'Nexa Website',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptatum perferendis",
    link: "/",
    githubLink: "/",
  },
  {
    image: '/work/4.png',
    catogary: 'react js',
    name: 'Solistic Website',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptatum perferendis",
    link: "/",
    githubLink: "/",
  },
  {
    image: '/work/2.png',
    catogary: 'next js',
    name: 'Lumina Website',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptatum perferendis",
    link: "/",
    githubLink: "/",
  },
  {
    image: '/work/1.png',
    catogary: 'next js',
    name: 'Evolve Website',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptatum perferendis",
    link: "/",
    githubLink: "/",
  },
  {
    image: '/work/3.png',
    catogary: 'next js',
    name: 'Ignite Website',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptatum perferendis",
    link: "/",
    githubLink: "/",
  },
  {
    image: '/work/4.png',
    catogary: 'next js',
    name: 'Envision Website',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptatum perferendis",
    link: "/",
    githubLink: "/",
  },
  {
    image: '/work/1.png',
    catogary: 'fullstack',
    name: 'Serenity Website',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptatum perferendis",
    link: "/",
    githubLink: "/",
  },
  {
    image: '/work/3.png',
    catogary: 'fullstack',
    name: 'Nova Website',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptatum perferendis",
    link: "/",
    githubLink: "/",
  },
  {
    image: '/work/2.png',
    catogary: 'fullstack',
    name: 'Zenith Website',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptatum perferendis",
    link: "/",
    githubLink: "/",
  },
]

const Work: FC<WorkProps> = ({}) => {
  return (
    <section className='relative mb-12 xl:mb-48'>
      <div className='container mx-auto'>
        {/* text  */}
        <div className='max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start'>
          <h2 className='section-title mb-4'>
            My Services
          </h2>
          <p className='subtitle mb-8'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo corporis, vel reprehenderit suscipit aperiam ullam.</p>
          <Link href='/projects'><Button>All projects</Button></Link>
        </div>
        {/* slides  */}
        <div className='xl:max-w-[1000px] xl:absolute right-0 top-0'>
          <Swiper
            className='h-[480px]'
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              }
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* show oly first 4 pojects for the slides  */}
            {projectsData.slice(0,4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <Projectcard project={project} />
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Work
