import React, {Component} from 'react'

export default class DisplayData extends Component {

  formatData = () => {
   return `${this.props.formData.firstName} ${this.props.formData.lastName}`
  }

  render(){
    return (
      <p><this.formatData/></p>
    )
  }
}