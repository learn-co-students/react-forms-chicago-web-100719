import React, { Component } from 'react'

export default class Form extends Component {
  // constructor() {
  //   super()
  //   console.log(this.props)
  // }

  render(){
    return (
      <div>
        <form>
          <p></p>
          <input type="text" onChange={event => this.props.handleFirstNameChange(event)} value={this.props.formData.firstName} />
          <input type="text" onChange={event => this.props.handleLastNameChange(event)} value={this.props.formData.lastName} />
        </form>
      </div>
    )
  }
}