import React,{Component} from 'react';

import {Button} from 'react-materialize';
import {Link} from 'react-router-dom';
class Fab extends Component{
    
    render(){
       
        return(
            <Button floating fab='vertical' faicon='fa fa-plus' icon="apps" className='red' large style={{bottom:'45px',right:'24px'}}>
                {
                        this.props.data.map((f,i)=>{
                            return  <Link key={i} to={f.url} ><Button floating  icon={f.icon} className={f.color} onClick={f.onClick} /></Link>
                        })
                    }
               
            </Button>
        )
    }
}

export default Fab;


