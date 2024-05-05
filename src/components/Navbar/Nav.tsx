import { navLinks } from '@/text-data/navLinks'
import Link from 'next/link'

const Nav = () => {
  return (
    <nav>
      <div className='flex gap-5'>
        {navLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className='hover:text-brightGreen transition-colors duration-300'
          >
            {link.title}
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default Nav
