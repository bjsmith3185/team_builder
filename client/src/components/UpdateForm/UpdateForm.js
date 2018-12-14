import React, { Component } from "react";
import Input from "../Form/index";


const UpdateForm = (props) => (

  <div>
    <p>Update Form for: {props.teamName}</p>
    <br />
    <br />
    <form>

<br />
<div>What is the teams name?</div>
<input
  name='teamName'
  placeholder='"Team name"'
  value={this.state.teamName}
  onChange={event => this.change(event)}
/>
<br />
<div>When will the team begin?</div>
<input
  name='teamStartDate'
  placeholder='"start date"'
  value={this.state.teamStartDate}
  onChange={event => this.change(event)}
/>
<br />
<div>When will the team end?</div>
<input
  name='teamEndDate'
  placeholder='"end date"'
  value={this.state.teamEndDate}
  onChange={event => this.change(event)}
/>
<br />


<div>Who is the team manager?</div>
<input
  name='manager'
  placeholder='"Team Manager"'
  value={this.state.manager}
  onChange={event => this.change(event)}
/>
<br />
<h3 className="text-center">What coding skill are required?</h3>
<br />

<div className="row">
  <div className="col-3"></div>
  <div className="col-3">
    <label for="language_1">Language</label>
    <br />
    <input
      name='language_1'
      placeholder='language'
      value={this.state.language_1}
      onChange={event => this.change(event)}
    />
  </div>

  <div className="col-3">
    <label for="skill_1">Skill</label>
    <br />
    <input
      name='skill_1'
      placeholder='skill'
      value={this.state.skill_1}
      onChange={event => this.change(event)}
    />
  </div>
</div>

<div className="row">
  <div className="col-3"></div>
  <div className="col-3">
    {/* <label for="language_2">Language</label> */}
    <br />
    <input
      name='language_2'
      placeholder='language'
      value={this.state.language_2}
      onChange={event => this.change(event)}
    />
  </div>

  <div className="col-3">
    {/* <label for="skill_2">skill</label> */}
    <br />
    <input
      name='skill_2'
      placeholder='skill'
      value={this.state.skill_2}
      onChange={event => this.change(event)}
    />
  </div>
</div>

<div className="row">
  <div className="col-3"></div>
  <div className="col-3">
    {/* <label for="language_1">Language</label> */}
    <br />
    <input
      name='language_3'
      placeholder='language'
      value={this.state.language_3}
      onChange={event => this.change(event)}
    />
  </div>

  <div className="col-3">
    {/* <label for="skill_3">skill</label> */}
    <br />
    <input
      name='skill_3'
      placeholder='skill'
      value={this.state.skill_3}
      onChange={event => this.change(event)}
    />
  </div>
</div>

<div className="row">
  <div className="col-3"></div>
  <div className="col-3">
    {/* <label for="language_4">Language</label> */}
    <br />
    <input
      name='language_4'
      placeholder='language'
      value={this.state.language_4}
      onChange={event => this.change(event)}
    />
  </div>

  <div className="col-3">
    {/* <label for="skill_4">skill</label> */}
    <br />
    <input
      name='skill_4'
      placeholder='skill'
      value={this.state.skill_4}
      onChange={event => this.change(event)}
    />
  </div>
</div>

<div className="row">
  <div className="col-3"></div>
  <div className="col-3">
    {/* <label for="language_5">Language</label> */}
    <br />
    <input
      name='language_5'
      placeholder='language'
      value={this.state.language_5}
      onChange={event => this.change(event)}
    />
  </div>

  <div className="col-3">
    {/* <label for="skill_5">skill</label> */}
    <br />
    <input
      name='skill_5'
      placeholder='skill'
      value={this.state.skill_5}
      onChange={event => this.change(event)}
    />
  </div>
</div>


<br />

<button onClick={this.onSubmit}>Submit</button>
</form>
  </div>
);

export default UpdateForm;


