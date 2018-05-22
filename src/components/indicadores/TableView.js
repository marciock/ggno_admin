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
                  <th>Título</th>
                  
                  <th>mes/ano</th>
                  <th>Indicador</th>
              </tr>
            </thead>

            <tbody>

             { 
               this.props.data.map((f,i)=>{
               return ( <tr key={i}>
                <td><Input name='grop' type='radio' s={12} value={f.id_indicadores} label="" /></td>
                <td>{f.titulo}</td>
                <td>{f.mes}/{f.ano}</td>
                <td><a href={f.arquivo} >Visualizar</a></td>
                
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
