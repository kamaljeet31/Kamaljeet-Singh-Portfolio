import React from 'react'

const Footer = () => {
  let getYear = () => {
    let currentYear = new Date().getFullYear()
    return currentYear
  }
  return (
    <footer>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12 text-center'>
            <p>Copyright &copy; Portfolio Kamaljeet {getYear()}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
