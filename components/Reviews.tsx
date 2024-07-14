"use client"

import { FC } from 'react'

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card';
import Image from 'next/image';


interface ReviewsProps {
  
}

interface Review {
  avatar: string;
  name: string;
  job: string;
  review: string;
}

const reviewsData: Review[] = [
  {
    avatar: '/reviews/avatar-1.png',
    name: "Richard Thompson",
    job: "Chef",
    review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos assumenda tenetur voluptates nihil illo natus consequuntur maiores quisquam facere in!"
  },
  {
    avatar: '/reviews/avatar-2.png',
    name: "Evelyn Anderson",
    job: "Interior Designer",
    review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos assumenda tenetur voluptates nihil illo natus consequuntur maiores quisquam facere in!"
  },
  {
    avatar: '/reviews/avatar-3.png',
    name: "John Doe",
    job: "Game Developer",
    review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos assumenda tenetur voluptates nihil illo natus consequuntur maiores quisquam facere in!"
  },
  {
    avatar: '/reviews/avatar-4.png',
    name: "Emly Smith",
    job: "Therapist",
    review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos assumenda tenetur voluptates nihil illo natus consequuntur maiores quisquam facere in!"
  },
  {
    avatar: '/reviews/avatar-5.png',
    name: "Oliver Taylor",
    job: "Engineer",
    review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos assumenda tenetur voluptates nihil illo natus consequuntur maiores quisquam facere in!"
  },
  {
    avatar: '/reviews/avatar-6.png',
    name: "Mason Mayer",
    job: "Video Editor",
    review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos assumenda tenetur voluptates nihil illo natus consequuntur maiores quisquam facere in!"
  },
]

const Reviews: FC<ReviewsProps> = ({}) => {
  return (
    <section className='relative mb-12 xl:mb-32'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-4'>
          Reviews
        </h2>
        {/* slides */}
        <Swiper
          className='h-[350px]'
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1400: {
              slidesPerView: 3,
            }
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{ clickable: true }}
        >
          {reviewsData.map((review, index)=> {
            return (
              <SwiperSlide key={index}>
                <Card className='bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px] '>
                  
                  <CardHeader className='p-0 mb-10'>
                    <div className='flex items-center gap-x-4'>
                      {/* image  */}
                      <Image
                        alt={review.name + " " + "Image"}
                        src={review.avatar}
                        width={70}
                        height={70}
                        priority
                      />
                      {/* name  */}
                      <div className='flex flex-col'>
                        <CardTitle>
                          {review.name}
                        </CardTitle>
                        <p>{review.job}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardDescription className='text-lg text-muted-foreground'>{review.review}</CardDescription>
                </Card>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </section>
  )
}

export default Reviews
