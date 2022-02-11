import Brand from './Brand'
import Navbar from './Navbar'
import Button from 'react-bootstrap/Button'
import { FaGithub } from 'react-icons/fa'

const Work = ({ items }) => {
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
              {items?.map((imgItem) => {
                const {
                  id,
                  img,
                  gitLink,
                  websiteInfo,
                  projectLink,
                  projectName,
                } = imgItem
                return (
                  <div className='col-lg-4 text-center' key={id}>
                    <div className='img-container'>
                      <img
                        className='img-fluid project-photo'
                        src={img}
                        alt='AmazonClone'
                      />
                      <a
                        target='_blank'
                        rel='noreferrer'
                        href={gitLink}
                        className='github-link'
                      >
                        <i className='fas fa-search'>
                          <FaGithub />
                        </i>
                      </a>
                    </div>
                    <h2>
                      {projectName}
                      <br />
                      <small>{websiteInfo}</small>
                    </h2>

                    <Button
                      href={projectLink}
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
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Work
