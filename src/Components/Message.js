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
        const {message} = this.state;
        //const {message1,message2} = this.props
        return(<div>
            <h1>{message}</h1>
            <button onClick= { ()=> this.changeMessage()}>Subscribe</button>
            </div>);
    }

}
export default Message;