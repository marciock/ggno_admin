import React, { Component } from 'react';
import {Input,Row} from 'react-materialize';
//import NavBar from '../tools/NavBar';
import Fab from '../tools/Fab';
import '../tools/Icons.css';
//import $ from 'jquery';

import DataPicker from '../tools/DatePicker';


class New extends Component {

  constructor(){
    super();
    this.fab=[
      {
        'icon':'check',
        'url':'/ideias/new:save',
        'color':'green',
       
      },
      {
        'icon':'cancel',
        'url':'/ideias/',
        'color':'red'
      },
      
    ]
    
  }

  render() {
    
    
    return (
      <div>
     
        <div className="container">
           <h3> Nova Ideia</h3>
              <Row>
               <Input  s={12} label="Chave" />
               <Input  s={12}label="Nome Completo" />
               <Input  s={12}  label="Título" />
               <Input  type="textarea" s={12} label="Descrição" /> 
                <DataPicker labe="Data" />
             </Row>
           
        </div>
        <Fab data={this.fab} />
       
     </div>
    );
  }
}

export default New;
