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

    
   

   
   // this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    
  }
  state={
    setores:[],
    tipos:[]
  }
  componentDidMount(){
     this.getSetores();
     this.getTipo();
   

    
  }
  getSetores(){
    axios.get('http://localhost/ggnomotor/modules/setor/services/Lista.php',{
      headers:{'Acces-Control-Allow-Origin':'*','Content-Type':'application/json'},
      responseType:'json',
    }).then(res=>{

        console.log(res.data)
      this.setState({setores:res.data});
        
    });
  }
  getTipo(){
    axios.get('http://localhost/ggnomotor/modules/tipo/services/Lista.php',{
      headers:{'Acces-Control-Allow-Origin':'*','Content-Type':'application/json'},
      responseType:'json',
    }).then(res=>{

        console.log(res.data)
      this.setState({tipos:res.data});
        
    });
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
                  this.state.tipos.map((f,i)=>{
                    return <option key={i} value={f.pasta} >{f.tipo}</option>
                  })
                }
              </Input>
              
              <Input type="select" label="Setor" name="setor" id="setor" className="browser-default" s={12}>
                {
                  this.state.setores.map((f,i)=>{
                    return <option key={i} value={f.id_setor} >{f.setor}</option>
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
