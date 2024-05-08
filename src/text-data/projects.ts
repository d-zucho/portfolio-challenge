interface IProjects {
  title: string
  image: string
  stack?: string[]
}

export const projects: IProjects[] = [
  {
    title: 'Design Portfolio',
    image: '/images/thumbnail-project-1-small.webp',
    stack: ['HTML', 'CSS'],
  },
  {
    title: 'E-Learning Landing Page',
    image: '/images/thumbnail-project-2-small.webp',
    stack: ['HTML', 'CSS'],
  },
  {
    title: 'Todo Web App',
    image: '/images/thumbnail-project-3-small.webp',
    stack: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Entertainment Web App',
    image: '/images/thumbnail-project-4-small.webp',
    stack: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Memory Game',
    image: '/images/thumbnail-project-5-small.webp',
    stack: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Art Gallery Showcase',
    image: '/images/thumbnail-project-6-small.webp',
    stack: ['HTML', 'CSS', 'JavaScript'],
  },
]
