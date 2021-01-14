import React, { Component } from 'react'

export class LifeCycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: "riheme"
        }

        console.log("A constructor");
    }

    static getDerivedStateFromProps(props,state){
        console.log('A getDerivedStateFromProps ');
        return null;

    }

    componentDidMount(){
        console.log('A componentDidMount');
    }
    
    render() {
        console.log('A render');
        return (
            <div>
                
            </div>
        )
    }
}

export default LifeCycleA
