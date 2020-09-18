import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../apiConfig'
// import moment from 'moment'
import messages from './AutoDismissAlert/messages'
// import { Redirect } from 'react-router-dom'
// import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact'
// import Popup from 'reactjs-popup'
// import 'reactjs-popup/dist/index.css'
import Popup from './Popup'

class JobListingView extends Component {
  constructor (props) {
    super(props)
    this.state = {
      joblistings: [],
      user: this.props.user,
      modal: false
    }
  }
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    })
  }

  componentDidMount () {
    // get the data that will be displayed on the screen...
    this.getJobListing()
  }

  makeActivetab = (event, index, key) => {
    const alljob = [...this.state.joblistings]
    alljob[index] = {
      ...alljob[index],
      isnametab: false,
      ispositiontab: false,
      ispersontab: false,
      isinfotab: false
    }

    alljob[index][key] = true
    this.setState({ joblistings: alljob })
  }

  // delete function
  deleteOneJob = (event, index, id) => {
    const { msgAlert } = this.props
    console.log(event, index, id)
    axios({
      url: `${apiUrl}/joblisting/${id}`,
      method: 'DELETE',
      headers: {
        'Authorization': `Token token=${this.state.user.token}`
      },
      // fix the pass of data
      joblisting: { owner: this.state.user._id }
    })
      .then(() => {
        msgAlert({
          heading: 'Deleted Successfully',
          messagE: messages.signOutSuccess,
          variant: 'danger'
        })
        this.getJobListing()
      })
  }

  updateOneJob = (event, index, id) => {
    this.setState({ modal: true })
  }

  getJobListing = () => {
    axios({
      url: `${apiUrl}/joblisting`,
      method: 'GET',
      headers: {
        'Authorization': `Token token=${this.state.user.token}`
      },
      // fix the pass of data
      joblisting: { owner: this.state.user._id }
    })
      .then(res => this.setState({
        joblistings: res.data.joblistings.map(x => {
          return {
            ...x,
            isnametab: true,
            ispositiontab: false,
            ispersontab: false,
            isinfotab: false
          }
        })
      }))
      // .then(res => console.log(res.data))
      .catch(console.log)
  }

  render () {
    console.log('user', this.props.user)
    console.log('response data:', this.state.joblisting)
    console.log('response:', this.state.joblisting)

    const jobLists = this.state.joblistings.map((joblist, i) => (
      // <Link key={joblist._id} to="#">
      <div className="row" key={joblist.id}>
        <div className="col-sm">
          <nav className="blue-grey mt-3 px-2">
            <div className="nav nav-tabs md-tabs" id="nav-tab" role="tablist">
              <span onClick={(e) => this.makeActivetab(e, i, 'isnametab')} className={joblist.isnametab ? 'nav-item nav-link active grey-text font-weight-bold' : 'nav-item nav-link grey-text font-weight-bold mx-1'} id="nav-home-tab" data-toggle="tab"
                aria-controls="nav-home" aria-selected="true">Company Name</span>
              <span onClick={(e) => this.makeActivetab(e, i, 'ispositiontab')} className={joblist.ispositiontab ? 'nav-item nav-link active grey-text font-weight-bold' : 'nav-item nav-link grey-text font-weight-bold mx-1'} id="nav-profile-tab" data-toggle="tab"
                aria-controls="nav-profile" aria-selected="false">Company Position</span>
              <span onClick={(e) => this.makeActivetab(e, i, 'ispersontab')} className={joblist.ispersontab ? 'nav-item nav-link active grey-text font-weight-bold' : 'nav-item nav-link grey-text font-weight-bold mx-1'} id="nav-contact-tab" data-toggle="tab"
                aria-controls="nav-contact" aria-selected="false">Person I spoke to</span>
              <span onClick={(e) => this.makeActivetab(e, i, 'isinfotab')} className={joblist.isinfotab ? 'nav-item nav-link active grey-text font-weight-bold' : 'nav-item nav-link grey-text font-weight-bold mx-1'} id="nav-info-tab" data-toggle="tab"
                aria-controls="nav-info" aria-selected="false">Company Info</span>
            </div>
          </nav>
          <div className="tab-content pt-3" id="nav-tabContent">
            {joblist.isnametab && <div className="tab-pane fade show active">
              <p>
                <b> {joblist.companyName} </b>
              </p>
            </div>}
            {joblist.ispositiontab && <div className="tab-pane fade show active">
              <p>
                <b>{joblist.companyPosition}</b>
              </p>
            </div>}
            {joblist.ispersontab && <div className="tab-pane fade show active">
              <p>
                <b>{joblist.companyPerson}</b>
              </p>
            </div>}
            {joblist.isinfotab && <div className="tab-pane fade show active">
              <p>
                {joblist.companyDate}
                <br></br>
                <b>{joblist.companyInfo}</b>
              </p>
            </div>}

          </div>
          <button onClick={(e) => this.deleteOneJob(e, i, joblist._id)} type="button" className="btn blue-grey">DELETE</button>
          <button onClick={(e) => this.updateOneJob(e, i, joblist._id)} type="button" className="btn teal darken-1">UPDATE</button>
        </div>
      </div>
      // </Link>
    ))
    return (
      <div>
        {this.state.modal &&
          <Popup toggle={this.updateOneJob} >
          </Popup>
        }
        <div className="my-joblisting">
          <h4> All job listing </h4>
          {jobLists}
        </div>
      </div>
    )
  }
}

export default JobListingView
