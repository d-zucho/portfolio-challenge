import { skills } from '@/text-data/skills'
import MaxWidthWrapper from './MaxWidthWrapper'
import Image from 'next/image'

const Skills = () => {
  return (
    <section className='mt-20 md:mt-40 lg:mt-80'>
      <MaxWidthWrapper>
        <div className='border-t-2 border-lightCream py-10'>
          {/* Icons Container */}
          <div className='grid grid-cols-2 md:grid-cols-3 justify-around items-center gap-x-3 gap-y-5'>
            {skills.map((skill, index) => (
              <div className='flex items-center gap-4 flex-col md:flex-row'>
                <Image
                  width={100}
                  height={100}
                  key={index}
                  src={skill.icon}
                  alt={skill.name}
                />
                <p className='text-lg font-semibold'>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default Skills
