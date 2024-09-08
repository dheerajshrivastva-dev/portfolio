"use client"

import { Blocks, Database, Gem } from 'lucide-react'
import { FC } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'

interface ServicesProps {
  
}

const servicesData = [
  {
    icon: <Blocks size={72} strokeWidth={0.8}/>,
    title: 'Web Devlopment',
    description: "Crafting responsive, dynamic web interfaces using React, Next.js, and modern CSS frameworks for seamless, user-friendly experiences."
  },
  {
    icon: <Database size={72} strokeWidth={0.8}/>,
    title: 'Backend Development',
    description: "Building scalable, efficient server-side applications with Node.js, Express.js, and GraphQL, focusing on secure APIs and database integration."
  },
  {
    icon: <Gem size={72} strokeWidth={0.8}/>,
    title: 'App Development',
    description: "Developing cross-platform mobile apps with React Native, ensuring smooth, responsive performance and intuitive user interfaces."
  },
]

const Services: FC<ServicesProps> = ({}) => {
  return (
    <section className='mb-12 xl:mb-36'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-12 xl:mb-24 text-center mx-auto'>
          My Experties
        </h2>
        {/* grid items  */}
        <div className='grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8'>
          {servicesData.map((item, index) => {
            return (
              <Card className='w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative' key={index}>
                <CardHeader className='text-primary absolute -top-[60px]'>
                  <div className='w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center rounded-md'>{item.icon}</div>
                </CardHeader>
                <CardContent className='text-center'>
                  <CardTitle className='mb-4'>{item.title}</CardTitle>
                  <CardDescription className='text-lg'>{item.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
