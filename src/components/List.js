import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './List.css';


class List extends Component {
    static propTypes = {
        contacts: PropTypes.array.isRequired,
    };

    state = {
        filterText:''
    };
    // Summary
    // Arrow functions doesnt need bindings
    onChangeFilterText=(event) => {
        console.log(event.target.value);
        this.setState({
            filterText: event.target.value
        });
    };

    render() {
        return (
            <div className={"listArea"}>
            <input 
            value={this.state.filterText}
            onChange={this.onChangeFilterText} 
            name={"filter"} 
            id={"filter"} 
            placeholder={"Filter by name or phone"} />
            <ul className={"list"}>
            {
                    this.props.contacts.map(contact =>                        
                        <li key={contact.phone}>
                            <span className={"name"}>{contact.name}</span>
                            <span className={"phone"}>{contact.phone}</span>
                            <span className={"clearfix"}></span>
                        </li>                       
                    )
                }
                
            </ul>
            </div>
          
        );
    }
}

export default List;
