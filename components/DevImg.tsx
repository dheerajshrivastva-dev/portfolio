import { cn } from '@/lib/utils';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import { FC } from 'react'
import { ClassNameValue } from 'tailwind-merge'

interface DevImgProps {
  containerStyle: ClassNameValue;
  imgSrc: string | StaticImport;
}

const DevImg: FC<DevImgProps> = ({ containerStyle, imgSrc }) => {
  return (
    <div className={cn(containerStyle)}>
      <Image src={imgSrc} fill priority alt='dev_image'></Image>
    </div>
  )
}

export default DevImg
