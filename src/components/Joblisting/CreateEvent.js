// import { render } from 'node-sass'
import React, { Component } from 'react'
import FormJoblisting from '../JoblistingForm/FormJoblisting'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { Redirect } from 'react-router-dom'

class Events extends Component {
  constructor (props) {
    super(props)
    // setup our initial state
    this.state = {
      // we have zero Events, until our API request has finished
      joblisting: {
        companyName: '',
        companyPosition: '',
        companyPerson: '',
        companyInfo: '',
        companyDate: '',
        companyReplied: ''
      },
      user: props.user,
      created: false
    }
  }

  inputChange = event => {
    event.persist()
    this.setState(prevState => {
      const updatedField = { [event.target.name]: event.target.value }
      const editedEvents = Object.assign({}, prevState.joblisting, updatedField)
      return { joblisting: editedEvents }
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    axios({
      url: `${apiUrl}/joblisting`,
      method: 'POST',
      headers: {
        'Authorization': `Token token=${this.state.user.token}`
      },
      // fix the pass of data
      data: { joblisting: this.state.joblisting }
    })
      .then(res => this.setState({ created: true }))
  }

  // componentDidMount () {
  //   // Make a request for all of the Events
  //   // const token = this.state.user ? `Token token=${this.state.user.token}` : ''
  //   axios({
  //     url: `${apiUrl}/userevents`,
  //     method: 'POST',
  //     headers: {
  //       'Authorization': `Token token=${this.state.user.token}`
  //     },
  //     // fix the pass of data
  //     data: { ownerEvent: this.state.user._id }
  //   })
  //     .then(res => this.setState({ events: res.data.events }))
  //     .catch(console.log)
  // }

  render () {
    // const { createdId } = this.state

    if (this.state.created) {
      return <Redirect to='/' />
    }
    // const events = this.state.events.map(event => (
    //   <Link key={event._id} to={`/events/${event._id}`}>
    //     <div className="card cardHover mb-4 card-body">
    //       <div className="card-header mb-4" >
    //         {event.title}
    //       </div>
    //       <div className="card-text mb-4">
    //         {event.description}
    //       </div>
    //       <div className="mb-4">
    //         Event Date: {moment(event.date).format('LLLL')}
    //       </div>
    //     </div>
    //   </Link>
    // ))
    return (
      <div className="my-Events">
        <h4 className="currentMyEvent">My Current Events</h4>
        <FormJoblisting joblisting={this.state.joblisting} handleChange={this.inputChange} handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}
export default Events
