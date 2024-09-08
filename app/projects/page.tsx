'use client'

import { FC, useState } from 'react'
import { Project, projectsData } from '@/components/Work'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProjectCard from '@/components/ProjectCard';

interface ProjectsProps {
  
}

const uniqueueCatogaries: string[] = ['all projects', ...new Set(projectsData.map(item => item.catogary))];

const getFiltredProjectByCat = (catogary:string): Project[] => {
  return catogary === 'all projects' ? projectsData : projectsData.filter((project) => project.catogary === catogary)
}


const Projects: FC<ProjectsProps> = ({}) => {
  const [categories, setCategories] = useState<string[]>(uniqueueCatogaries);
  const [category, setCategory] = useState<string>(categories[0]);
  const selectdProjects = getFiltredProjectByCat(category);
  return (
    <section className='min-h-screen pt-12'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>My Projects</h2>
        <Tabs defaultValue={category} className='mb-24 xl:mb-48'>
          <TabsList className='w-full grid h-full md:grid-cols-6 lg:max-w-[760px] mb-12 mx-auto md:border dark:border-none'>
            {categories.map((cat, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(cat)}
                  key={index}
                  value={cat}
                  className='capitalize w-[162px] md:w-auto '
                >{cat}</TabsTrigger>
              )
            })}
          </TabsList>
          {/* tabs content  */}
          <div className='text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4'>
            {selectdProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index} >
                  <ProjectCard project={project} />
                </TabsContent>
              )
            })}
          </div>
        </Tabs>
      </div>
    </section>
  )
}

export default Projects
