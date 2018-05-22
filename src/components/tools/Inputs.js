import React, { Component } from 'react';

class Inputs extends Component {

    
        

  render(){
    
    
    return (

        <div className="input-field col s6">
            <input placeholder={this.props.placeHolder} id={this.props.id} type={this.props.type} className="validate" />
            <label for={this.props.id}>{this.props.label}</label>
        </div>
    )
  }
}
  

export default Inputs;
