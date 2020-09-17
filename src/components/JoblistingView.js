import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../apiConfig'
// import moment from 'moment'
// import messages from './AutoDismissAlert/messages'

class JobListingView extends Component {
  constructor (props) {
    super(props)
    this.state = {
      joblistings: [],
      user: this.props.user
    }
  }
  componentDidMount () {
    // get the data that will be displayed on the screen...
    axios({
      url: `${apiUrl}/joblisting`,
      method: 'GET',
      headers: {
        'Authorization': `Token token=${this.state.user.token}`
      },
      // fix the pass of data
      joblisting: { owner: this.state.user._id }
    })
      .then(res => this.setState({ joblistings: res.data.joblistings }))
      // .then(res => console.log(res.data))
      .catch(console.log)
  }

  render () {
    console.log('user', this.props.user)
    console.log('response data:', this.state.joblisting)
    console.log('response:', this.state.joblisting)
    const jobLists = this.state.joblistings.map(joblist => (
      <Link key={joblist._id} to="#">
        <div>
          <p>Company Name: {joblist.companyName} </p>
          <p>Company Position: {joblist.companyPosition} </p>
          <p>Company Person: {joblist.companyPerson} </p>
          <p>Company Info: {joblist.companyInfo} </p>
          <p>Company Date: {joblist.companyDate} </p>
          <p>Company Replied: {joblist.companyReplied} </p>
        </div>
      </Link>
    ))
    return (
      <div className="my-joblisting">
        <h4> All events goes here </h4>
        {jobLists}
      </div>
    )
  }
}

export default JobListingView
