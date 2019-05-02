import React, { Component } from 'react';
import PropTypes from 'prop-types'
import List from './List';
import Form from './Form';


class Contacts extends Component {
    static propTypes = {
        contacts: PropTypes.array.isRequired,
        // And incoming function from parent 
        addContact: PropTypes.func
    };
    render() {
        return (
            <div>
                 {/* Sending the states to the List component */}
                <List contacts={this.props.contacts} />
                <Form addContact={this.props.addContact} />
            </div>
          
            );
    }
}

export default Contacts;
