import React, {Component} from 'react';  
import API from '../../utils/API';
import "./ModifyLogin.css";

/* Import Components */

export default class ModifyLogin extends React.Component {
  state = {
    
  }

change = (event) => {
  this.setState({
    [event.target.name]: event.target.value
  });
}

onSubmit = event => {
  event.preventDefault();
 
}

render() {
  return (
  <div >    
    <br/>
    <br/>
    <br/>
    <br/>
    <h2>This page will allow the user to add/modify the login and password</h2>
  
    </div> 
   );
 }
}
