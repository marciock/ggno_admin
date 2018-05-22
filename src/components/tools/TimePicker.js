import React,{Component} from 'react';


class TimePicker extends Component{
   
    render(){
       
        return(
        
        <div className="col s12">
            <label>{this.props.label}</label>
            <input type="time"/>
        </div>
        )
    }

}

export default TimePicker;

