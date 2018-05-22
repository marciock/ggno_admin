import React,{Component} from 'react';

import {Button} from 'react-materialize';
import {Link} from 'react-router-dom';
class FabPost extends Component{
        constructor(){
            super();

            //this.handleClick=this.handleClick.bind(this);
        }
       
    render(){
       
        return(
            <Button floating fab='vertical' faicon='fa fa-plus' icon="apps" className='red' large style={{bottom:'45px',right:'24px'}}>
                         
                  <Button floating  icon="check" className="green" type="submit"/>
                 <Link  to={this.props.url} ><Button floating  icon="cancel" className='red' /></Link>
                        
                   
               
            </Button>
        )
    }
}

export default FabPost;


