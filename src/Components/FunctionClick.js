import { Component } from "react"
;

function FunctionClick (){
    function clickHandler(){
        console.log("button clicked");

    }
return (
    <div>
        <button onClick={clickHandler}>Click</button> 
        {/*this.clickHandler : in a class component*/}
    </div>
);
}

export default FunctionClick;