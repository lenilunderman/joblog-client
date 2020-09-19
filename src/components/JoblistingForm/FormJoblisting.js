import React from 'react'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const JobListingForm = ({ joblisting, handleSubmit, handleChange }) => {
  return (
    <div className="row">
      <div className="col-sm-10 col-md-8 mx-auto mt-2 p-1">
        <h2 className="my-4 text-center">Create a job listing </h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="title">
            <Form.Label className="mt-4"> Company Name: </Form.Label>
            <Form.Control
              size="lg"
              placeholder='Enter a company name'
              value={joblisting.companyName}
              name='companyName'
              onChange={handleChange}
            />
            <Form.Label className="mt-4"> Company Position: </Form.Label>
            <Form.Control
              size="lg"
              placeholder='Enter a company position'
              value={joblisting.companyPosition}
              name='companyPosition'
              onChange={handleChange}
            />
            <Form.Label className="mt-4"> Company Person: </Form.Label>
            <Form.Control
              size="lg"
              placeholder='Enter the name of the employer you spoke to'
              value={joblisting.companyPerson}
              name='companyPerson'
              onChange={handleChange}
            />
            <Form.Label className="mt-4"> Company Information: </Form.Label>
            <Form.Control
              size="lg"
              placeholder='Enter a relevant information about this company'
              value={joblisting.companyInfo}
              name='companyInfo'
              onChange={handleChange}
            />
            <Form.Label className="mt-4"> Date I applied for the job: </Form.Label>
            <Form.Control
              size="lg"
              placeholder='Date'
              value={joblisting.companyDate}
              name='companyDate'
              type='date'
              onChange={handleChange}
            />
            <Form.Label> Company Reply: </Form.Label>
            <Form.Control
              size="lg"
              placeholder='Enter more information about company reply'
              value={joblisting.companyReplied}
              name='companyReplied'
              onChange={handleChange}
            />
          </Form.Group>
          <Button varient="primary" className="btn-lg" type="submit">Submit</Button>
          <Link to="/view-joblisting">
            <Button variant="" className="cancel-btn btn-lg"> Cancel </Button>
          </Link>
        </Form>
      </div>
    </div>
  )
}

export default JobListingForm
