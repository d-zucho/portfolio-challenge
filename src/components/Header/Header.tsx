import Link from 'next/link'
import MaxWidthWrapper from '../MaxWidthWrapper'
import MobileNav from '../Navbar/MobileNav'
import Nav from '../Navbar/Nav'

const Header = () => {
  return (
    <header className='py-10 relative'>
      <MaxWidthWrapper className=''>
        <div className='flex items-center justify-between'>
          {/* LOGO */}
          <div>
            <Link href='/'>
              <span className='heading3'>marikdev</span>
            </Link>
          </div>
          <div className='flex items-center gap-2 '>
            <div className='hidden md:block'>
              <Nav />
            </div>
            <div className='md:hidden'>
              <MobileNav />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </header>
  )
}

export default Header
