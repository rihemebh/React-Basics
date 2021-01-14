import React, { Component } from 'react'

export class LifeCycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: "riheme"
        }

        console.log("B constructor");
    }

    static getDerivedStateFromProps(props,state){
        console.log('B getDerivedStateFromProps ');
        return null;

    }

    componentDidMount(){
        console.log('B componentDidMount');
    }
    
    render() {
        console.log('B render');
        return (
            <div>
                
            </div>
        )
    }
}

export default LifeCycleB
