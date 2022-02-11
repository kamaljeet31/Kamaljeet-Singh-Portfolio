import React from 'react'
import Brand from './Brand'
import Navbar from './Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import Pdf from '../Kamaljeet-Resume.pdf'

const About = () => {
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
                About
                <strong>Me</strong>
              </h2>
              <hr className='heading-markup' />
              <br />
            </div>
            {/* <!-- <div className="col-md-6">
                    <img className="img-responsive img-border-left" src="img/slide-2.jpg" alt=""/>
                </div> --> */}
            <div>
              <p>
                • 3 years of experience designing dynamic and beautiful
                cross-browser complaint web applications, landing pages, user
                interfaces and corporate websites and optimizing them for
                maximum speed and usability
                <br />
                • Well-versed with all stages of Software Development Life Cycle
                (SDLC) and Software Testing Life Cycle (STLC) for dynamic web
                projects <br />
                • Experience of designing prototypes, workflow, and
                collaborating effectively and efficiently using Figma
                <br />
                • Diligent, innovative, mechanically inclined and inquisitive to
                learn to new technologies
                <br />
                • Exceptional planner with time management, multitasking,
                prioritization and accountability skills acquired by working
                with teams that consistently met project deadlines
                <br />• Skilled in identifying problem areas, recognizing the
                impact on the business and users, and prioritizing the
                implementation of appropriate solutions
              </p>
            </div>
            <div className='clearfix'></div>
          </div>
        </div>

        <div className='row'>
          <div className='box'>
            <div className='col-lg-12'>
              <hr className='heading-markup' />
              <h2 className='intro-text text-center'>
                My
                <strong>Skills</strong>
              </h2>
              <hr className='heading-markup' />
              <br />
            </div>
            <div className='row'>
              <div className='col-sm-4'>
                <h3>
                  Web Developmemt Technologies
                  <small></small>
                </h3>
                <p>
                  {' '}
                  HTML5, CSS3, Bootstrap
                  <br /> Materialize CSS, SCSS
                  <br /> WordPress
                  <br /> JavaScript, React.JS
                  <br /> Angular, Next.JS
                  <br /> RESTful APIs
                  <br />
                  Node.JS, Express.JS, MongoDB
                </p>
              </div>

              <div className='col-sm-4'>
                <h3>
                  Programming Languages
                  <small></small>
                </h3>
                <p>
                  MySQL
                  <br />
                  ADT Bundle
                  <br /> APIs of Twitter,
                  <br /> Google Drive,
                  <br /> OneDrive,
                  <br /> Box, DropBox.{' '}
                </p>
              </div>
              <div className='col-sm-4'>
                <h3>
                  Tools
                  <small></small>
                </h3>
                <p>
                  <br /> MS Visual Studio
                  <br /> Atom, Sublime Text
                  <br />
                  InVision, Figma
                  <br /> FileZilla
                  <br /> Git, Github
                  <br /> Postman
                  <br /> Firebase, Heroku
                  <br />
                </p>
              </div>
            </div>
            <div className='clearfix'></div>
          </div>
        </div>

        <div className='row'>
          <div className='box'>
            <div className='col-lg-12 text-center'>
              <hr className='heading-markup' />
              <h2 className='intro-text text-center'>
                <strong>Work Experience</strong>
              </h2>
              <hr className='heading-markup' />
              <br />
            </div>

            <div>
              <h4>Full Stack Web Developer</h4>
              <h5>Freelance, Brampton, ON </h5>
              <p>
                • Create and maintain websites for small businesses such as
                restaurants, educational institutions, gyms etc
                <br />
                • Use search engine optimization (SEO) best practices to
                optimize the website for organic search
                <br />
                • Produce dynamic user-interfaces through comprehensive research
                and prototype development <br />
                • Manage and execute multiple projects concurrently to meet
                tight deadlines
                <br />
                • Built custom websites using Bootstrap and WordPress, including
                custom plug-ins and filters
                <br />
                • Implement processes for cleanup and performance improvement
                that minimized downtime for the customer’s website by 19%
                <br />
              </p>
              <h4>Software Developer </h4>
              <h5>JD Norman Industries</h5>
              <p>
                • Acquired hands on experience in HTML5/CSS3 development and
                Node.js, Angular JS, React and responsive design
                <br />
                • Guaranteed the technical feasibility and optimum functioning
                of the company’s design features that accelerated load-time by
                26% and improved site stickiness by 41%
                <br />
                • Administered full lifecycle of software development for
                various projects with on-time delivery while staying 9% under
                budget
                <br />
                • Designed and maintained the e-commerce website of the company
                <br />
                • Built the user validation forms using the RESTful services for
                sending the data to the server
                <br />
                • Updated the company’s e-commerce website effectively thus
                guarantying high traffic and generating a 21% increase in the
                company’s sales revenue
                <br />
              </p>
              <br />
              <h4>Web Developer</h4>
              <h5>Venus Mind Media, Ludhiana, India</h5>
              <p>
                • Made e-commerce websites and tested the code on multiple
                browsers to ensure cross-browser compatibility and fixed bugs
                <br />
                • Ensured the technical feasibility of UI/UX designs and
                cross-browser compatibility
                <br />
                • Acquired extensive experience working in Agile methodologies
                <br />
                • Functioned with clients to develop layout, color scheme for
                their website and implemented it into a final interface design
                <br />• Fixed bugs from existing websites and implemented
                enhancements that significantly improved web functionality and
                speed
              </p>
              <br />
              <div className='text-center'>
                <Button
                  href={Pdf}
                  target='_blank'
                  rel='noreferrer'
                  variant='outline-secondary'
                  size='lg'
                >
                  My Resume
                </Button>
              </div>
              <hr className='heading-markup' />
              <br />
            </div>
            <div className='clearfix'></div>
          </div>
        </div>

        <div className='row'>
          <div className='box'>
            <div className='col-lg-12'>
              <hr className='heading-markup' />
              <h2 className='intro-text text-center'>
                <strong>Education</strong>
              </h2>
              <hr className='heading-markup' />
              <br />
            </div>
            <div>
              <h4>Masters of Engineering in Computer Science </h4>
              <h5>Punjab Technical University </h5>
            </div>
            <br />
            <div>
              <h4>Become a Full-Stack Web Developer </h4>
              <h5>LinkedIn Learning</h5>
            </div>
            <div className='clearfix'></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
