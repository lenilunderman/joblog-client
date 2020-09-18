import React from 'react'

// $('#myTab a').on('click', function (e) {
//   e.preventDefault()
//   $(this).tab('show')
// })

const Home = () => (
  <div className="container">
    <div className="row">
      <div className="col-sm">
        <nav className="blue-grey mt-3 px-2">
          <div className="nav nav-tabs md-tabs" id="nav-tab" role="tablist">
            <a className="nav-item nav-link active grey-text font-weight-bold" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab"
              aria-controls="nav-home" aria-selected="true">Company Name</a>
            <a className="nav-item nav-link grey-text font-weight-bold" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab"
              aria-controls="nav-profile" aria-selected="false">Company Position</a>
            <a className="nav-item nav-link grey-text font-weight-bold" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab"
              aria-controls="nav-contact" aria-selected="false">Person I spoke to</a>
            <a className="nav-item nav-link grey-text font-weight-bold" id="nav-person-tab" data-toggle="tab" href="#nav-person" role="tab"
              aria-controls="nav-person" aria-selected="false">Person I spoke to</a>
            <a className="nav-item nav-link grey-text font-weight-bold" id="nav-info-tab" data-toggle="tab" href="#nav-info" role="tab"
              aria-controls="nav-info" aria-selected="false">Company Info</a>
          </div>
        </nav>
        <div className="tab-content pt-5" id="nav-tabContent">
          <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
            <b>Company name</b>
            <p><br />Et et consectetur ipsum labore excepteur est proident excepteur ad velit occaecat qui minim occaecat
        veniam. Fugiat veniam incididunt anim aliqua enim pariatur veniam sunt est aute sit dolor anim. Velit non
        irurat veniam incididunt anim aliqua enim pariatur veniam sunt est aute sit dolor anim. Velit non
        irure.
            </p>
          </div>
          <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
            <b>Company Position</b>
            <p><br />Et et consectetur ipsum labore excepteur est proident excepteur ad velit occaecat qui minim occaecat
        veniam. Fugiat veniam incididunt anim aliqua enim pariatur veniam sunt est aute sit dolor anim. Velit non
        irurat veniam incididunt anim aliqua enim pariatur veniam sunt est aute sit dolor anim. Velit non
        irure.
            </p>
          </div>
          <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
            <b>Person I spoke to: `name goes here`</b>
            <p><br />Et et consectetur ipsum labore excepteur est proident excepteur ad velit occaecat qui minim occaecat
        veniam. Fugiat veniam incididunt anim aliqua enim pariatur veniam sunt est aute sit dolor anim. Velit non
        irurat veniam incididunt anim aliqua enim pariatur veniam sunt est aute sit dolor anim. Velit non
        irure.
            </p>
          </div>
          <div className="tab-pane fade" id="nav-person" role="tabpanel" aria-labelledby="nav-person-tab">
            <b>Company Position</b>
            <p><br />Et et consectetur ipsum labore excepteur est proident excepteur ad velit occaecat qui minim occaecat
        veniam. Fugiat veniam incididunt anim aliqua enim pariatur veniam sunt est aute sit dolor anim. Velit non
        irurat veniam incididunt anim aliqua enim pariatur veniam sunt est aute sit dolor anim. Velit non
        irure.
            </p>
          </div>
        </div>
        <button type="button" className="btn blue-grey">DELETE</button>
        <button type="button" className="btn teal darken-1">UPDATE</button>
        <button type="button" className="btn cyan darken-1">VIEW JOB LISTING</button>
      </div>
    </div>
  </div>
)

export default Home
