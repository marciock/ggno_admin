import React,{Component} from 'react';
import {Input} from 'react-materialize';



class CheckList extends Component{

    render(){

        return (
            <div>
                <label>{this.props.label} </label>
                {
                    
                    this.props.data.map((f,i)=>{
                        return <Input key={i} name={this.props.name} type='checkbox' s={12} value={f.id} label={f.titulo} />
                    })
                }
            
           </div>
        )
    }
}

export default CheckList;