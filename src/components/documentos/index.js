import React, { Component } from 'react';
import TableView from './TableView';
import FabActions from '../tools/FabActions';
import axios from 'axios';

class Documentos extends Component {
  constructor(){
    super();
   
   
    

  
    this.fab=[
      {
        'icon':'delete',
        'url':'/documentos',
        'color':'orange',
        'component':''
      },
      {
        'icon':'edit',
        'url':'/documentos/edit',
        'color':'red'
      },
      {
        'icon':'add',
        'url':'/documentos/new',
        'color':'green'
      },
    ]
    
  }
  state={
    documentos:[]
  }
  componentDidMount(){
      axios.get('http://localhost/ggnomotor/modules/documentos/services/Lista.php',{
        headers:{'Acces-Control-Allow-Origin':'*','Content-Type':'application/json'},
        responseType:'json',
      }).then(res=>{

          console.log(res.data)
        this.setState({documentos:res.data});
          
      });
    
  }
  render() {
   
    return (
      <div >
    
      <div className="container">
        <h3 >Documentos</h3>
     
        <TableView data={this.state.documentos} />
        <FabActions urlNew="/documentos/new"
        urlHome="/"/>
        </div>
      </div>
  
  
    );
  }
}

export default Documentos;
