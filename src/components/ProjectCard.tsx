import Image from 'next/image'

interface IProjectCardProps {
  image: string
  name: string
  stack?: string[]
}

const ProjectCard = ({ image, name, stack }: IProjectCardProps) => {
  return (
    <div className='project-card'>
      <Image width={450} height={400} alt={name} src={image} />
      <h3 className='pt-4 lg:text-xl'>{name.toUpperCase()}</h3>

      <div className='flex gap-2'>
        {stack?.map((tech, index) => (
          <p key={index} className='w-fit text-sm text-gray-500 md:text-base'>
            {tech}
          </p>
        ))}
      </div>
    </div>
  )
}

export default ProjectCard
