import React  from 'react';

import NavBar from '../components/tools/NavBar';
//import Routes from './routes';
import {HashRouter,Route, Link} from 'react-router-dom';
import creatHistory from 'history/createBrowserHistory';
import Home from './Home';

import Agendas from '../components/agendas';
import Comites from '../components/comites';
import Documentos from '../components/documentos';
import Ideias from '../components/ideias';
import Indicadores from '../components/indicadores';
import Noticias from '../components/noticias';
import Usuarios from '../components/usuarios';
import Reunioes from '../components/reunioes';



import AgendasNew from '../components/agendas/New';
import ComitesNew from '../components/comites/New';
import DocumentosNew from '../components/documentos/New';
import IdeiasNew from '../components/ideias/New';
import IndicadoresNew from '../components/indicadores/New';
import NoticiasNew from '../components/noticias/New';
import UsuariosNew from '../components/usuarios/New';
import ReunioesNew from '../components/reunioes/New';


export default ()=> (
  
        
            <HashRouter>
            <div>
             <NavBar />
                <Route exact path='/' component={Home} />
                <Route exact path='/agendas' component={Agendas} />
                <Route exact path='/comites' component={Comites} />
                <Route exact path='/documentos' component={Documentos} />
                <Route exact path='/ideias' component={Ideias} />
                <Route exact path='/indicadores' component={Indicadores} />
                <Route exact path='/noticias' component={Noticias} />
                <Route exact path='/usuarios' component={Usuarios} />
                <Route exact path='/reunioes' component={Reunioes} />
              

                <Route exact path='/agendas/new' component={AgendasNew} />
                <Route exact path='/comites/new' component={ComitesNew} />
                <Route exact path='/documentos/new' component={DocumentosNew} />
                <Route exact path='/ideias/new' component={IdeiasNew} />
                <Route exact path='/indicadores/new' component={IndicadoresNew} />
                <Route exact path='/noticias/new' component={NoticiasNew} />
                <Route exact path='/usuarios/new' component={UsuariosNew} />
                <Route exact path='/reunioes/new' component={ReunioesNew} />
              
            </div>
            </HashRouter>
       
   
    );
 


//export default ()=> (<Routes />);
