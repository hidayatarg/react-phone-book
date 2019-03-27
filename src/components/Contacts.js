import React, { Component } from 'react';
import List from './List';
import Form from './Form';

class Contacts extends Component {
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
            <div>
                 {/* Sending the states to the List component */}
                <List contacts={this.state.contacts} />
                <Form />
            </div>
          
            );
    }
}

export default Contacts;
