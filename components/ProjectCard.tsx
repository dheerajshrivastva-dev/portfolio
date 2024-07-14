"use client"

import { FC } from 'react'
import { Project } from './Work'
import { Card, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import Image from 'next/image';
import Link from 'next/link';
import { Link2Icon } from 'lucide-react';
import { RiGithubFill } from 'react-icons/ri';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card className='group overflow-hidden relative'>
      <CardHeader className='p-0'>
        {/* image  */}
        <div className='relative w-full h-[300px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:dark:bg-work_project_bg_dark xl:bg[110%] xl:bg-no-repeat overflow-hidden'>
          <Image
            src={project.image}
            alt={project.name + "preview"}
            className='absolute bottom-0 shadow-2xl'
            width={247}
            height={250}
            priority
          />
          {/* buttons  */}
          <div className='flex gap-x-4'>
            <Link
              href={project.link}
              className='bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200'
            >
              <Link2Icon className='text-white'/>
            </Link>
            <Link
              href={project.link}
              className='bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200'
            >
              <RiGithubFill className='text-white w-[28px] h-[28px]'/>
            </Link>
          </div>
        </div>
      </CardHeader>
      <div className='h-full px-8 py-6'>
        <Badge className='uppercase text-sm mb-2 absolute top-4 left-5'>{project.catogary}</Badge>
        <h4 className='h4 mb-1'>{project.name}</h4>
        <p className='text-muted-foreground'>{project.description}</p>
      </div>
    </Card>
  )
}

export default ProjectCard
