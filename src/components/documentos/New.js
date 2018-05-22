import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Input,Row} from 'react-materialize';
//import NavBar from '../tools/NavBar';
import FabPost from '../tools/FabPost';
import '../tools/Icons.css';


//import DatePicker from '../tools/DatePicker';
import axios from 'axios';


class New extends Component {

  constructor(){
    super();

    
   

    this.setores=[
      {
        'value':'1',
        'title':'Planejamento'
      },
      {
        'value':'2',
        'title':'Clientes'
      },
      {
        'value':'3',
        'title':'Gerência'
      },
      {
        'value':'4',
        'title':'Redes'
      },
      {
        'value':'5',
        'title':'Industrial'
      }
     
    ]
    this.tipoAquivo=[
      {
        'id':'1',
        'title':'Microsoft Word',
        'value':'doc'
      },
      {
        'id':'2',
        'title':'LibreOffice Write',
        'value':'odt'
      },
      {
        'id':'3',
        'title':'Microsoft Excel',
        'value':'xls'
      },
      {
        'id':'4',
        'title':'LibreOffice Calc',
        'value':'ods'
      },
      {
        'id':'5',
        'title':'PDF',
        'value':'pdf'
      },
      {
        'id':'6',
        'title':'Imagem',
        'value':'jpg'
      },
      {
        'id':'7',
        'title':'Microsoft PowerPoint',
        'value':'ppt'
      },

     
    ]
   // this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    
  }
  
  
  handleSubmit=event=>{
    event.preventDefault();
      

    const myFile=document.getElementById('arquivo').files[0];
    const chave=document.getElementById('chave').value;
    const titulo=document.getElementById('titulo').value;
    
     
    const setor=document.getElementById('setor').value;
    const tipo=document.getElementById('tipo').value;
   
    let formData =new FormData();
        formData.append('chave',chave);
        formData.append('titulo',titulo);
        formData.append('tipo',tipo);
        formData.append('setor',setor);
        formData.append('arquivo',myFile);
    console.log(tipo);
    
    //npm const data=this.state.author;

      axios.post('http://localhost/ggnomotor/modules/documentos/services/Insert.php',formData,{
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
           <h3> Novo Documento</h3>
           
              <Row>
              <Input placeholder="" s={12} label="Chave" name="chave"  id="chave"/>
              <Input placeholder="" s={12} label="Titulo do Documento"  name="titulo" id="titulo"/>
              <Input type="select" label="Tipo de arquivos" name="tipo" id="tipo" className="browser-default" s={12}>
                {
                  this.tipoAquivo.map((f,i)=>{
                    return <option key={f.value} value={f.value} >{f.title}</option>
                  })
                }
              </Input>
              
              <Input type="select" label="Setor" name="setor" id="setor" className="browser-default" s={12}>
                {
                  this.setores.map((f,i)=>{
                    return <option key={f.value} value={f.value} >{f.title}</option>
                  })
                }
              </Input>
             
             
             <label>Selecione o Arquivo</label>
              <Input  type="file" s={12} label="" name="arquivo"  id="arquivo"/>
                
             
              </Row>
               
                  
          
        </div>
        <FabPost url="/documentos" />
        </form>
     </div>
    );
  }
}

export default New;
