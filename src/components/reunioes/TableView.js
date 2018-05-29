import React, { Component } from 'react';
import {Input} from 'react-materialize';

class TableView extends Component {

  constructor(){
    super();
    
  }
  render() {
    
    
    return (
        <div className="container">
          <table className="highlight">
            <thead>
              <tr>
                  <th> </th>
                  <th>Data</th>
                  <th>Assunto</th>
                  <th>Local</th>
                  <th>Inicio</th>
                  <th>Término</th>
              </tr>
            </thead>

            <tbody>

             { 
               this.props.data.map((f,i)=>{
               return ( <tr key={i}>
                <td><Input name='grop' type='radio' s={12} value={f.id_reunioescomites} label="" /></td>
                <td>{f.data}</td>
                <td>{f.assunto}</td>
                <td>{f.cidade}</td>
                <td>{f.hora_inicial}</td>
                <td>{f.hora_final}</td>
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
