import React, { Component } from 'react';
import axios from 'axios';
import {Input,Row} from 'react-materialize';

import FabPost from '../tools/FabPost';
import '../tools/Icons.css';

//import CheckList from '../tools/CheckList';


class New extends Component {
  constructor(){
    super();
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    
   
  }
  state={
    author:{chave:'',nome:'',senha:'',ip:'10.6.118.14'}
  }
 handleChange=event=>{
 
   let field=event.target.name;
   let value=event.target.value;
   this.state.author[field]=value;
   //console.log(value)
   return this.setState({author:this.state.author});
 }
 
  handleSubmit=event=>{

    event.preventDefault();
    
      const data=this.state.author;
  axios.post('http://localhost/ggnomotor/modules/usuarios/services/Insert.php',data).then(res=>{
      console.log(res);
      console.log(res.data);
      
    }).catch(function (error) {
      console.log(error);
  });

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
       <form onSubmit={this.handleSubmit}>
        <div className="container">
        
           <h3> Novo Usuário</h3>
              <Row>
              
              
               <Input placeholder="" s={12} label="Chave"  name="chave" onChange={this.handleChange}/>
               <Input placeholder="" s={12} label="Nome Completo" name="nome" onChange={this.handleChange}/>
               <Input placeholder="" s={12} label="Senha" type="password" name="senha" onChange={this.handleChange}/>
              
 
              
              </Row>
           
        </div>
        <FabPost url="/usuarios" />
        </form>
     </div>
    );
  }
}

export default New;
// <CheckList data={this.data} name="gestao" label="Gestão" />