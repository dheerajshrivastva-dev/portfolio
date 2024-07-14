import { FC } from 'react'
import Socials from './Socials'
interface FooterProps {
  
}

const Footer: FC<FooterProps> = ({}) => {
  return <footer className='bg-secondary py-12'>
    <div className="container mx-auto">
      <div className='flex flex-col items-center justify-between'>
        {/* socials  */}
        <Socials
          containerStyles='flex gap-x-6 mx-auto xl:mx-0 mb-4'
          iconStyles='text-primary dark:text-white/70 hover:scale-[115%] transition-all duration-200 hover:text-white hover:dark:text-primary'
        />
        {/* copyright  */}
        <div
          className='text-muted-foreground'
        >
          Copyright &copy; Dheeraj Shrivastva. All Rights Reserved.
        </div>
      </div>
    </div>
  </footer>
}

export default Footer
