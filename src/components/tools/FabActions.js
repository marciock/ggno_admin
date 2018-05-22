import React,{Component} from 'react';

import {Button} from 'react-materialize';
import {Link} from 'react-router-dom';
class FabActions extends Component{
    constructor(){
        super();

        this.onClickEdit=this.onClickEdit.bind(this);
    }
    state=event=>{
        model:''
        url:''
    }
    onClickEdit=event=>{
        const loc='http://localhost/ggnomotor/modules/usuarios/services/edit.php';

        console.log(loc);
       return  this.setState({url:loc});

    }


    render(){
       
        return(
            <Button floating fab='vertical' faicon='fa fa-plus' icon="apps" className='red' large style={{bottom:'45px',right:'24px'}}>
                <Link  to={this.props.urlHome} ><Button floating  icon="home" className="blue"  /></Link>
                <Button floating  icon="delete" className="red" onClick=""  />
                <Button floating  icon="edit" className="orange" onClick={this.onClickEdit} />
                <Link  to={this.props.urlNew} ><Button floating  icon="add" className="green"  /></Link>

               
            </Button>
        )
    }
}

export default FabActions;


