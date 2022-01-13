import Brand from './Brand'
import Navbar from './Navbar'
import Button from 'react-bootstrap/Button'
import { FaGithub } from 'react-icons/fa'

const Work = () => {
  return (
    <>
      <Brand />
      <Navbar />
      <br />

      <div className='container'>
        <div className='row'>
          <div className='box'>
            <div className='col-lg-12'>
              <hr className='heading-markup' />

              <h2 className='intro-text text-center'>
                My
                <strong>Projects</strong>
              </h2>
              <hr className='heading-markup' />
              <br />
            </div>
            <div className='row'>
              <div className='col-lg-4 text-center'>
                <div className='img-container'>
                  <img
                    className='img-fluid project-photo'
                    src='img/amazon.png'
                    alt='AmazonClone'
                  />
                  <a
                    target='_blank'
                    rel='noreferrer'
                    href='https://github.com/kamaljeet31/amazon-clon-react'
                    className='github-link'
                  >
                    <i className='fas fa-search'>
                      <FaGithub />
                    </i>
                  </a>
                </div>
                <h2>
                  Amazon Clone
                  <br />
                  <small>Website for E-Business</small>
                </h2>

                <Button
                  href='https://challenge-173bc.firebaseapp.com/'
                  target='_blank'
                  rel='noreferrer'
                  variant='outline-secondary'
                  size='lg'
                >
                  View Full Website
                </Button>

                <hr className='tagline-divider' />
                <br />
              </div>
              <div className='col-lg-4 text-center'>
                <div className='img-container'>
                  <img
                    className='img-fluid project-photo'
                    src='img/pubHouse.png'
                    alt='PubHouse'
                  />
                  <a
                    target='_blank'
                    rel='noreferrer'
                    href='https://github.com/kamaljeet31/The-PubHouse'
                    className='github-link'
                  >
                    <i className='fas fa-search'>
                      <FaGithub />
                    </i>
                  </a>
                </div>
                <h2>
                  The PubHouse
                  <br />
                  <small>Website for The Bar</small>
                </h2>
                <Button
                  href='https://pubhouse.herokuapp.com/'
                  target='_blank'
                  rel='noreferrer'
                  variant='outline-secondary'
                  size='lg'
                >
                  View Full Website
                </Button>
                <hr className='tagline-divider' />
                <br />
              </div>
              <div className='col-lg-4 text-center'>
                <div className='img-container'>
                  <img
                    className='img-fluid project-photo'
                    src='img/Car-dealership.png'
                    alt='PubHouse'
                  />
                  <a
                    target='_blank'
                    rel='noreferrer'
                    href='https://github.com/kamaljeet31/UsedCar-Agency-react'
                    className='github-link'
                  >
                    <i className='fas fa-search'>
                      <FaGithub />
                    </i>
                  </a>
                </div>
                <h2>
                  Used Car Dealership
                  <br />
                  <small>Website for Car Dealership</small>
                </h2>
                <Button
                  href='https://used-car-agency1.firebaseapp.com/'
                  target='_blank'
                  rel='noreferrer'
                  variant='outline-secondary'
                  size='lg'
                >
                  View Full Website
                </Button>
                <hr className='tagline-divider' />
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Work
