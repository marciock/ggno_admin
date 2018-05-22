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
                  <th>titulo</th>
                  <th>data</th>
                  
              </tr>
            </thead>

            <tbody>

             { 
               this.props.data.map((f,i)=>{
               return ( <tr key={i}>
                <td><Input name='grop' type='radio' s={12} value={f.id_noticias} label="" /></td>
                <td>{f.chave}</td>
                <td>{f.titulo}</td>
                <td>{f.data}</td>
                
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
