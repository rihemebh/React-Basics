import React, { Component } from 'react'

export class RegComponent extends Component {
    render() {
        console.log("regular");
        return (
            <div>
              regular {this.props.name}  
            </div>
        )
    }
}

export default RegComponent
