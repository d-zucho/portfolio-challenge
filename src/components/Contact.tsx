import Image from 'next/image'
import Form from './Form'
import MaxWidthWrapper from './MaxWidthWrapper'

const Contact = () => {
  return (
    <section className=''>
      <MaxWidthWrapper>
        <div className='flex flex-col md:flex-row md:gap-10 justify-between'>
          <div className='space-y-10 flex-1 text-center md:text-left mx-auto relative'>
            <h2 className='heading2 lg:heading1'>Contact</h2>
            <p className='text-lightCream/90 max-w-sm'>
              I would love to hear about your project and how I could help.
              Please fill in the form, and I’ll get back to you as soon as
              possible.
            </p>
            <img
              src='/images/pattern-rings.svg'
              alt=''
              className='absolute -left-1/2 top-0 md:top-[200px]'
            />
          </div>
          <div className='flex-1 w-full'>
            <div className='mx-auto max-w-[400px]'>
              <Form />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default Contact
