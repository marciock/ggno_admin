import React, { Component } from 'react';
import TableView from './TableView';
import FabActions from '../tools/FabActions';
import axios from 'axios';
class Indicadores extends Component {
  constructor(){
    super();
   
     // this.componentDidMount=this.componentDidMount.bind(this);
   
   
     this.fab=[
      {
        'icon':'delete',
        'url':'/indicadores',
        'color':'orange',
        'onClick':''
      },
      {
        'icon':'edit',
        'url':'/indicadores/edit',
        'color':'red'
      },
      {
        'icon':'add',
        'url':'/indicadores/new',
        'color':'green'
      },
    ]
    
  }
  state={
    indicadores:[]
  }
  componentDidMount(){
      axios.get('http://localhost/ggnomotor/modules/indicadores/services/Lista.php',{
        headers:{'Acces-Control-Allow-Origin':'*','Content-Type':'application/json'},
        responseType:'json',
      }).then(res=>{

          console.log(res.data)
        this.setState({indicadores:res.data});
          
      });
    
  }
  render() {
   
    return (
      <div >
 
      <div className="container">
        <h3 >Indicadores</h3>
        <TableView data={this.state.indicadores} />
       
          <FabActions urlNew="/indicadores/new" urlHome="/"  />
        
     
        </div>
       
      </div>
  
  
    );
  }
}

export default Indicadores;
// <TableView data={this.state.indicadores} />
//<FabActions data={this.fab}/>