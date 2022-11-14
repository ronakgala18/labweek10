import { useState } from 'react';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
const province= ["Alberta",
                "British Columbia",
                "Manitoba",
                "New Brunswick",
                "Newfoundland and Labrador",
                "Nova Scotia",
                "Ontario",
                "Prince Edward island",
                "Quebec",
                "Saskatchewan"]
function DataForm() {
    const INITIAL_VALUE={
        email: "",
        fullName: "",
        address: "",
        address2: "",
        city: "",
        province: "",
        postalCode: ""

    }
    
    var [data, setData] = React.useState(INITIAL_VALUE)
    const [displayText, setDisplayText] = useState('');
    const onSubmitLogin = (event) => {
       event.preventDefault();
       setDisplayText(data);
    }
 
    
    const onValueChange = (event) => {
        console.log(event.target.value)
        setData({...data,[event.target.name]: event.target.value
        })
    }
  return (
    <>
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" value={data.email} onChange={event => onValueChange(event)} placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="fullName" value={data.fullName} onChange={event => onValueChange(event)} placeholder="Full Name" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control name="address" value={data.address} onChange={event => onValueChange(event)} placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control name="address2" value={data.address2} onChange={event => onValueChange(event)} placeholder="Apartment, studio, or floor" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control name="city" value={data.city} onChange={event => onValueChange(event)}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Province</Form.Label>
          <Form.Select onChange={onValueChange} name="province" defaultValue="Choose...">
          <option>Choose...</option>
            {
                province.map(province => (
                <option key={province} value={province}>{province}</option>
                ))
            }
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Postal Code</Form.Label>
          <Form.Control name="postalCode" value={data.postalCode} onChange={event => onValueChange(event)}/>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3" controlId="formGridCheckbox">
        <Form.Check  onChange={event => onValueChange(event)} inline type="checkbox" label="Agree Terms and Conditions"/>

      </Form.Group>

      <Button variant="success" onClick={onSubmitLogin} type="submit">
        Submit
      </Button>

    </Form>
    <h2>Email: {displayText.email}</h2>
    <h2>Full Name: {displayText.fullName}</h2>
    <h2>Address: {displayText.address+ " "+ displayText.address2}</h2>
    <h2>City: {displayText.city}</h2>
    <h2>Province: {displayText.province}</h2>
    <h2>Postal Code: {displayText.postalCode}</h2>
    </>
  );
}
export default DataForm;