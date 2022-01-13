import Navbar from '../Component/Navbar'
import Carousel from 'react-bootstrap/Carousel'
import Brand from './Brand'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <>
      <Brand />
      <Navbar />
      <br />
      <div className='container'>
        <div className='row'>
          <div className='box'>
            <div className='col-lg-12 text-center'>
              <h2 className='brand-before'>
                {/* <small>I enjoy creating products that tell a story, delight users and build brand awareness.</small>  */}
              </h2>

              <h1 className='brand-name'>
                I enjoy creating products that tell a story, delight users and
                build brand awareness.
              </h1>
              <hr className='tagline-divider' />
              <h2>
                <small>
                  <strong>
                    <Link to='/work' className='text-link'>
                      Here are some of my project samples.
                    </Link>
                  </strong>
                </small>
              </h2>
              {/* Carousel */}
              <Carousel>
                <Carousel.Item interval={2000}>
                  <img
                    className='d-block w-100'
                    src='img/amazon.png'
                    alt='First slide'
                  />
                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                  <img
                    className='d-block w-100'
                    src='img/pubHouse.png'
                    alt='Second slide'
                  />

                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                  <img
                    className='d-block w-100'
                    src='img/Car-dealership.png'
                    alt='Third slide'
                  />

                  {/* <Carousel.Caption></Carousel.Caption> */}
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='box'>
            <div className='col-lg-12'>
              <hr className='heading-markup' />
              <h2 className='intro-text text-center'>
                <strong>Design Is Thinking Made Visual</strong>
              </h2>
              <hr className='heading-markup' />

              <p>
                I've developed expertise in all phases of the design process. I
                love collaborating with brilliant people across disciplines to
                create unique, immersive, visual and shareable interactive
                experiences for mobile, desktop and tablet. I collaborate with
                clients and peers to nurture and transform ideas into well
                thought out design specifications. After all, that's where the
                majority of amazing user experiences start. I'm a minimalist who
                truly believes that less is more.
                <br />
                I have spent the last two years working as a freelance web
                developer and designer and as part of a team in various
                companies like JD Norman Industries and Venus Web Media as a
                Full Stack Web Developer. I acquired project and time management
                skills, as well as the ability to communicate with team members
                and clients while effectively meeting milestones and deadlines.
                <br />
                As a Web Developer, I worked on several projects in Canada and
                overseas. I have worked on a multitude of web and print based
                projects for a range of clients providing Web Design and
                Development ( HTML, CSS, LESS, JavaScript, Bootstrap, ReactJS,
                NodeJS, ExpressJS, MongoDB, Responsive Layouts), eCommerce
                Solutions, Corporate Branding and Graphic Design. My eye for
                detail, creative view on the world, and meticulous nature have
                left me with many highly satisfied team members.
                <br />
                <br />
                My work is fully responsive, and tested in a wide range of
                devices. I take great care to ensure each project is
                well-documented and easily maintainable. Often front-end
                development of a website is overlooked, but being the part of
                your project that combines design, back-end development and the
                layer that your users interact with, from my experience, it is
                the most important to get right.
                <br />
                <br />
                In my past experience as a freelancer and working for companies,
                I have also obtained appreciation for design, knowledge of
                integrating and developing server-side, as well as knowing how
                to efficiently manage project and work with clients and
                colleagues successfully. Cross browser compatibility is ensured
                by using feature detection so older browsers still in use today
                provide a solid experience, whilst modern browsers can go the
                next step and enhance a user’s time spent on the site. Writing
                semantic markup that is documented and easy to read means it can
                be maintained and scaled in the future, and allows co-workers to
                quickly work with it.
                <br />
                Have a look at my recent{' '}
                <Link to='/work' className='text-link'>
                  projects
                </Link>
                . Learn a bit more{' '}
                <Link to='/about' className='text-link'>
                  about me
                </Link>
                . Feel free to{' '}
                <Link to='/contact' className='text-link'>
                  contact
                </Link>{' '}
                me for any further queries. I look forward to speaking with you
                soon about working with your company.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* /.container  */}
    </>
  )
}

export default Hero
