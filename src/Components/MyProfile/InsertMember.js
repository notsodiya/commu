// import React, { Fragment, useState } from "react";
// import axios from "axios";
// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import InputGroup from 'react-bootstrap/InputGroup';

// function InsertMember(){

// const [firstname, setFirstName] = useState('');
// const [middlename, setMiddleName] = useState('');
// const [lastname, setLastName] = useState('');
// const [relationship, setRelationship] = useState('');
// const [dateOfBirth, setDateOfBirth] = useState('');
// const [bloodGroup, setBloodGroup] = useState('');
// const [maritalStatus, setMaritalStatus] = useState('');
// const [countrycode, setCountryCode] = useState('');
// const [phoneno, setPhoneNo] = useState('');
// const [gotra, setGotra] = useState('');
// const [nativePlace, setNativePlace] = useState('');
// const [emailid, setEmailId] = useState('');
// const [address1, setAddress1] = useState('');
// const [address2, setAddress2] = useState('');
// const [city, setCity] = useState('');
// const [state, setState] = useState('');
// const [country, setCountry] = useState('');
// const [pincode, setPincode] = useState('');


// const handleFirstNameChange =(value) => {
//     setFirstName(value);
// };
// const handleMiddleNameChange =(value) => {
//     setMiddleName(value); 
// };
// const handleLastNameChange =(value) => {
//     setLastName(value);
// };
// const handleCountryCodeChange =(value) => {
//     setCountryCode(value);
// };
// const handlePhoneNoChange =(value) => {
//     setPhoneNo(value);
// };
// const handleRelationshipChange =(value) => {
//     setRelationship(value);
// };
// const handleDateOfBirthChange =(value) => {
//   setDateOfBirth(value);
// };
// const handleEmailIdChange =(value) => {
//   setEmailId(value);
// };


// const handleBloodGroupChange =(value) => {
//   setBloodGroup(value);
// };


// const handleMaritalStatusChange =(value) => {
//   setMaritalStatus(value);
// };


// const handleGotraChange =(value) => {
//   setGotra(value);
// };


// const handleNativePlaceChange =(value) => {
//   setNativePlace(value);
// };


// const handleAddress1Change =(value) => {
//   setAddress1(value);
// };


// const handleAddress2Change =(value) => {
//   setAddress2(value);
// };


// const handleCityChange =(value) => {
//   setCity(value);
// };


// const handleCountryChange =(value) => {
//   setCountry(value);
// };
// const handleStateChange =(value) => {
//   setState(value);
// };
// const handlePincodeChange =(value) => {
//   setPincode(value);
// };


// const handleSave =() =>{
//     const data ={
//         FirstName:  firstname,
//         MiddleName: middlename,
//         LastName: lastname,
//         Relationship: relationship,
//         DateOfBirth: dateOfBirth,
//         BloodGroup: bloodGroup,
//         MaritalStatus: maritalStatus,
//         CountryCode: countrycode,
//         MobileNo: phoneno,
//         Gotra:gotra,
//         NativePlace: nativePlace,
//         Email: emailid,
//         Address1: address1,
//         Address2: address2,
//         City: city,
//         Coountry: country,
//         State: state,
//         Pincode: pincode,

//     };
// const url ='http://localhost:51294/api/InsFamilyMember';
//     axios.post(url, data).then((results) =>{
//         // if(results.data === 'Data inserted.')
//         // alert('data saved');
//         //else 
//     alert("Your Registed ");
//     window.location.href = '/login';
//     }).catch((error) =>{
//         alert(error);
//     })
    
// }
//     return(
    
//         <Fragment>
//     <Form>
//     <InputGroup className="mb-3">
//       <InputGroup.Text>Full Name</InputGroup.Text>
//       <Form.Control aria-label="First name" onChange={(e) => handleFirstNameChange(e.target.value)}/>
//       <Form.Control aria-label="Middle name" onChange={(e) => handleMiddleNameChange(e.target.value)}/>
//       <Form.Control aria-label="Last name" onChange={(e) => handleLastNameChange(e.target.value)}/>
//     </InputGroup>
//       <Row className="mb-3">
//         <Form.Group as={Col} controlId="formGridEmail">
//           <Form.Label>Email</Form.Label>
//           <Form.Control type="email" placeholder="Enter email" onChange={(e) => handleEmailIdChange(e.target.value)} />
//         </Form.Group>

