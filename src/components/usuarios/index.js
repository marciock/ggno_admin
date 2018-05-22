import React, { Component } from 'react';
import TableView from './TableView';
import FabActions from '../tools/FabActions';
//import NavBar from '../tools/NavBar';
import {Button} from 'react-materialize';
import axios from 'axios';

//import 'materialize-css/dist/materialize.min.js'
class Usuarios extends Component {
  constructor(){
    super();
   
   
    //  this.handleChange=this.handleChange.bind(this)
    
    
  }
  state={
    usuarios:[],
    activeId:''
    
  }
  componentDidMount(){
      axios.get('http://localhost/ggnomotor/modules/usuarios/services/Lista.php',{
        headers:{'Acces-Control-Allow-Origin':'*','Content-Type':'application/json'},
        responseType:'json',
      }).then(res=>{

          console.log(res.data)
        this.setState({usuarios:res.data});
          
      });
    
  }
  onChildChanged(bool) {
    this.setState({active: bool});
}
 
  
  render() {
   
    
    return (
      <div >
     
      <div className="container">

        <h3 >Usuários</h3>

        <Button waves='light'  >Botao</Button>
        <TableView data={this.state.usuarios}  tik  />
        <FabActions 
        urlNew="/usuarios/new"
        urlHome="/"
        paramams=""
        
        />
        </div>
      </div>
  
  
    );
  }
}

export default Usuarios;
