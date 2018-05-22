import React , {Component} from 'react';
import Routes from './routes';
import NavBar from './components/tools/NavBar';
//import {BrowserRouter,Router,Route} from 'react-router-dom';

export default class App extends Component{

  render(){
    return (
      <div>
      
       
      
        <Routes />
   
      </div>
    )
  }
}

//export default ()=> (<Routes />);
