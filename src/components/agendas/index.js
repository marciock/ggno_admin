import React, { Component } from 'react';
import TableView from './TableView';
import FabActions from '../tools/FabActions';
import axios from 'axios';
//import NavBar from '../tools/NavBar';


//import 'materialize-css/dist/materialize.min.js'
class Agendas extends Component {
  constructor(){
    super();
       
  }
  state={
    reunioes:[]
  }
  componentDidMount(){
    axios.get('http://localhost/ggnomotor/modules/agenda/services/Lista.php',{
      headers:{'Acces-Control-Allow-Origin':'*','Content-Type':'application/json'},
      responseType:'json',
    }).then(res=>{

        console.log(res.data)
      this.setState({reunioes:res.data});
        
    });
  
}
  render() {
   
    return (
      <div >
     
      <div className="container">
        <h3 >Reuniões</h3>
     
        <TableView data={this.state.reunioes} />
        <FabActions urlNew="/agendas/new"
        urlHome="/"/>
        </div>
      </div>
  
  
    );
  }
}

export default Agendas;
