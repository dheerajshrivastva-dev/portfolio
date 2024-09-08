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
  catogaries?: string[];
  name: string;
  description: string;
  link: string;
  githubLink: string;
}

export const projectsData: Project[] = [
  {
    image: '/work/3.png',
    catogary: 'fullstack',
    catogaries: ['react js' , 'react native' , 'node js' , 'graphql' , 'AWS' , 'zoho' , 'mysql'],
    name: 'Vehicle Trading Platform',
    description: "Developed web and mobile apps, optimized performance, and created APIs in a microservices architecture using React, Node.js, and AWS.",
    link: "/",
    githubLink: "/",
  },
  {
    image: '/work/4.png',
    catogary: 'fullstack',
    catogaries: ['Node.js', 'Express.js' , 'Redis' , 'Python' , 'HTML' , 'CSS' , 'Bootstrap5'],
    name: 'API Rate Limiting Proxy',
    description: "Created a TCP proxy with Redis for API rate limiting, including a user interface for managing and monitoring rules.",
    link: "/",
    githubLink: "https://github.com/dheerajshrivastva-dev/proxy-rule-backend",
  },
  {
    image: '/work/2.png',
    catogary: 'fullstack',
    catogaries: ['React.js' , 'React Native' , '.NET' , 'Azure' , 'mssql' , 'Bootstrap4' , 'SCSS', 'twilio'],
    name: 'Health & Wellness Solution',
    description: "Enhanced booking system and UI/UX for mobile and web apps, integrated new features, and optimized backend services.",
    link: "/",
    githubLink: "/",
  },
  {
    image: '/work/1.png',
    catogary: 'fullstack',
    catogaries: ['React.js', 'Express.js', 'MySQL', 'Node.js', 'Socket.io', 'JWT', 'Authentication'],
    name: 'Document Sharing & Chat Portal',
    description: "Built a secure multi-user platform for document sharing and real-time chat with React, Node.js, and MySQL.",
    link: "/",
    githubLink: "https://github.com/queueno-SKYD/express-be",
  },
  {
    image: '/work/3.png',
    catogary: 'next js',
    catogaries: ['React.js', 'Next.js', 'Tailwind css'],
    name: 'Portfolio',
    description: "Created my personal website - portfolio",
    link: "/",
    githubLink: "https://github.com/dheerajshrivastva-dev/portfolio",
  },
  {
    image: '/work/4.png',
    catogary: 'fullstack',
    catogaries: ['React.js', 'Next.js', 'Tailwind css', 'Redis', 'Upstash'],
    name: 'Realtime Chat App',
    description: "Created realtime chat with OAuth and friend request, one to one chat.",
    link: "https://realtime-chat-next-chi.vercel.app/",
    githubLink: "https://github.com/dheerajshrivastva-dev/realtime-chat-next",
  },
  {
    image: '/work/1.png',
    catogary: 'frontend',
    catogaries: ['React.js', 'Next.js', 'HTML', 'CSS', 'Bootstrap'],
    name: 'SKYD portal',
    description: "Frontend for Document Sharing & Chat Portal",
    link: "/",
    githubLink: "https://github.com/queueno-SKYD/SKYD-Portal",
  },
  {
    image: '/work/3.png',
    catogary: 'automation',
    catogaries: ['automation', 'javascript', 'jest'],
    name: 'Web crawler',
    description: "Web crawler automation example, that crawl to a given link and recursevely crawl and generate report",
    link: "/",
    githubLink: "https://github.com/dheerajshrivastva-dev/web-crawler-http",
  },
  {
    image: '/work/2.png',
    catogary: 'frontend',
    catogaries: ['React js', 'Javascript', 'Next.js'],
    name: 'Advanced TicTacToe Game board',
    description: "Created tic tac toe game with opps concept in javascript with react, using matrix data structure.",
    link: "/",
    githubLink: "https://github.com/dheerajshrivastva-dev/TicTacToeGame",
  },
  {
    image: '/work/2.png',
    catogary: 'App',
    catogaries: ['React Native', 'Camera module', 'Android', 'IOS'],
    name: 'QR code scanner',
    description: "Created QR code scanner app in react native.",
    link: "/",
    githubLink: "https://github.com/dheerajshrivastva-dev/qrcode_app",
  },
]

const Work: FC<WorkProps> = ({}) => {
  return (
    <section className='relative mb-12 xl:mb-48'>
      <div className='container mx-auto'>
        {/* text  */}
        <div className='max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start'>
          <h2 className='section-title mb-4'>
            My Projects
          </h2>
          <p className='subtitle mb-8'>A curated selection of my personal and professional projects.</p>
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
