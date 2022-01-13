import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      {/* Navigation */}

      <nav className='navbar navbar-default navbar-expand-lg navbar-expand-md navbar-light '>
        <div className='container-fluid '>
          {/* Brand and toggle get grouped for better mobile display  */}
          <div className='navbar-header '>
            <button
              className='navbar-toggler float-end '
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navHeaderCollapse'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>
            {/* navbar-brand is hidden on larger screens, but visible when the menu is collapsed  */}
            <NavLink className='navbar-brand ' to='/'>
              Kamaljeet Singh
            </NavLink>
          </div>
          <div
            className=' collapse navbar-collapse'
            // id='navbarSupportedContent'
            id='navHeaderCollapse'
          >
            <ul className='nav navbar-nav  me-auto mb-2 mb-lg-0 text-center'>
              <li className='nav-item '>
                <NavLink className='nav-link' aria-current='page' to='/'>
                  Home
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/about'>
                  About
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/work'>
                  Work
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/contact'>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
