import React, { Component } from 'react';
import {Input} from 'react-materialize';

class TableView extends Component {

     

        

  render() {
    
    
    return (
        <div className="container">
          <table className="highlight">
            <thead>
              <tr>
                  <th> </th>
                  <th>Chave</th>
                  <th>Nome</th>
                  <th>Gestão</th>
                  <th>IP</th>
              </tr>
            </thead>

            <tbody>

             { 
               this.props.data.map((f,i)=>{
               return ( <tr key={i}>
                <td><Input name='grop' type='radio' s={12} value={f.chave} label="" /></td>
                <td>{f.chave}</td>
                <td>{f.nome}</td>
                <td>{f.gestao}</td>
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
