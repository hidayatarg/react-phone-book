import React, { Component } from 'react';
import './List.css';


class List extends Component {
    render() {
        return (
            <div className={"listArea"}>
            <input name={"filter"} id={"filter"} placeholder={"Filter by name or phone"} />
            <ul className={"list"}>
                <li>
                    <span className={"name"}>Mehmet Yildiz</span>
                    <span className={"phone"}>111111111111</span>
                    <span className={"clearfix"}></span>
                </li>
                <li>
                    <span className={"name"}>Hidayat Arghandabi</span>
                    <span className={"phone"}>111111111111</span>
                    <span className={"clearfix"}></span>
                </li>
                <li>
                    <span className={"name"}>Ahmed Osman</span>
                    <span className={"phone"}>111111111111</span>
                    <span className={"clearfix"}></span>
                </li>

                
            </ul>
            </div>
          
        );
    }
}

export default List;
