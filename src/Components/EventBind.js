import React , { Component } from "react";

class EventBind extends Component{
    constructor(props){
        super(props);

        this.state ={
            message: 'Hello'
        }

        this.clickHandler=this.clickHandler.bind(this)
    }

    //methode 1
  /*  clickHandler(){
        if(this.state.message =="Hello"){
            this.setState(
                { message: "Goodbye"}
             )
        }else{
            this.setState(
                { message: "Hello"}
             )
        }
    
        console.log(this); 
    }*/
//method2
    clickHandler = () => {
        if(this.state.message ==="Hello"){
            this.setState(
                { message: "Goodbye"}
             )
        }else{
            this.setState(
                { message: "Hello"}
             )}
    }

    //to make an eventhandler we have 3 methods 
    // 1) ()=>this.functionname //akther wahda mestaamla w mansouha f documentation
    //2) this.functionname.bind(this) //msh mansouh biha 
     //3) bind statement in the constuctor
   
    //what is the difference? 
    render() {
      
        return (
            <div>
    <div>{this.state.message}</div>
    <button onClick={this.clickHandler.bind(this)}>click1</button>
    <button onClick={()=> this.clickHandler()}>click2</button>
    <button onClick={this.clickHandler}>click3</button>

            </div>
            
        )
    }
}

export default EventBind;