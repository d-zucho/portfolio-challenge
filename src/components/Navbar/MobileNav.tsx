'use client'
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '../ui/sheet'
import { navLinks } from '@/text-data/navLinks'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const MobileNav = () => {
  const pathname = usePathname()

  return (
    <div className='text-white'>
      <Sheet>
        <SheetTrigger>
          <Menu size={32} className='hover:cursor-pointer' />
        </SheetTrigger>
        <SheetContent>
          <div className='flex flex-col gap-12 text-muted-foreground font-semibold text-[32px]  justify-center items-center mt-20'>
            {navLinks.map((link) => (
              <SheetClose asChild key={link.title}>
                <Link
                  href={link.href}
                  className={pathname === link.href ? 'text-brightGreen' : ''}
                >
                  {link.title}
                </Link>
              </SheetClose>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MobileNav
