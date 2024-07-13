import Link from 'next/link'
import { FC } from 'react'

// icons
import { RiArrowDownSLine, RiBriefcase4Fill, RiTeamFill, RiTodoFill } from "react-icons/ri"
import { Button } from './ui/button'
import { Download, Send } from 'lucide-react'
import Socials from './Socials'
import DevImg from './DevImg'
import Badge from './Badge'

interface HeroProps {
  
}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <section className='py-12 xl-py-24 h-[84vh] xl-pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none'>
      <div className='container mx-auto'>
        <div className='flex justify-between gap-x-8'>
          {/* text  */}
          <div className='flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left'>
            <div className='text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]'>Web Developer</div>
            <h1 className='h1 mb-4'>Hello, my name is Dheeraj Shrivastva</h1>
            <p className='subtitle max-w-[490px] mx-auto xl:mx-0'>Brief description with insights into myself, my vocational journey, and what I engage in professionally</p>
            {/* buttons  */}
            <div className='flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12'>
              <Link href='/contacts'>
                <Button className='gap-x-2'>Contact me <Send size={18}/></Button>
              </Link>
              <Link href='/contacts'>
                <Button variant="secondary" className='gap-x-2'>Download CV <Download size={18}/></Button>
              </Link>
            </div>
            {/* socials  */}
            <Socials containerStyles='flex gap-x-6 mx-auto xl:mx-0' iconStyles='text-foreground text-[22px] hover:text-primary transition-all ' />
          </div>
          {/* image  */}
          <div className='hidden xl:flex relative'>
            {/* badge 1  */}
            <Badge
              icon={<RiBriefcase4Fill />}
              endCounterNum={2}
              badgeText='Years Of Expreance'
              className='absolute top-[24%] -left-[5rem]'
            />
            {/* badge 2  */}
            <Badge
              icon={<RiTodoFill />}
              endCounterNum={6}
              badgeText='Finished Projects'
              className='absolute top-[80%] -left-[1rem]'
              endCounterText='k'
            />
            {/* badge 3  */}
            <Badge
              icon={<RiTeamFill />}
              endCounterNum={9}
              badgeText='Happy Clients'
              className='absolute top-[55%] -right-8'
              endCounterText='k'
            /> 
            <div className='bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2'></div>
            <DevImg containerStyle="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom" imgSrc={"/hero/developer.png"}/>
          </div>
        </div>
        {/* icons  */}
        <div className='hidden md:flex absolute left-2/4 bottom-44 animate-bounce'>
          <RiArrowDownSLine className='text-3xl text-primary'/>
        </div>
      </div>
    </section>
  )
}

export default Hero
