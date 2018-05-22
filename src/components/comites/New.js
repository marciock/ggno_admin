import React, { Component } from 'react';
import {Input,Row} from 'react-materialize';
//import NavBar from '../tools/NavBar';
import FabPost from '../tools/FabPost';
import axios from 'axios';
import '../tools/Icons.css';


import DatePicker from '../tools/DatePicker';



class New extends Component {

  constructor(){
    super();
    this.fab=[
      {
        'icon':'check',
        'url':'/comites/new:save',
        'color':'green',
       
      },
      {
        'icon':'cancel',
        'url':'/comites/',
        'color':'red'
      },
      
    ];

    this.myComites=[
      {
        'value':'1',
        'title':'PNQS'
      },
      {
        'value':'2',
        'title':'Use O Bom Senso'
      },
      {
        'value':'3',
        'title':'Meio Ambiente'
      },
      {
        'value':'4',
        'title':'CIPA'
      }
      
     
    ];
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  handleSubmit=event=>{
    event.preventDefault();
      

    const myFile=document.getElementById('arquivo').files[0];
    const chave=document.getElementById('chave').value;
    const titulo=document.getElementById('titulo').value;
    
     
    const descricao=document.getElementById('descricao').value;
    const data=document.getElementById('data').value;
    const comites=document.getElementById('comites').value;
   
    let formData =new FormData();
        formData.append('chave',chave);
        formData.append('titulo',titulo);
        formData.append('descricao',descricao);
        formData.append('comites',comites);
        formData.append('data',data);
        formData.append('arquivo',myFile);
   
    
    //npm const data=this.state.author;

      axios.post('http://localhost/ggnomotor/modules/comites/services/Insert.php',formData,{
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
        window.location.href='localhost/Sanepar/build/#/comites';
        
      }).catch(function (error) {
        console.log(error);
    })
  }

  render() {
    
    
    return (
      <div>
      
        <div className="container">
           <h3> Novo </h3>
           <form>
              <Row>
              <Input placeholder="" s={12} label="Chave" name="chave" id="chave"/>
              <Input placeholder="" s={12} label="Titulo "  name="titulo" id="titulo"/>
              <Input type="textarea" s={12} label="Descrição" name="descricao" id="descricao" />
              
              
              <Input type="select" label="Comitês" name="comites" id="comites" className="browser-default" s={12} name="comites" id="comites">
                {
                  this.myComites.map((f,i)=>{
                    return <option key={f.value} value={f.value} >{f.title}</option>
                  })
                }
              </Input>
              <DatePicker  label="Data" name="data" id="data"/>
             
             <label>Selecione o Arquivo</label>
              <Input  type="file" s={12} label="" name="arquivo" id="arquivo"/>
                
             
              </Row>
               
                  
           </form>
        </div>
        <FabPost url="/comites" />
        
     </div>
    );
  }
}

export default New;
