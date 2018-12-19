import React, {Component} from 'react';

import Notifications from './Notifications'
import ProjetoLista from '../Projeto/ProjetoLista'
import { connect } from 'react-redux'

class Dashboard extends Component {
  render() {
  //  console.log(this.props);
   const { Projetos } = this.props;
        return (
            <div className="Dashboard container">
              <div className='row'>
              <div className='col s12 m6'>
              <ProjetoLista Projetos={Projetos} />
              </div>
                <div className='col s12 m5'>
                  <Notifications />
                </div>

              </div>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
  return{
    Projetos: state.Projeto.Projetos
  }
}
export default connect(mapStateToProps)(Dashboard)
