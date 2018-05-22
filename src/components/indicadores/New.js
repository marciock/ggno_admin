import React, { Component } from 'react';
import {Input,Row} from 'react-materialize';
import axios from 'axios';
import FabPost from '../tools/FabPost';
import '../tools/Icons.css';
//import $ from 'jquery';

import DatePiker from '../tools/DatePicker';

class New extends Component {

  constructor(){
    super();
    this.fab=[
      {
        'icon':'check',
        'url':'/indicadores/new',
        'color':'green',
       
      },
      {
        'icon':'cancel',
        'url':'/indicadores/',
        'color':'red'
      },
      
    ]

    this.handleSubmit=this.handleSubmit.bind(this);
  }
    
  handleSubmit=event=>{
    event.preventDefault();
      

    const myFile=document.getElementById('arquivo').files[0];
    const descricao=document.getElementById('descricao').value;
    const titulo=document.getElementById('titulo').value;
    
     
    const mes=document.getElementById('mes').value;
    const ano=document.getElementById('ano').value;
   
    let formData =new FormData();
       
        formData.append('titulo',titulo);
        formData.append('descricao',descricao);
        formData.append('mes',mes);
        formData.append('ano',ano);
        formData.append('arquivo',myFile);
    //console.log(tipo);
    
    //npm const data=this.state.author;

      axios.post('http://localhost/ggnomotor/modules/indicadores/services/Insert.php',formData,{
        headers:{
          'Content-type':'multipart/form-data'
        }
      }).then(res=>{
        console.log(res);
        console.log(res.data);

       alert('Salvos com Sucesso');

    //   chave.value="";
    //  /  titulo.value="";
      // const local=window.location.host;
        //window.location.href=`${local}#/documentos`;
        
      }).catch(function (error) {
        console.log(error);
    })
  }

  render() {
    
    
    return (
      <div>
       <form onSubmit={this.handleSubmit} >
        <div className="container">
         
           <h3> Novo Indicador</h3>

              <Row>

               <Input  s={12} label="Título"  name="titulo" id="titulo"/>
              <Input s={12} type="textarea" label="Descrição" name="descricao" id="descricao" />
              
              <Input s={4} type="number" label="Mês" name="mes" id="mes" />
              <Input s={4} type="number" label="Ano" name="ano" id="ano" />
              </Row>
              <Row>
               <label>Arquivo do Indicador </label>
               <Input   type="file" s={12} label="" name="arquivo" id="arquivo"/>
              </Row>
         
        </div>
        <FabPost url="/indicadores" />
        </form>
     </div>
    );
  }
}

export default New;
