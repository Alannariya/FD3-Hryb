import React from 'react';
import PropTypes from 'prop-types';

import MobileClient from './MobileClient';
import Card from './CardOfClient';
import { clickEvents } from './events';

import './MobileCompany.css';

class MobileCompany extends React.PureComponent {

	static propTypes = {
    tHeadArr: PropTypes.array.isRequired,
    clients: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
				fam: PropTypes.string.isRequired,
        im: PropTypes.string.isRequired,
        otch: PropTypes.string.isRequired,
        balance: PropTypes.number.isRequired,
      })
    ),
  };

	state = {
    actualClients: this.props.clients, //актуальный массив клиентов, который в процессе работы может изменяться в зависимости от того, что необходимо отобразить в данный момент
    allClients: this.props.clients, //массив клиентов, который содержит всегда полный список клиентов
    workMode: 0, 
    selectedClient: null,
  };

  componentDidMount = () => {
    clickEvents.addListener('editCliente', this.editCliente);
    clickEvents.addListener('deleteCliente', this.deleteCliente);
    clickEvents.addListener('changeMode', this.changeMode);
    clickEvents.addListener('saveEditOrNewClient', this.saveEditOrNewClient);
  };

  componentWillUnmount = () => {
    clickEvents.removeListener('editCliente', this.editCliente);
    clickEvents.removeListener('deleteCliente', this.deleteCliente);
    clickEvents.removeListener('changeMode', this.changeMode);
    clickEvents.addListener('saveEditOrNewClient', this.saveEditOrNewClient);
  };

  editCliente = (clientInfo) => {
    this.setState(
      {
        workMode: 1,
        selectedClient: clientInfo
      }
    )
  }

  deleteCliente = (clientInfo) => {
    let newClientsArr = this.state.actualClients.slice();
    const clientIndex = this.state.actualClients.findIndex(el => el.id === clientInfo.id);
    if (clientIndex != -1) {
      newClientsArr.splice(clientIndex, 1);
    }

    this.setState({
      actualClients: newClientsArr,
      allClients: newClientsArr
    })
  }

  changeMode = (mode) => {
    this.setState({ workMode: mode })
  }

  saveEditOrNewClient = (clientInfo) => {
    let newClientsArr = this.state.actualClients.slice();
    const clientIndex = this.state.actualClients.findIndex(el => el.id === clientInfo.id);
    if (clientIndex != -1) {
      newClientsArr[clientIndex] = clientInfo;
    } else {
      newClientsArr.push(clientInfo);
    }

    this.setState({
      actualClients: newClientsArr,
      allClients: newClientsArr,
      workMode: 0
    });
  }

  addNewClient = () => {
    this.changeMode(2);
  }

  showAll = () => {
    this.setState({actualClients: this.state.allClients});
  }

  showActive = () => {
    let activeClients = this.state.allClients.filter(el => el.balance >= 0);
    this.setState({actualClients: activeClients});
  }

  showBlocked = () => {
    let blockedClients = this.state.allClients.filter(el => el.balance < 0);
    this.setState({actualClients: blockedClients});
  }

  render() {

    console.log("MobileCompany render");

    let bOfTable = this.state.actualClients.map(el =>
      <MobileClient key={el.id}
        info={el}
      />
    )
    const hOfTable = this.props.tHeadArr.map((el) => {
      return <td key={el}>{el}</td>;
    })

    return (
      <div>
        <div className='fltrBtn'>
          <input  type="button" value="Все" onClick={this.showAll}/>
          <input type="button" value="Активные" onClick={this.showActive}/>
          <input type="button" value="Заблокированные" onClick={this.showBlocked}/>
        </div>
        <table className='MobComp'>
          <thead >
            <tr >{hOfTable}</tr>
          </thead>
          <tbody>{bOfTable}</tbody>
        </table>
        <div>
          <input className='newBtn' type="button" value="Добавить клиента" onClick={this.addNewClient} />
        </div>
        {
          (this.state.workMode === 1) && (<Card
						 key={this.state.selectedClient.id} 
						 info={this.state.selectedClient} />)
        }
        {
          (this.state.workMode === 2) && (<Card 
						key={100 + this.state.actualClients.reduce((first, next) => first.id > next.id ? first.id : next.id)} 
						info={{ id: 100 + this.state.actualClients.reduce((first, next) => first.id > next.id ? first.id : next.id), fam: "", im: "", otch: "", balance: 0 }} />)
        }
      </div>

    );

  }

}


export default MobileCompany;
