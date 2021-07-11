import React , {Component} from 'react';
class counter extends Component {

 constructor(props){
     super(props);
        this.state={
            count : 0
        } ;
 }
inc(){
    /*this.setState({
        count: this.state.count+1
    },
    ()=>{
        console.log(this.state.count)
    })*/
     this.setState(
        (prevState)=> ({
        count : prevState.count+1})
     );

 
}
 render(){

    return(
        <div>
            {this.state.count}
            <button onClick={ ()=> this.inc()}> Inc </button>
        </div>
    ); 
 }

}

export default counter;