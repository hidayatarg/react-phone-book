import React, { Component } from 'react';
import '../App.css';
import Contacts from '../components/Contacts';

class App extends Component {
   state = {
        contacts: [{
            name: 'Mehmet',
            phone: '12345215'
        }, {
            name: 'Mesut',
            phone: '45687820'
        }]
    }
  render() {
    return (
      <div className="App">
        <Contacts contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
