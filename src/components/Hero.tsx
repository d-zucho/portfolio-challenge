import Link from 'next/link'
import MaxWidthWrapper from './MaxWidthWrapper'
import { buttonVariants } from './ui/button'
import { cn } from '@/lib/utils'

const Hero = () => {
  return (
    <section className='md:mt-[100px] lg:mt-[150px]'>
      <MaxWidthWrapper className='flex flex-col items-center md:items-start'>
        <div className='w-3/5 order-2'>
          <div className='text-[36px] md:heading2 font-semibold lg:heading1 text-center md:text-left md:block'>
            <h1>
              Nice to meet you! <br /> I'm{' '}
              <span className='w-fit border-b-4 border-b-brightGreen'>
                Danny Libor
              </span>
            </h1>
          </div>
          <p className='text-lightCream pt-7 my-8 md:my-10 text-center md:text-left'>
            Based in California, I’m a front-end developer passionate about
            building accessible web apps that users love.
          </p>

          <div className='mx-auto text-center md:text-left'>
            <Link
              href='/contact'
              className='border-b border-b-brightGreen hover:text-brightGreen mx-auto md:mx-0'
            >
              CONTACT ME
            </Link>
          </div>
        </div>
        <div className='order-1 mb-10 md:mb-0'>
          <picture className='max-w-[250px] md:absolute md:top-0 md:right-0 -z-20 md:max-w-[325px] lg:max-w-[450px] mx-auto -mt-[300px] md:mt-0'>
            <source
              media='(min-width: 768px)'
              srcSet='/images/image-profile-tablet.webp'
            />
            <source
              media='(min-width: 1024px)'
              srcSet='/images/image-profile-desktop.webp'
            />
            <img
              className='-mt-[300px] md:mt-0'
              src='/images/image-profile-mobile.webp'
              alt=''
            />
          </picture>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default Hero