//         <InputGroup className="mb-3">
//       <InputGroup.Text>Phone Number</InputGroup.Text>
//       <Form.Control aria-label="Country Code" onChange={(e) => handleCountryCodeChange(e.target.value)}/>
//       <Form.Control aria-label="Mobile NUmber" onChange={(e) => handlePhoneNoChange(e.target.value)}/>
//     </InputGroup>
//       </Row>

//       <Form.Group className="mb-3" controlId="formGridAddress1">
//         <Form.Label>Address 1</Form.Label>
//         <Form.Control placeholder="1234 Main St" onChange={(e) => handleAddress1Change(e.target.value)} />
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formGridAddress2">
//         <Form.Label>Address 2</Form.Label>
//         <Form.Control placeholder="Apartment, studio, or floor"  onChange={(e) => handleAddress2Change(e.target.value)}/>
//       </Form.Group>

//       <Row className="mb-3">
//         <Form.Group as={Col} controlId="formGridCity">
//           <Form.Label>City</Form.Label>
//           <Form.Control  onChange={(e) => handleCityChange(e.target.value)} />
//         </Form.Group>

//         <Form.Group as={Col} controlId="formGridState" >
//           <Form.Label>State</Form.Label>
//           <Form.Control onChange={(e) => handleStateChange(e.target.value)}/>
//         </Form.Group  >

//         <Form.Group as={Col} controlId="formGridState" >
//           <Form.Label>Country</Form.Label>
//           <Form.Control onChange={(e) => handleCountryChange(e.target.value)}/>
//         </Form.Group >

//         <Form.Group as={Col} controlId="formGridZip">
//           <Form.Label>Zip</Form.Label>
//           <Form.Control onChange={(e) => handlePincodeChange(e.target.value)}/>
//         </Form.Group>
//       </Row>

//       <Form.Group as={Col} controlId="formGridZip">
//           <Form.Label>Relationship</Form.Label>
//           <Form.Control onChange={(e) => handleRelationshipChange(e.target.value)}/>
//         </Form.Group>

//         <Form.Group as={Col} controlId="formGridZip">
//           <Form.Label>BloodGroup</Form.Label>
//           <Form.Control onChange={(e) => handleBloodGroupChange(e.target.value)}/>
//         </Form.Group>

//         <Form.Group as={Col} controlId="formGridZip">
//           <Form.Label>DAteofbirth</Form.Label>
//           <Form.Control onChange={(e) => handleDateOfBirthChange(e.target.value)}/>
//         </Form.Group>


//         <Form.Group as={Col} controlId="formGridZip">
//           <Form.Label>MaritalStatus</Form.Label>
//           <Form.Control onChange={(e) => handleMaritalStatusChange(e.target.value)}/>
//         </Form.Group>

//         <Form.Group as={Col} controlId="formGridZip">
//           <Form.Label>Gotra</Form.Label>
//           <Form.Control onChange={(e) => handleGotraChange(e.target.value)}/>
//         </Form.Group>

//         <Form.Group as={Col} controlId="formGridZip">
//           <Form.Label>NativePlace</Form.Label>
//           <Form.Control onChange={(e) => handleNativePlaceChange(e.target.value)}/>
//         </Form.Group>

//       <Form.Group className="mb-3" id="formGridCheckbox">
//         <Form.Check type="checkbox" label="Check me out" />
//       </Form.Group>

//       <Button variant="primary" type="submit" onChange={(e) => handleSave(e.target.value)}>
//         Submit
//       </Button>
//     </Form>


//         </Fragment>
//     )
// }
// 
// export default InsertMember;

// import React, { useState } from 'react';
// import axios from "axios";

// const InsertMember = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     middleName: '',
//     lastName: '',
//     relationship: '',
//     dateOfBirth: '',
//     bloodGroup: '',
//     maritalStatus: '',
//     countryCode: '',
//     mobileNo: '',
//     gotra: '',
//     nativePlace: '',
//     email: '',
//     address1: '',
//     address2: '',
//     city: '',
//     country: '',
//     pincode: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({ ...prevState, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you can perform further actions like sending the data to the server
//     console.log(formData);
//   };

// const url ='http://localhost:51294/api/InsFamilyMember';
//     axios.post(url, data).then((results) =>{
//         // if(results.data === 'Data inserted.')
//         // alert('data saved');
//         //else 
//     alert("Your Registed ");
//     window.location.href = '/login';
//     }).catch((error) =>{
//         alert(error);
//     })
//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         First Name:
//         <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
//       </label>

//       <label>
//         Middle Name:
//         <input type="text" name="middleName" value={formData.middleName} onChange={handleChange} />
//       </label>

//       <label>
//         Last Name:
//         <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
//       </label>

