import React, { Component } from 'react'
import Form from './Form'
import DisplayData from './DisplayData'

export default class ParentComponent extends Component {
  constructor(){
    super()
    this.state = {
      firstName: "",
      lastName: ""
    }
    console.log(this.state)
  }
  // state = {
  //   firstName: "",
  //   lastName: ""
  // }

  handleFirstNameChange = event => {
    this.setState({
      firstName: event.target.value
    }, () => console.log(this.state))
  }

  handleLastNameChange = event => {
    this.setState({
      lastName: event.target.value
    })
  }

  render(){
    return (
      <div>
        <Form formData={this.state} handleFirstNameChange={this.handleFirstNameChange} handleLastNameChange={this.handleLastNameChange} />
      </div>
    )
  }
}