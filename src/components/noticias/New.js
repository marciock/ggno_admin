import React, { Component } from 'react';
import {Input,Row} from 'react-materialize';
import axios from 'axios';

import FabPost from '../tools/FabPost';
import '../tools/Icons.css';




class New extends Component {

  constructor(){
    super();
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  state={
    unidades:[]
  }
  componentDidMount(){
    axios.get('http://localhost/ggnomotor/modules/unidades/services/Lista.php',{
      headers:{'Acces-Control-Allow-Origin':'*','Content-Type':'application/json'},
      responseType:'json',
    }).then(res=>{

        console.log(res.data)
      this.setState({unidades:res.data});
        
    });
  
}
   
handleSubmit=event=>{
  event.preventDefault();
    

  const myFile=document.getElementById('imagem').files[0];
  const descricao=document.getElementById('descricao').value;
  const titulo=document.getElementById('titulo').value;
  const id_unidade=document.getElementById('id_unidade').value;
  const resumo=document.getElementById('resumo').value;
  
 
  let formData =new FormData();
     
      formData.append('id_unidade',id_unidade);
      formData.append('titulo',titulo);
      formData.append('resumo',resumo);
      formData.append('descricao',descricao);
      
      formData.append('imagem',myFile);
  

    axios.post('http://localhost/ggnomotor/modules/noticias/services/Insert.php',formData,{
      headers:{
        'Content-type':'multipart/form-data'
      }
    }).then(res=>{
      console.log(res);
      console.log(res.data);
     // console.log(formData);

     alert('Salvos com Sucesso');
      
      
    }).catch(function (error) {
      console.log(error);
  })
}


  render() {
      return (
     
      
        <div className="container">
           <h3> Nova Notícia</h3>
              <Row>
              <form onSubmit={this.handleSubmit} >
              <Input type="select" label="Unidade" name="id_unidade" id="id_unidade" className="browser-default" s={12}>
                {
                  this.state.unidades.map((f,i)=>{
                    return <option key={i} value={f.id_unidade} >{f.unidade}</option>
                  })
                }
              </Input>
               <Input  s={12}label="Título" name="titulo" id="titulo"/>
               <Input  s={12}label="Resumo" name="resumo" id="resumo"/>
               <Input  s={12} type="textarea" label="Descrição" name="descricao" id="descricao"/>
              
               <label>Imagem para a Notícia</label>
               <Input  s={12} type="file" name="imagem" id="imagem"/>
             
                <FabPost url="/noticias" />

             
               </form>
              </Row>
            </div>
      
    )
  }
}

export default New;
