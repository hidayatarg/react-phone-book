import React, { Component } from 'react';
import '../App.css';
import Contacts from '../components/Contacts';

class App extends Component {
  constructor(props) {
    super(props);
    this.addContact= this.addContact.bind(this);
  }
   state = {
        contacts: [{
            name: 'Mehmet',
            phone: '12345215'
        }, {
            name: 'Mesut',
            phone: '45687820'
        }]
    }

  addContact(contact){
    console.log('Incoming Contact: ', contact);
    // filling contact under the state
    const { contacts } = this.state;
    contacts.push(contact)
    // updating the state
    this.setState({
      contacts
    });
    
  }
  render() {
    return (
      <div className="App">
        <Contacts 
        // Sending method to contact component
        addContact={this.addContact}
        contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
