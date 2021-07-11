import React, { Component } from 'react'
import MemoComp from './memoComp'
import PureComp from './PureComp'
import RegComponent from './RegComponent'

export class ParentCom extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: "riheme"
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({name:"riheme"})

        },2000)
    }
    
    render() {
        console.log("Prent");
        return (
            <div>
            Parent Component 
            <MemoComp name={this.state.name}/>
            
            {/*<RegComponent name={this.state.name}/>
            <PureComp name={this.state.name} />*/}

                
            </div>
        )
    }
}

export default ParentCom
