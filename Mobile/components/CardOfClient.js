import React from 'react';
import PropTypes from 'prop-types';

import { clickEvents } from './events';
import './CardOfClient.css'

class Card extends React.Component {

  static propTypes = {
    info: PropTypes.shape({
      id: PropTypes.number.isRequired,
      fam: PropTypes.string.isRequired,
      im: PropTypes.string.isRequired,
      otch: PropTypes.string.isRequired,
      balance: PropTypes.number.isRequired,
    }),
  };

  famFromInput = React.createRef();
  imFromInput = React.createRef();
  otchFromInput = React.createRef();
  balanceFromInput = React.createRef();

  cancel = (event) =>{
    clickEvents.emit('changeMode', 0);
  }

  saveEditOrNewClient = (event) =>{
    const clientInfo = {
      id: this.props.info.id,
      fam: this.famFromInput.current.value,
      im: this.imFromInput.current.value,
      otch: this.otchFromInput.current.value,
      balance: Number(this.balanceFromInput.current.value),
    }

    clickEvents.emit('saveEditOrNewClient', clientInfo);
    }

  render() {
    console.log("Card render");
    return (
      <div>
        <h2>Карточка клиента</h2>
        <p>Фамилия клиента:
          <input type="text" defaultValue={this.props.info.fam} ref={this.famFromInput} />
        </p>
        <p>Имя клиента:
          <input type="text" defaultValue={this.props.info.im} ref={this.imFromInput} />
        </p>
        <p>Отчество клиента:
          <input type="text" defaultValue={this.props.info.otch} ref={this.otchFromInput} />
        </p>
        <p>Баланс:
          <input type="text" defaultValue={this.props.info.balance} ref={this.balanceFromInput} />
        </p>
          <input  type="button" value="Save" onClick={this.saveEditOrNewClient}/>
          <input  type="button" value="Cancel" onClick={this.cancel} />
        </div>
    )
  }

}

export default Card;

