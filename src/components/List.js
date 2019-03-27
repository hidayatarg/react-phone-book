import React, { Component } from 'react';
import './List.css';


class List extends Component {
    render() {
        return (
            <div className={"listArea"}>
            <input name={"filter"} id={"filter"} placeholder={"Filter by name or phone"} />
            <ul className={"list"}>
                <li>Mehmet Yildiz</li>
                <li>Cem Yilmaz</li>
                <li>Hidayat Arghandabi</li>
                <li>Mehmet Seven</li>
            </ul>
            </div>
          
        );
    }
}

export default List;
