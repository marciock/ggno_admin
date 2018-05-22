import React, { Component } from 'react';
import {Input,Row} from 'react-materialize';
//import NavBar from '../tools/NavBar';
import FabPost from '../tools/FabPost';
import '../tools/Icons.css';
import axios from 'axios';

import DatePicker from '../tools/DatePicker';




class New extends Component {

  constructor(){
    super();
    

    this.local=[
      {
        'value':'1',
        'title':'Paranavai'
      },
      {
        'value':'2',
        'title':'Umuarama'
      },
      {
        'value':'3',
        'title':'Maringá'
      },
      {
        'value':'4',
        'title':'Cianorte'
      },
      {
        'value':'5',
        'title':'Campo Mourão'
      }
     
    ]
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  state={
    author:{assunto:'',local:'',data:'',inicio:'',termino:'',descricao:'',participantes:''}
  }
  handleChange=event=>{
 
    let field=event.target.name;
    let value=event.target.value;
    this.state.author[field]=value;
    console.log(event.target.value);
    return this.setState({author:this.state.author});
  }
  
  handleSubmit=event=>{

    event.preventDefault();
    
      const data=this.state.author;
    //  console.log(data.data);
  axios.post('http://localhost/ggnomotor/modules/reunioes/services/Insert.php',data).then(res=>{
      console.log(res);
      console.log(res.data);
      
    }).catch(function (error) {
      console.log(error);
  });

  }

  render() {
    
    
    return (
      <div>
       <form onSubmit={this.handleSubmit}>
        <div className="container">
           <h3> Nova Reunião</h3>
          
              <Row>
              <Input  s={12} label="Assunto" name="assunto" id="assunto" onChange={this.handleChange}/>
              <Input type="textarea" s={12} label="Descrição"  name="descricao" id="descricao" onChange={this.handleChange}/>
              
              <Input type="select" label="Local" name="local" id="local" className="browser-default" s={12} onChange={this.handleChange}>
                {
                  this.local.map((f,i)=>{
                    return <option key={f.value} value={f.value} >{f.title}</option>
                  })
                }
              </Input>
              <div className="col s3">
                   <DatePicker s={6} label="Data" name="data" id="data" onChange={this.handleChange}/>
             
              
                  <lable for="inicio">Inicio </lable>
                   <input s={6} className="input-field" type="time" label="Inicio" name="inicio" id="inicio" onChange={this.handleChange}/>
              
              
                   <lable for="termino" >Término </lable>
                   <input type="time" s={6} className="input-field" name="termino" id="termino" onChange={this.handleChange} />
              </div>
             
               <Input type="textarea" s={12} label="Participantes" name="particiantes" id="participantes" onChange={this.handleChange}/>
            
                
             
              </Row>
               
                  
          
        </div>
        <FabPost url="/reunioes" />
        </form>
     </div>
    );
  }
}

export default New;
