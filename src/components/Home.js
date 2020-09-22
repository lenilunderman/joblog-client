import React from 'react'
import { MDBRow, MDBCol, MDBCardBody, MDBView } from 'mdbreact'

const Home = () => {
  return (
    <div>
      <section className="text-center my-5">
        <h1 className="h1-responsive font-weight-bold my-5 big-font">
          <span className="logo-site">The Job Logger Project </span>
        </h1>
        <p className="grey-text w-responsive mx-auto mb-5 header-font">
          Keep track of every job you apply in one place. The perfect tool for you to track all the companies and positions you have applied over the months. Say goodbye for google spreadsheets and word documents.
        </p>

        <MDBRow className="text-center">
          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
            <MDBView className="overlay rounded z-depth-1" waves>
              <img
                src="https://getfive.com/wp-content/uploads/2019/08/job-searching.jpg"
                alt=""
                className="img-fluid"
              />
            </MDBView>
            <MDBCardBody className="pb-0">
              <h4 className="font-weight-bold my-3">No more Spreadsheets</h4>
              <p className="grey-text">
                Say goodbye to excel! You can start using today our application to keep track of all the jobs that you applied.
              </p>
            </MDBCardBody>
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
            <MDBView className="overlay rounded z-depth-1" waves>
              <img
                src="https://static.vecteezy.com/system/resources/previews/000/169/149/non_2x/vector-job-seeker-illustration.jpg"
                alt=""
                className="img-fluid"
              />
            </MDBView>
            <MDBCardBody className="pb-0">
              <h4 className="font-weight-bold my-3">Keep track of that job position</h4>
              <p className="grey-text">
                Have the information about your dream job on fingertips and never miss out, that information about that company or position you applied.
              </p>
            </MDBCardBody>
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
            <MDBView className="overlay rounded z-depth-1" waves>
              <img
                src="https://images.ctfassets.net/6g4gfm8wk7b6/3WNFSztN9uQMaEi8wqOWMe/851ba5e7c3c6d0c9cc61ba46493776ac/1-_Guide_to_starting_your_job_search.png"
                alt=""
                className="img-fluid"
              />
            </MDBView>
            <MDBCardBody className="pb-0">
              <h4 className="font-weight-bold my-3">No more Notepads </h4>
              <p className="grey-text">
                Temporibus autem quibusdam et aut officiis debitis aut rerum
                necessitatibus saepe eveniet ut et voluptates repudiandae.
              </p>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </section>
    </div>
  )
}

export default Home
