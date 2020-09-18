import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import apiUrl from '../../apiConfig'

const JobListingEditForm = ({ match, user }) => {
  const [joblisting, setJoblisting] = useState({})
  const inputChange = event => {
    event.persist()
    setJoblisting(prevState => {
      const updatedField = { [event.target.name]: event.target.value }
      const editedEvents = Object.assign({}, prevState.joblisting, updatedField)
      return { joblisting: editedEvents }
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('joblisting event', joblisting)
    axios({
      url: `${apiUrl}/joblisting/${match.params.id}`,
      method: 'PATCH',
      headers: {
        'Authorization': `Token token=${user.token}`
      },
      // fix the pass of data
      data: joblisting
    })
      .then(res => console.log('response here', res))
      .catch(console.error)
  }

  return (
    <div className="row2">
      <div className="col-sm-10 col-md-8 mx-auto mt-5">
        <h3>Create a job listing </h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="title">
            <Form.Label>company Name</Form.Label>
            <Form.Control
              placeholder='Enter a company name'
              value={joblisting.companyName}
              name='companyName'
              onChange={inputChange}
            />
            <Form.Label>company Position</Form.Label>
            <Form.Control
              placeholder='Enter a company Position'
              value={joblisting.companyPosition}
              name='companyPosition'
              onChange={inputChange}
            />
            <Form.Label>company Person</Form.Label>
            <Form.Control
              placeholder='Enter a company Person'
              value={joblisting.companyPerson}
              name='companyPerson'
              onChange={inputChange}
            />
            <Form.Label>company Info</Form.Label>
            <Form.Control
              placeholder='Enter a company Info'
              value={joblisting.companyInfo}
              name='companyInfo'
              onChange={inputChange}
            />
            <Form.Label>company Date</Form.Label>
            <Form.Control
              placeholder='Date'
              value={joblisting.companyDate}
              name='companyDate'
              type='date'
              onChange={inputChange}
            />
            <Form.Label>company Replied</Form.Label>
            <Form.Control
              placeholder='Enter a company Replied'
              value={joblisting.companyReplied}
              name='companyReplied'
              onChange={inputChange}
            />
          </Form.Group>
          <Button varient="primary" type="submit">Submit</Button>
          <Link to="/my-events">
            <Button variant="secondary">Cancel</Button>
          </Link>
        </Form>
      </div>
    </div>
  )
}

export default withRouter(JobListingEditForm)
