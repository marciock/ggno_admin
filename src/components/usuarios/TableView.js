import React, { Component } from 'react';
import {Input} from 'react-materialize';

class TableView extends Component {
  constructor(){
    super();

  // this.onClick=this.onClick.bind(this);

  this.myBox='';
   
  }
     

        
  state={
    myId:''
  }
 
  oncallbackParent=event=>{
    this.setState({myId:event.target.value});

    console.log(event.target.value);
     
      return event.target.value;
    
  }
  render() {
    
    
    return (
        <div className="container">
          <table className="striped">
            <thead>
              <tr>
                  <th> </th>
                  <th>Chave</th>
                  <th>Nome</th>
                 
                  <th>IP</th>
              </tr>
            </thead>

            <tbody>

             { 
               this.props.data.map((f,i)=>{
               return ( <tr key={i} >
                <td><Input name='group' type='radio' class="with-gap" value={f.id_usuarios} s={12}  label="" onClick={this.oncallbackParent} /></td>
                
                <td>{f.id_usuarios}</td>
                <td>{f.nome}</td>
               
                <td>{f.ip}</td>
              </tr>)
               })
             
                
             }
          </tbody>
          </table> 
      </div>
    );
  }
}

export default TableView;
