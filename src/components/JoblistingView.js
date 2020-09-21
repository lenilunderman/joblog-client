import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../apiConfig'
// import moment from 'moment'
import messages from './AutoDismissAlert/messages'
import Popup from './Popup'

class JobListingView extends Component {
  constructor (props) {
    super(props)
    this.state = {
      joblistings: [],
      user: this.props.user,
      searchTerm: '',
      modal: false
    }
  }
  // edit Search term function
  editSearchTerm = (e) => {
    this.setState({ searchTerm: e.target.value })
    this.dynamicSearch(e.target.value)
  }

  // dinamic searchTerm function
  // This function is what allows us to render what shows up onto the page dynamically.
  dynamicSearch = (str) => {
    axios({
      url: `${apiUrl}/joblisting/s/${str}`,
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
            isinfotab: false,
            isreplytab: false
          }
        })
      }))
      // .then(res => console.log(res.data))
      .catch(console.log(Error.response))
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
      isinfotab: false,
      isreplytab: false
    }

    alljob[index][key] = true
    this.setState({ joblistings: alljob })
  }

  // delete function
  deleteOneJob = (event, index, id) => {
    const { msgAlert } = this.props
    // console.log(event, index, id)
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
            isinfotab: false,
            isreplytab: false
          }
        })
      }))
      // .then(res => console.log(res.data))
      .catch(console.log)
  }

  render () {
    const jobLists = this.state.joblistings.map((joblist, i) => (
      // <Link key={joblist._id} to="#">
      <div className="row" key={joblist._id}>
        <div className="col-sm">
          <nav className="special-color mt-3 px-2">
            <div className="nav nav-tabs md-tabs" id="nav-tab" role="tablist">
              <span onClick={(e) => this.makeActivetab(e, i, 'isnametab')} className={joblist.isnametab ? 'nav-item nav-link active grey-text font-weight-bold blue-grey lighten-4' : 'nav-item nav-link grey-text font-weight-bold mx-1'} id="nav-home-tab" data-toggle="tab"
                aria-controls="nav-home" aria-selected="true">Company Name</span>
              <span onClick={(e) => this.makeActivetab(e, i, 'ispositiontab')} className={joblist.ispositiontab ? 'nav-item nav-link active grey-text font-weight-bold blue-grey lighten-4' : 'nav-item nav-link grey-text font-weight-bold mx-1'} id="nav-profile-tab" data-toggle="tab"
                aria-controls="nav-profile" aria-selected="false">Company Position</span>
              <span onClick={(e) => this.makeActivetab(e, i, 'ispersontab')} className={joblist.ispersontab ? 'nav-item nav-link active grey-text font-weight-bold blue-grey lighten-4' : 'nav-item nav-link grey-text font-weight-bold mx-1'} id="nav-contact-tab" data-toggle="tab"
                aria-controls="nav-contact" aria-selected="false">Person I spoke to</span>
              <span onClick={(e) => this.makeActivetab(e, i, 'isinfotab')} className={joblist.isinfotab ? 'nav-item nav-link active grey-text font-weight-bold blue-grey lighten-4' : 'nav-item nav-link grey-text font-weight-bold mx-1'} id="nav-info-tab" data-toggle="tab"
                aria-controls="nav-info" aria-selected="false">Company Info</span>
              <span onClick={(e) => this.makeActivetab(e, i, 'isreplytab')} className={joblist.isreplytab ? 'nav-item nav-link active grey-text font-weight-bold blue-grey lighten-4' : 'nav-item nav-link grey-text font-weight-bold mx-1'} id="nav-info-tab" data-toggle="tab"
                aria-controls="nav-info" aria-selected="false">Company Reply</span>

            </div>
          </nav>
          <div className="tab-content pt-3" id="nav-tabContent">
            {joblist.isnametab && <div className="tab-pane fade show active py-2">
              <p> <i className="fas fa-building fa-2x mr-3"></i>
                <b> {joblist.companyName} </b>
              </p>
            </div>}
            {joblist.ispositiontab && <div className="tab-pane fade show active py-2">
              <p> <i className="fas fa-business-time fa-2x mr-3"></i>
                <b>{joblist.companyPosition}</b>
              </p>
            </div>}
            {joblist.ispersontab && <div className="tab-pane fade show active py-2">
              <p> <i className="fas fa-users fa-2x mr-3"></i>
                <b>{joblist.companyPerson}</b>
              </p>
            </div>}
            {joblist.isinfotab && <div className="tab-pane fade show active py-2">
              <p>
                <i className="fas fa-calendar-alt fa-2x mr-3"></i> {joblist.companyDate} <i className="fas fa-address-card fa-2x mx-3"></i> <b>{joblist.companyInfo}</b>
              </p>
            </div>}
            {joblist.isreplytab && <div className="tab-pane fade show active py-2">
              <p> <i className="fas fa-building fa-2x mr-3"></i>
                <b> {joblist.companyReplied} </b>
              </p>
            </div>}

          </div>
          <button onClick={(e) => this.deleteOneJob(e, i, joblist._id)} type="button" className="btn red lighten-1 font-weight-bold btn-md">DELETE</button>
          <Link to={'/joblisting/' + joblist._id}><button type="button" className="btn light-blue darken-2 font-weight-bold btn-md"> UPDATE </button></Link>
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
          <h2 className="joblisting-title"> All Job Listings </h2>
          {/* <input
            value={this.state.searchTerm}
            onChange={this.editSearchTerm}
            placeholder="Search for a company name" className="searchBar"></input> */}
          {jobLists}
        </div>
      </div>
    )
  }
}

export default JobListingView