//       <label>
//         Relationship:
//         <input type="text" name="relationship" value={formData.relationship} onChange={handleChange} />
//       </label>

//       <label>
//         Date of Birth:
//         <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} />
//       </label>

//       <label>
//         Blood Group:
//         <input type="text" name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} />
//       </label>

//       <label>
//         Marital Status:
//         <input type="text" name="maritalStatus" value={formData.maritalStatus} onChange={handleChange} />
//       </label>

//       <label>
//         Country Code:
//         <input type="text" name="countryCode" value={formData.countryCode} onChange={handleChange} />
//       </label>

//       <label>
//         Mobile No:
//         <input type="tel" name="mobileNo" value={formData.mobileNo} onChange={handleChange} />
//       </label>

//       <label>
//         Gotra:
//         <input type="text" name="gotra" value={formData.gotra} onChange={handleChange} />
//       </label>

//       <label>
//         Native Place:
//         <input type="text" name="nativePlace" value={formData.nativePlace} onChange={handleChange} />
//       </label>

//       <label>
//         Email:
//         <input type="email" name="email" value={formData.email} onChange={handleChange} />
//       </label>

//       <label>
//         Address 1:
//         <input type="text" name="address1" value={formData.address1} onChange={handleChange} />
//       </label>

//       <label>
//         Address 2:
//         <input type="text" name="address2" value={formData.address2} onChange={handleChange} />
//       </label>

//       <label>
//         City:
//         <input type="text" name="city" value={formData.city} onChange={handleChange} />
//       </label>

//       <label>
//         Country:
//         <input type="text" name="country" value={formData.country} onChange={handleChange} />
//       </label>

//       <label>
//         Pincode:
//         <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} />
//       </label>
      
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default InsertMember;


//React.js Component (AddFamilyMemberPopup.js)

import React, { useState } from 'react';
import axios from 'axios';

const InsEducation = ({ onClose }) => {
    const [formData, setFormData] = useState({
      FamilyId: localStorage.getItem('FamilyId'),
      firstName: '',
      middleName: '',
      lastName: '',
      relationship: '',
      dateOfBirth: '',
      bloodGroup: '',
      maritalStatus: '',
      countryCode: '',
      mobileNo: '',
      gotra: '',
      nativePlace: '',
      email: '',
      address1: '',
      address2: '',
      city: '',
      state:'',
      country: '',
      pincode: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        try {
            await axios.post('http://localhost:51294/api/InsFamilyMember', formData);
            alert('Family member added successfully!');
            onClose(); // Close the popup
        } catch (error) {
            alert('Error occurred while adding family member');
            console.error(error);
        }
    };

    return (
        <div className="popup">
            <div className="popup-inner">
            <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
      </label>

      <label>
        Middle Name:
        <input type="text" name="middleName" value={formData.middleName} onChange={handleChange} />
      </label>

      <label>
        Last Name:
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
      </label>

      <label>
        Relationship:
        <input type="text" name="relationship" value={formData.relationship} onChange={handleChange} />
      </label>

      <label>
        Date of Birth:
        <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} />
      </label>

      <label>
        Blood Group:
        <input type="text" name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} />
      </label>

      <label>
        Marital Status:
        <input type="text" name="maritalStatus" value={formData.maritalStatus} onChange={handleChange} />
      </label>

      <label>
        Country Code:
        <input type="text" name="countryCode" value={formData.countryCode} onChange={handleChange} />
      </label>

      <label>
        Mobile No:
        <input type="tel" name="mobileNo" value={formData.mobileNo} onChange={handleChange} />
      </label>

      <label>
        Gotra:
        <input type="text" name="gotra" value={formData.gotra} onChange={handleChange} />
      </label>

      <label>
        Native Place:
        <input type="text" name="nativePlace" value={formData.nativePlace} onChange={handleChange} />
      </label>

      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>

      <label>
        Address 1:
        <input type="text" name="address1" value={formData.address1} onChange={handleChange} />
      </label>

      <label>
        Address 2:
        <input type="text" name="address2" value={formData.address2} onChange={handleChange} />
      </label>

      <label>
        City:
        <input type="text" name="city" value={formData.city} onChange={handleChange} />
      </label>

      <label>
        State:
        <input type="text" name="city" value={formData.state} onChange={handleChange} />
      </label>


      <label>
        Country:
        <input type="text" name="country" value={formData.country} onChange={handleChange} />
      </label>

      <label>
        Pincode:
        <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} />
      </label>
      
      <button type="submit">Submit</button>
    </form>
            </div>
        </div>
    );
};

export default InsEducation ;





