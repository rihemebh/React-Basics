import React , {Component} from 'react';
class Message extends Component {

    constructor(){
        super();
        this.state = {
            message : "Welcome visitors"
        }

    }

    changeMessage(){
        this.setState({
            message : 'welcome subscriber'
        })
      
    }

    render(){
        return(<div>
            <h1>{this.state.message}</h1>
            <button onClick= { ()=> this.changeMessage()}>Subscribe</button>
            </div>);
    }

}
export default Message;