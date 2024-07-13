"use client"

import { MailIcon, PhoneCall, User2, Calendar, GraduationCap, HomeIcon, Briefcase } from 'lucide-react'
import { FC, Fragment, ReactNode } from 'react'
import { RiBootstrapFill, RiCss3Fill, RiGithubFill, RiHtml5Fill, RiJavaFill, RiJavascriptFill, RiNextjsFill, RiNodejsFill, RiReactjsFill, RiTailwindCssFill, RiVuejsFill } from 'react-icons/ri'
import { VscTerminalLinux, VscVscode } from "react-icons/vsc";
import { SiExpress, SiJira, SiMongodb, SiMysql, SiPython, SiRedis } from "react-icons/si";
import { CgFigma } from "react-icons/cg";
import DevImg from './DevImg';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';



interface AboutProps {
  
}

interface QualificationData {
  place: string;
  qualification: string;
  years: string;
}

interface Qualification {
  title: string;
  data: QualificationData[]
}

interface SkillsData {
  icons: ReactNode[];
  text: string;
}

interface Skills {
  title: string;
  data: SkillsData[]
}

const infoData = [
  {
    icon: <User2 size={20} className='text-primary' />,
    text: 'Dheeraj Shrivastva',
  },
  {
    icon: <PhoneCall size={20} className='text-primary' />,
    text: '+91 8209 3714 20',
  },
  {
    icon: <MailIcon size={20} className='text-primary' />,
    text: 'dheerajshrivastva2@gmail.com',
  },
  {
    icon: <Calendar size={20} className='text-primary' />,
    text: 'Born on 11 Nov, 1999',
  },
  {
    icon: <GraduationCap size={20} className='text-primary' />,
    text: 'B.Tech with ECE',
  },
  {
    icon: <HomeIcon size={20} className='text-primary' />,
    text: 'Tariyani Chhapra, Sheohar, Bihar, IN',
  },
]

const qualificationData: Qualification[] = [
  {
    title: "education",
    data: [
      {
        place: "Maharshi Dayanad University (Rohtak)",
        qualification: 'Bachelor of Technology',
        years: '2018 - 2022',
      },
      {
        place: "Motion Education (Kota)",
        qualification: 'JEE Mains/Adv.',
        years: '2017 - 2018',
      },
      {
        place: "SRJS high school (Chhapra)",
        qualification: '12th',
        years: '2015 - 2017',
      },
      {
        place: "SRJS high school (Chhapra)",
        qualification: '10th',
        years: '2014 - 2015',
      },
    ]
  },
  {
    title: "exprience",
    data: [
      {
        place: "IESOFT Technologies Pvt. Ltd.",
        qualification: 'Fullstack Developer',
        years: 'Dec-2022 - Present',
      },
      {
        place: "IESOFT Technologies Pvt. Ltd.",
        qualification: 'Fullstack Developer Intern',
        years: 'July-2022 - Dec-2022',
      },
      {
        place: "Pepcoding Edu Pvt. Ltd.",
        qualification: 'Fullstack Developer Intern',
        years: 'Dec-2021 - July-2022',
      },
      {
        place: "Geekhub UIET",
        qualification: 'Python developer',
        years: 'Oct-2018 - Mar-2020',
      },
    ]
  }
]

const skillsData: Skills[] = [
  {
    title: "skills",
    data: [
      {
        icons: [
          <RiHtml5Fill key={1} size={32} className='text-primary' />,
          <RiCss3Fill key={2} size={32} className='text-primary' />,
          <RiBootstrapFill key={3} size={32} className='text-primary' />,
          <RiTailwindCssFill key={4} size={32} className='text-primary' />,
        ],
        text: 'HTML, CSS, Bootstrap, Tailwindcss',
      },
      {
        icons: [
          <RiReactjsFill key={1} size={32} className='text-primary' />,
          <RiReactjsFill key={2} size={32} className='text-primary' />,
          <RiVuejsFill key={3} size={32} className='text-primary' />,
        ],
        text: 'React, React-Native, Vue',
      },
      {
        icons: [
          <RiJavascriptFill key={1} size={32} className='text-primary' />,
          <RiNodejsFill key={2} size={32} className='text-primary' />,
          <SiExpress key={3} size={32} className='text-primary' />,
          <RiNextjsFill key={3} size={32} className='text-primary' />,
        ],
        text: 'Javascript, Node, Express, Next',
      },
      {
        icons: [
          <SiMysql key={1} size={32} className='text-primary' />,
          <SiMongodb key={2} size={32} className='text-primary' />,
          <SiRedis key={3} size={32} className='text-primary' />,
          <RiJavaFill key={3} size={32} className='text-primary' />,
          <SiPython key={3} size={32} className='text-primary' />,
        ],
        text: 'MySql, Mongodb, Redis, Java, Python',
      },
    ]
  },
  {
    title: "tools",
    data: [
      {
        icons: [<RiGithubFill key={1} size={54} className='text-primary' />],
        text: 'GitHub',
      },
      {
        icons: [<VscVscode key={1} size={54} className='text-primary' />],
        text: 'VSCode',
      },
      {
        icons: [<SiJira key={1} size={54} className='text-primary' />],
        text: 'Jira',
      },
      {
        icons: [<CgFigma key={1} size={54} className='text-primary' />],
        text: 'Figma',
      },
      {
        icons: [<VscTerminalLinux key={1} size={54} className='text-primary' />],
        text: 'Linux',
      },
    ]
  },
]

enum tabsName {
  personal="personal",
  qualification="qualification",
  skills="skills"
}

const getData = <T extends Qualification | Skills>(arr: T[], title: string): T | undefined => {
  return arr.find((item) => item.title === title);
};

