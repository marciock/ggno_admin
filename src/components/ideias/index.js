import React, { Component } from 'react';
import TableView from './TableView';
import Fab from '../tools/Fab';
//import NavBar from '../tools/NavBar';


//import 'materialize-css/dist/materialize.min.js'
class Ideias extends Component {
  constructor(){
    super();
   
   
    this.data=[
        { 
            'nome':'Joao Vieira Das Couves',
            'chave':'S00999',
            'gestao':'Documentos',
            'ip':'10.6.118.3'
        },
        {
          'nome':'Marinalvo Das Neves',
          'chave':'S00088',
          'gestao':'Inidcadores',
          'ip':'10.6.118.3'
      }
    ]
    this.fab=[
      {
        'icon':'delete',
        'url':'/ideias',
        'color':'orange',
        'component':''
      },
      {
        'icon':'edit',
        'url':'/ideias/edit',
        'color':'red'
      },
      {
        'icon':'add',
        'url':'/ideias/new',
        'color':'green'
      },
    ]
    
  }
  render() {
   
    return (
      <div >
    
      <div className="container">
        <h3 >Ideias</h3>
     
        <TableView data={this.data} />
        <Fab data={this.fab}/>
        </div>
      </div>
  
  
    );
  }
}

export default Ideias;
