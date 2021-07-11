import React, { Component } from 'react'

export class Form extends Component {
    constructor(props){
        super(props);

        this.state={
            username: '',
            comments: '',
            topic: 'reactJs',
        }

    }

    handleUsernameChange= (event)=> {
        this.setState({username : event.target.value })
    }
    handleComments = (event)=> {
        this.setState({comments : event.target.value })
    }
    handleTopic = (event)=> {
        this.setState({topic : event.target.value })
    }
    handleSubmit= (event)=>{
        alert(`${this.state.username}  ${this.state.topic}`);
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <div>
               username
               <input type="text" value={this.state.username} onChange={this.handleUsernameChange}></input>
            </div>
            <div>
                <label>Comments</label>
                <textarea vlaue={this.state.comments} onChange={this.handleComments}></textarea>
            </div>
            <div>
                <label>Topic : </label>
                <select vlaue={this.state.topic} onChange={this.handleTopic}>
                    <option value="reactJs">reactJs</option>
                    <option value="flutter">flutter</option>
                    <option value="react native">react native</option>
             
             </select>
            </div>
            <button type='submit' >Submit</button>
            </form>
        )
    }
}

export default Form
