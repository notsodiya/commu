import React, { Component } from 'react';
import logo from './Images/logo.jpg';
import '../Components/css/Home.css';
import img1 from './Images/img1.jpg';
import img2 from './Images/img2.jpg';
import img3 from './Images/img3.jpg';
//import Login from './Login';


import {
  BrowserRouter as Router,
  // Switch,
  // Route,
  // Link
} from "react-router-dom";
//import { useHistory } from "react-router-dom";
//import { useNavigate } from "react-router-dom";

export class NavbarCom extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }
  handleLogout() {
  window.location.href = '/';}
 
  render() {
   
   
    return (
      <Router>
        
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="/home">community connect</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
         
          <li class="nav-item">
            <a class="nav-link" href="/profile">Profile</a>
          </li>
                   
          <li class="nav-item">
            <a class="nav-link" href="/register">register</a>
          </li>
          
          <li class="nav-item">
            <a class="nav-link" href="/getallmembers">Community Members</a>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Ads
            </a>
            <ul class="dropdown-menu">
             
              <li><a class="dropdown-item" href="/showads">Advertise</a></li>
              <li><hr class="dropdown-divider"/></li>
              <li><a class="dropdown-item" href="/advertise">Add Advertise</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Education
            </a>
            <ul class="dropdown-menu">
             
              <li><a class="dropdown-item" href="/inserteducation">inserteducation</a></li>
              <li><hr class="dropdown-divider"/></li>
              <li><a class="dropdown-item" href="/education">education</a></li>
              <li><hr class="dropdown-divider"/></li>
              <li><a class="dropdown-item" href="/updateeducation"> update education</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Family Members
            </a>
            <ul class="dropdown-menu">
             
              <li><a class="dropdown-item" href="/insertmembers">insert familymembers</a></li>
              <li><hr class="dropdown-divider"/></li>
              <li><a class="dropdown-item" href="/showmembers">FamilyMembers</a></li>
            </ul>
          </li>
         
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Occupation
            </a>
            <ul class="dropdown-menu">
             
              <li><a class="dropdown-item" href="/showoccupation">showoccupation</a></li>
              <li><hr class="dropdown-divider"/></li>
              <li><a class="dropdown-item" href="/insertoccupation">Add occupation</a></li>
            </ul>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Events
            </a>
            <ul class="dropdown-menu">
             
              <li><a class="dropdown-item" href="/showevents">showoevents</a></li>
              <li><hr class="dropdown-divider"/></li>
              <li><a class="dropdown-item" href="/insertevents">Add events</a></li>
            </ul>
          </li>
         
         
        </ul>
        
          
          <button class="btn btn-outline-success" onClick={this.handleLogout}>Logout</button>
        
      </div>
    </div>
  </nav> 
    
    <div id="carouselExampleDark" class="carousel carousel-dark slide">
       
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <img src={img1} class="d-block w-100" alt="..."/>
           
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src={img2} class="d-block w-100" alt="..."/>
            
          </div>
          <div class="carousel-item">
            <img src={img3} class="d-block w-100" alt="..."/>
           
          </div>
          
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div> 
      <div class="card" className="text" style={{width: "18rem"}}>
  <img src={logo} class="card-img-top" alt="..."/>
  <div class="card-body">
    <a href="https://www.google.com/"><p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p></a>
  </div>
</div>              
    </Router>    
    )
  }
}

export default NavbarCom