const About: FC<AboutProps> = ({}) => {
  
  return (
    <section className='xl:h-[860px] pb-12 xl:py-24'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>About me</h2>
        <div className='flex flex-col xl:flex-row'>
          {/* image  */}
          <div className='hidden xl:flex flex-1 relative'>
            <DevImg containerStyle='bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat bg-bottom relative' imgSrc={'/about/developer.png'}/>
          </div>
          {/* tabs  */}
          <div className='flex-1'>
            <Tabs defaultValue={tabsName.personal}>
              <TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none'>
                <TabsTrigger className='w-[162px] xl:w-auto' value={tabsName.personal}>Personal Info</TabsTrigger>
                <TabsTrigger className='w-[162px] xl:w-auto' value={tabsName.qualification}>Qualification</TabsTrigger>
                <TabsTrigger className='w-[162px] xl:w-auto' value={tabsName.skills}>Skils</TabsTrigger>
              </TabsList>
              {/* tabContent  */}
              <div className='text-lg mt-12 xl:mt-8'>
                {/* personal  */}
                <TabsContent value={tabsName.personal}>
                  <div className='text-center xl:text-left'>
                    <h3 className='h3 mb-4 '>Unmatched Service Quality for Over 10 Years</h3>
                    <p className='subtitle max-w-xl mx-auto xl:mx-0'>
                      I specialize in crafting intutive website with cutting-edge technology, deliverimg dynamic and engaging user expriances.
                    </p>
                    {/* icons  */}
                    <div className='grid xl:grid-cols-2 gap-4 mb-12'>
                      {infoData.map((item, index) => {
                        return (
                          <div key={index} className='flex items-center gap-x-4 mx-auto xl:mx-0 '>
                            <div>{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        )
                      })}
                    </div>
                    {/* languages  */}
                    <div className='flex flex-col gap-y-2'>
                      <div className='text-primary'>Language Skillss</div>
                      <div className="border-b border-border"></div>
                      <div>English, Hindi</div>
                    </div>
                  </div>
                </TabsContent>
                {/* Qualification  */}
                <TabsContent value={tabsName.qualification}>
                  <div>
                    <h3 className='h3 mb-8 text-center xl:text-left'> My Awesome Journey</h3>
                    {/* expreance & education wraper  */}
                    <div className='grid md:grid-cols-2 gap-y-8'>
                    {/* expreance  */}
                      <div className='flex flex-col gap-y-6'>
                        <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                          <Briefcase />
                          <h4 className='h4 capitalize font-medium'>
                            {getData(qualificationData, "exprience")?.title}
                          </h4>
                        </div>
                        {/* list  */}
                        <div className='flex flex-col gap-y-8'>
                          {getData(qualificationData, "exprience")?.data.map((eduData, index) => {
                            return (
                              <div key={index} className='flex gap-x-8 group'>
                                <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                  <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'>

                                  </div>
                                </div>
                                <div>
                                  <div className='font-semibold text-xl leading-none mb-2'>{eduData.place}</div>
                                  <div className='text-lg leading-none text-muted-foreground mb-4'>{eduData.qualification}</div>
                                  <div className='text-base font-medium'>{eduData.years}</div>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    {/* education  */}
                      <div className='flex flex-col gap-y-6'>
                        <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                          <GraduationCap size={28} />
                          <h4 className='h4 capitalize font-medium'>
                            {getData(qualificationData, "education")?.title}
                          </h4>
                        </div>
                        {/* list  */}
                        <div className='flex flex-col gap-y-8'>
                          {getData(qualificationData, "education")?.data.map((eduData, index) => {
                            return (
                              <div key={index} className='flex gap-x-8 group'>
                                <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                  <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'>

                                  </div>
                                </div>
                                <div>
                                  <div className='font-semibold text-xl leading-none mb-2'>{eduData.place}</div>
                                  <div className='text-lg leading-none text-muted-foreground mb-4'>{eduData.qualification}</div>
                                  <div className='text-base font-medium'>{eduData.years}</div>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* Skils  */}
                <TabsContent value={tabsName.skills}>
                  <div className='text-center xl:text-left'>
                    <h3 className='h3 mb-8'>What I Use Everyday</h3>
                    {/* skill list */}
                    <div className='mb-16'>
                      <h4 className='text-xl font-semibold mb-2 capitalize'>{getData(skillsData, "skills")?.title}</h4>
                      <div className='border-b border-border mb-4'></div>
                      {/* skills list  */}
                      <div className='flex flex-col gap-y-4 justify-center xl:justify-start'>
                        {getData(skillsData, "skills")?.data.map((skill, index) => {
                          return (
                            <div key={index} className='w-2/4 text-center xl:text-left mx-auto xl:mx-0 '>
                              {/* <div className='flex gap-x-4'>{skill.icons.map((icon, innerIndex) => {
                                return <div className='hover:scale-110 transition-all duration-300' key={index + "" + innerIndex}>{icon}</div>
                              })}</div> */}
                              <div className='font-medium'>{skill.text}</div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                    {/* tools  */}
                    <div className='mb-16'>
                      <h4 className='text-xl font-semibold mb-2 capitalize'>{getData(skillsData, "tools")?.title}</h4>
                      <div className='border-b border-border mb-4'></div>
                      {/* tools list  */}
                      <div className='flex gap-x-8 justify-center xl:justify-start'>
                        {getData(skillsData, "tools")?.data.map((tool, index) => {
                          return (
                            <div key={index} className='w-2/4 text-center xl:text-left mx-auto xl:mx-0 flex flex-col justify-center items-center'>
                              <div>{tool.icons.map((icon, innerIndex) => {
                                return <div className='hover:scale-105 transition-all duration-300' key={index + "" + innerIndex}>{icon}</div>
                              })}</div>
                              <div className='font-light text-[10px]'>{tool.text}</div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
