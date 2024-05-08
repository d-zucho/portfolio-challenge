import { projects } from '@/text-data/projects'
import MaxWidthWrapper from './MaxWidthWrapper'
import Image from 'next/image'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <section className='my-20 py-10'>
      <MaxWidthWrapper>
        <div className='w-full'>
          <h1 className='heading2 py-10'>Projects</h1>

          {/* Projects Container */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto place-items-center'>
            {projects.map((project, index) => (
              <div key={index} className='project-card'>
                {/* <Image
                  width={500}
                  height={400}
                  alt={project.title}
                  src={project.image}
                />
                <h3>{project.title.toUpperCase()}</h3>
                <p>{project.stack}</p> */}
                <ProjectCard
                  name={project.title}
                  image={project.image}
                  stack={project.stack}
                />
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default Projects
