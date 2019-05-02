import React, { Component } from 'react';
import PropTypes from 'prop-types'


class Form extends Component {
   constructor(){
       super();
    //    bind the method
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
   }

    static propTypes = {
        // And incoming function from parent 
        addContact: PropTypes.func
    };
   
    state = {
        name: '',
        phone: ''
    };

    onChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit(event){
        // Stoping the default behavior
        event.preventDefault();
        // console.log({...this.state});

        // Sending the data to the
        this.props.addContact({
            ...this.state
        });

        // Clean the fields
        this.setState({
            name: '',
            phone: '',
        });

    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input 
                    name="name" 
                    id="name" 
                    value={this.state.name} 
                    onChange={this.onChange} 
                    placeholder="Enter a name" />
                    <br/>
                   
                    <input 
                    name="phone" 
                    id="phone" 
                    value={this.state.phone} 
                    onChange={this.onChange} 
                    placeholder="Enter a phone number" />
                    <button>Add</button>
                </form>
            </div>
        );
    }
}

export default Form;
