import React, { Fragment, useState } from "react";
import axios from "axios";
import logo from './Images/logo.jpg';
import img1 from './Images/img1.jpg';

function Register(){

const [firstname, setFirstName] = useState('');
const [middlename, setMiddleName] = useState('');
const [lastname, setLastName] = useState('');
const [countrycode, setCountryCode] = useState('');
const [phoneno, setPhoneNo] = useState('');
const [emailid, setEmailId] = useState('');
const [password, setPassword] = useState('');

const handleFirstNameChange =(value) => {
    setFirstName(value);
};
const handleMiddleNameChange =(value) => {
    setMiddleName(value); 
};
const handleLastNameChange =(value) => {
    setLastName(value);
};
const handleCountryCodeChange =(value) => {
    setCountryCode(value);
};
const handlePhoneNoChange =(value) => {
    setPhoneNo(value);
};
const handleEmailIdChange =(value) => {
    setEmailId(value);
};
const handlePasswordChange =(value) => {
    setPassword(value);
};


const handleSave =() =>{
    const data ={
        FirstName:  firstname,
        MiddleName: middlename,
        LastName: lastname,
        CountryCode: countrycode,
        MobileNo: phoneno,
        Email: emailid,
        Password: password,
    };
const url ='http://localhost:51294/api/Register';
    axios.post(url, data).then((results) =>{
        // if(results.data === 'Data inserted.')
        // alert('data saved');
        //else 
    alert("Your Registed ");
    window.location.href = '/login';
    }).catch((error) =>{
        alert(error);
    })
    
}
    return(
    
        <Fragment>
<section class="bg-light p-3 p-md-4 p-xl-5">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-xxl-11">
        <div class="card border-light-subtle shadow-sm">
          <div class="row g-0">
            <div class="col-12 col-md-6">
              <img class="img-fluid rounded-start w-100 h-100 object-fit-cover" loading="lazy" src={img1} alt="Welcome back you've been missed!"/>
            </div>
            <div class="col-12 col-md-6 d-flex align-items-center justify-content-center">
              <div class="col-12 col-lg-11 col-xl-10">
                <div class="card-body p-3 p-md-4 p-xl-5">
                  <div class="row">
                    <div class="col-12">
                      <div class="mb-5">
                        <div class="text-center mb-4">
                          <a href="#!">
                            <img src={logo} alt="BootstrapBrain Logo" width="100" height="100"/>
                          </a>
                        </div>
                        <h2 class="h4 text-center">Registration</h2>
                      </div>
                    </div>
                  </div>
                  
                  <form action="#!">
                    <div class="row gy-3 overflow-hidden">
                      <div class="col-12">
                        <div class="form-floating mb-3">
                          <input type="text" class="form-control" name="firstName" id="txtFirstName" placeholder="First Name" required
                           onChange={(e) => handleFirstNameChange(e.target.value)}/>
                          <label for="firstName" class="form-label">First Name</label>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-floating mb-3">
                          <input type="text" class="form-control" name="middleName" id="txtMiddleName" placeholder="Middle Name" required
                           onChange={(e) => handleMiddleNameChange(e.target.value)}/>
                          <label for="firstName" class="form-label">Middle Name</label>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-floating mb-3">
                          <input type="text" class="form-control" name="lastName" id="txtLastName" placeholder="Last Name" required
                          onChange={(e) => handleLastNameChange(e.target.value)} />
                          <label for="lastName" class="form-label">Last Name</label>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-floating mb-3">
                          <input type="number" class="form-control" name="countrycode" id="txtCountryCode" placeholder="Country Code" required
                          onChange={(e) => handleCountryCodeChange(e.target.value)} />
                          <label for="countrycode" class="form-label">Country Code</label>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-floating mb-3">
                          <input type="number" class="form-control" name="mobilenumber" id="txtPhoneNo" placeholder="Phone Number" required
                          onChange={(e) => handlePhoneNoChange(e.target.value)} />
                          <label for="phoneno" class="form-label">Mobile Number</label>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-floating mb-3">
                          <input type="email" class="form-control" name="email" id="txtEmail" placeholder="name@example.com" required
                          onChange={(e) => handleEmailIdChange(e.target.value)}/>
                          <label for="email" class="form-label">Email</label>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-floating mb-3">
                          <input type="password" class="form-control" name="password" id="txtPassword"  placeholder="Password" required
                          onChange={(e) => handlePasswordChange(e.target.value)}/>
                          <label for="password" class="form-label">Password</label>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" name="iAgree" id="iAgree" required/>
                          <label class="form-check-label text-secondary" for="iAgree">
                            I agree to the <a href="#!" class="link-primary text-decoration-none">terms and conditions</a>
                          </label>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="d-grid">
                          <button class="btn btn-dark btn-lg" type="submit"  onClick={() => handleSave() }>Sign up</button>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div class="row">
                    <div class="col-12">
                      <p class="mb-0 mt-5 text-secondary text-center">Already have an account? <a href="/login" class="link-primary text-decoration-none">Sign in</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


        </Fragment>
    )
}

export default Register;

