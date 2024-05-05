import MaxWidthWrapper from '../MaxWidthWrapper'
import Nav from '../Navbar/Nav'

const Header = () => {
  return (
    <header className='py-10'>
      <MaxWidthWrapper>
        <div className='flex items-center justify-between'>
          {/* LOGO */}
          <div>
            <span className='heading3'>marikdev</span>
          </div>
          <Nav />
        </div>
      </MaxWidthWrapper>
    </header>
  )
}

export default Header
