import React, {Component} from 'react';

import Notifications from './Notifications'
import ProjetoLista from '../Projeto/ProjetoLista'

class Dashboard extends Component {
  render() {
        return (
            <div className="Dashboard container">
              <div className='row'>
              <div className='col s12 m6'>
              <ProjetoLista />
              </div>
                <div className='col s12 m5'>
                  <Notifications />
                </div>

              </div>
            </div>
        );
    }
}
export default Dashboard
