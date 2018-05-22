import React,{Component} from 'react';


class DatePicker extends Component{
   
    render(){
       
        return(
        
        <div className="col s12">
            <label>{this.props.label}</label>
            <input type="date"/>
        </div>
        )
    }

}

export default DatePicker




 