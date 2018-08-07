import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Icons.css';


class Icon extends Component {
    constructor() {
        super();
       this.data=[
        {
            'id':'1',
            'icon':'icons/usuarios.svg',
            'title':'Usuários',
            'url' :'/usuarios',
            
    
        },
        {
            'id':'2',
            'icon':'icons/documentos.svg',
            'title':'Documentos',
            'url' :'/documentos',
           
    
        },
        {
            'id':'3',
            'icon':'icons/comites.svg',
            'title':'Comitês',
            'url' :'/comites',
           
    
        },
        {
            'id':'4',
            'icon':'icons/indicadores.svg',
            'title':'Indicadores',
            'url' :'/indicadores',
           
    
        },
        {
            'id':'5',
            'icon':'icons/noticias.svg',
            'title':'Noticias',
            'url' :'/noticias',
           
        },
        {
            'id':'6',
            'icon':'icons/agendas.svg',
            'title':'Agendas',
            'url' :'/agendas',
           
    
        },
        {
            'id':'7',
            'icon':'icons/ideias.svg',
            'title':'Ideias',
            'url' :'/ideias',
           
    
        },
        {
            'id':'8',
            'icon':'icons/reunioes.svg',
            'title':'Reuniões',
            'url' :'/reunioes',
           
    
        },
        

    ];
       
       
    }
   
  render() {
    return (

   
     <div className="container ">
       <div className="row ">
            {
                this.data.map((el,index)=>{
                   // console.log(el.icon)
                    return <div className="col s3" key={index}><Link to={el.url}><div className="center"><img src={el.icon} alt="testando imagem"/><p className="icon-p">{el.title}</p></div></Link></div>;
                })
            }

        </div>
      </div>
    
    );
  }
}

export default Icon;
