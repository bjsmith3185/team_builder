import React, {Component} from 'react';  
import API from '../../utils/API';
import "./input.css";

/* Import Components */

export default class Input extends React.Component {
  state = {
    company: '',
    searchWords: '',
    input: ''
  }

change = (event) => {
  this.setState({
    [event.target.name]: event.target.value
  });
}

onSubmit = event => {
  event.preventDefault();
  
// this will remove spaces and ,'s from the searchwords input
  let searchWordsArray = [];
  searchWordsArray = this.state.searchWords.split(/[ ,]+/);
    console.log("this is the keywords array");
    console.log(searchWordsArray)
//----------------------------------------------

  API.addNewCompany({
    company: this.state.company,
    searchWords: searchWordsArray
  })
  .then(res => {
    console.log("this is the return for addNewCompany()")
    console.log(res.data)
    
  })
  .catch(err => console.log(err));
  console.log("hello I am showing up");


  this.setState({
    company: '',
    searchWords: '',
    input: ''
  })
}

render() {
  return (
  <div className="form-style">    
  <form> 
    <h1>Company</h1>
      <input
      name='company' 
      placeholder='"Company name"' 
      value={this.state.company} 
      onChange={event => this.change(event)} 
      />
      <br />
      <h1>What skills are you looking for?</h1>
       <input
      name='searchWords' 
      placeholder='"Keywords"' 
      value={this.state.searchWords} 
      onChange={event => this.change(event)}
      />
      <br />
      <input
      name='input' 
      placeholder='input' 
      value={this.state.input} 
      onChange={event => this.change(event)}
      />
      <br /> 
      <input
      name='company' 
      placeholder='company name' 
      value={this.state.company} 
      onChange={event => this.change(event)}
      />
      <br /> 

      <button onClick={this.onSubmit}>Submit</button>
    </form>
    </div> 
   );
 }
}
