import React from 'react'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const JobListingForm = ({ joblisting, handleSubmit, handleChange }) => {
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
              onChange={handleChange}
            />
            <Form.Label>company Position</Form.Label>
            <Form.Control
              placeholder='Enter a company Position'
              value={joblisting.companyPosition}
              name='companyPosition'
              onChange={handleChange}
            />
            <Form.Label>company Person</Form.Label>
            <Form.Control
              placeholder='Enter a company Person'
              value={joblisting.companyPerson}
              name='companyPerson'
              onChange={handleChange}
            />
            <Form.Label>company Info</Form.Label>
            <Form.Control
              placeholder='Enter a company Info'
              value={joblisting.companyInfo}
              name='companyInfo'
              onChange={handleChange}
            />
            <Form.Label>company Date</Form.Label>
            <Form.Control
              placeholder='Date'
              value={joblisting.companyDate}
              name='companyDate'
              type='date'
              onChange={handleChange}
            />
            <Form.Label>company Replied</Form.Label>
            <Form.Control
              placeholder='Enter a company Replied'
              value={joblisting.companyReplied}
              name='companyReplied'
              onChange={handleChange}
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

export default JobListingForm
