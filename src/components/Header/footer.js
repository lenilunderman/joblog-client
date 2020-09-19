import React from 'react'
import { MDBContainer, MDBFooter } from 'mdbreact'

const FooterPage = () => {
  return (
    <section>
      <MDBFooter className='font-small mt-4 background-color: blue lighten-3'>
        <MDBContainer fluid className='text-center text-md-left'>
        </MDBContainer>
        <div className='footer-copyright text-center py-4'>
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright: <a href='https://lenilunderman.github.io'> JobLogger  </a>
          </MDBContainer>
        </div>
      </MDBFooter>
    </section>
  )
}

export default FooterPage
