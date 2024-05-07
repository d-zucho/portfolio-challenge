'use client'
import { cn } from '@/lib/utils'
import { navLinks } from '@/text-data/navLinks'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Nav = () => {
  const pathname = usePathname()

  return (
    <nav>
      <div className='flex gap-5 z-30'>
        {navLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className={cn(
              'hover:text-brightGreen duration-300',
              pathname === link.href && 'text-brightGreen font-bold'
            )}
          >
            {link.title}
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default Nav
