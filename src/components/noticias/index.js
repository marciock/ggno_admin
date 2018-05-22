import React, { Component } from 'react';
import TableView from './TableView';
import FabActions from '../tools/FabActions';
import axios from 'axios';


class Noticias extends Component {
  constructor(){
    super();
   
   
    
    this.fab=[
      {
        'icon':'delete',
        'url':'/noticias',
        'color':'orange',
        'component':''
      },
      {
        'icon':'edit',
        'url':'/noticias/edit',
        'color':'red'
      },
      {
        'icon':'add',
        'url':'/noticias/new',
        'color':'green'
      },
    ]
    
  }
  state={
    noticias:[]
  }
  componentDidMount(){
      axios.get('http://localhost/ggnomotor/modules/noticias/services/Lista.php',{
        headers:{'Acces-Control-Allow-Origin':'*','Content-Type':'application/json'},
        responseType:'json',
      }).then(res=>{

          console.log(res.data)
        this.setState({noticias:res.data});
          
      });
    
  }
  render() {
   
    return (
      <div >
     
      <div className="container">
        <h3 >Noticias</h3>
     
        <TableView data={this.state.noticias} />
        <FabActions urlNew="/noticias/new"
        urlHome="/"/>
        </div>
      </div>
  
  
    );
  }
}

export default Noticias;
