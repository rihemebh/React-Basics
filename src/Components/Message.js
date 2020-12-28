import React , {Component} from 'react';
class Message extends Component {

    constructor(){
        super();
        this.state = {
            message : "Welcome visitors"
        }

    }

    render(){
        return(<div>
            <h1>{this.state.message}</h1>
            </div>);
    }

}
export default Message;