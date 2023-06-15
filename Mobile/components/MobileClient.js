import React from 'react';
import PropTypes from 'prop-types';

import  {clickEvents}  from './events';

class MobileClient extends React.PureComponent {

  static propTypes = {
    info: PropTypes.shape({
      id: PropTypes.number.isRequired,
      fam: PropTypes.string.isRequired,
      im: PropTypes.string.isRequired,
      otch: PropTypes.string.isRequired,
      balance: PropTypes.number.isRequired,
    }),
  };

  state = {
    info: this.props.info,
  };

  editCliente = (event) => {
    clickEvents.emit('editCliente', this.props.info);
  }

  deleteCliente = (event) =>{
    console.log("Удален клиент " + this.props.info.id);
    clickEvents.emit('deleteCliente', this.props.info);
  }

  render() {

    console.log("MobileClient id=" + this.state.info.id + " render");

    return (
      <tr key={ this.props.info.id }>
        <td >{ this.props.info.fam }</td>
        <td >{ this.props.info.im }</td>
        <td >{ this.props.info.otch }</td>
        <td >{ this.props.info.balance }</td>
        <td style={{ backgroundColor: this.props.info.balance >= 0 ? ' green' : 'red' }} >
					{ this.props.info.balance >= 0 ? "active" : "blocked" }</td>
        <td >
          <input type="button" value="Редактировать" onClick={this.editCliente}/>
        </td>
        <td >
          <input type="button" value="Удалить" onClick={this.deleteCliente}/>
        </td>
      </tr>
    );

  }

}

export default MobileClient;
