// import { render } from 'node-sass'
import React, { Component } from 'react'
import FormJoblisting from '../JoblistingForm/FormJoblisting'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { Redirect } from 'react-router-dom'
import messages from '../AutoDismissAlert/messages'

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

  render () {
    // const { createdId } = this.state

    if (this.state.created) {
      const { msgAlert } = this.props
      msgAlert({
        heading: 'Created Job listing successfully.',
        messagE: messages.signOutSuccess,
        variant: 'alert alert-info',
        class: 'alert alert-info'
      })
      return <Redirect to='/view-joblisting' />
    }
    return (
      <div className="my-Events">
        <FormJoblisting joblisting={this.state.joblisting} handleChange={this.inputChange} handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}
export default Events
