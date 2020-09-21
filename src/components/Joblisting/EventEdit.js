import React, { useState, useEffect } from 'react'
import { Link, withRouter, Redirect } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import messages from '../AutoDismissAlert/messages'

const JobListingEditForm = ({ match, user, msgAlert }) => {
  // runs when the component appears (is created and inserted into DOM)
  const [joblisting, setJoblisting] = useState({
    companyName: '',
    companyPosition: '',
    companyPerson: '',
    companyInfo: '',
    companyDate: '',
    companyReplied: ''
  })
  const [updated, setUpdated] = useState(false)
  // tests here
  useEffect(() => {
    axios({
      url: `${apiUrl}/joblisting/${match.params.id}`,
      method: 'GET',
      headers: {
        'Authorization': `Token token=${user.token}`
      },
      // fix the pass of data
      data: joblisting
    })
      .then(res => setJoblisting(res.data.joblisting))
      .catch(console.error)
  }, [])
  // end of test

  const inputChange = event => {
    event.persist()
    setJoblisting(prevState => {
      const updatedField = { [event.target.name]: event.target.value }
      const editedEvents = Object.assign({}, prevState.joblisting, updatedField)
      // const editedEvents = Object.assign({}, prevState.joblisting, updatedField)
      return { joblisting: editedEvents }
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // console.log('joblisting event', joblisting)
    axios({
      url: `${apiUrl}/joblisting/${match.params.id}`,
      method: 'PATCH',
      headers: {
        'Authorization': `Token token=${user.token}`
      },
      // fix the pass of data
      data: joblisting
    })
      .then(() => setUpdated(true))
      // .then(res => console.log('response here', res))
      .catch(console.error)
  }

  if (updated) {
    msgAlert({
      heading: 'You updated a job listing successfully.',
      messagE: messages.signOutSuccess,
      variant: 'success'
    })
    return <Redirect to={'/view-joblisting'} />
  }

  return (
    <div className="row">
      <div className="col-sm-10 col-md-8 mx-auto p-1">
        <h2 className="my-4 text-center">Update a job listing </h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="title">
            <Form.Label className="mt-2"> Company Name: </Form.Label>
            <Form.Control
              size="lg"
              placeholder='Enter a company name'
              value={joblisting.companyName}
              name='companyName'
              onChange={inputChange}
            />
            <Form.Label className="mt-2"> Company Position: </Form.Label>
            <Form.Control
              size="lg"
              placeholder='Enter a company position'
              value={joblisting.companyPosition}
              name='companyPosition'
              onChange={inputChange}
            />
            <Form.Label className="mt-2"> Company Person: </Form.Label>
            <Form.Control
              size="lg"
              placeholder='Enter the name of the person you spoke to'
              value={joblisting.companyPerson}
              name='companyPerson'
              onChange={inputChange}
            />
            <Form.Label className="mt-2"> Company Information: </Form.Label>
            <Form.Control
              size="lg"
              placeholder='Enter a relevant information about this company'
              value={joblisting.companyInfo}
              name='companyInfo'
              onChange={inputChange}
            />
            <Form.Label className="mt-2"> Date I applied for the job: </Form.Label>
            <Form.Control
              size="lg"
              placeholder='Enter a Date'
              value={joblisting.companyDate}
              name='companyDate'
              type='date'
              onChange={inputChange}
            />
            <Form.Label className="mt-2"> Company Replied: </Form.Label>
            <Form.Control
              size="lg"
              placeholder='Did the company replied? What is the status of this application'
              value={joblisting.companyReplied}
              name='companyReplied'
              onChange={inputChange}
            />
          </Form.Group>
          <Button varient="btnSignUp" className="btn-lg" type="submit">Submit</Button>
          <Link to="/view-joblisting">
            <Button variant="" className="cancel-btn btn-lg">Cancel</Button>
          </Link>
        </Form>
      </div>
    </div>
  )
}

export default withRouter(JobListingEditForm)
