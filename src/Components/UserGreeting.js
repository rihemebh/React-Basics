import React, { Component } from 'react'

 class UserGreeting extends Component {
     constructor(props){
         super(props)
         this.state = {
             isLoggedIn: true
         }
     }
    render() {
        return this.state.isLoggedIn &&  <div>Welcome Riheme</div> 
       /* return(
            this.state.isLoggedIn ? (
                <div>Welcome Riheme</div> 
            ): (
            <div>Welcome Guest</div>
            )
        )*/
      /*  let message
        if(this.state.isLoggedIn){
            message= <div>Welcome Riheme</div>
        }else{
            message= <div>Welcome Guest</div>
        }
return <div>{message}</div>*/

          {/*if(this.state.isLoggedIn)
        {
            return (
                <div> <div>Welcome Riheme</div> </div>
            )
        }else{
            return (
                <div>
                  
                    <div> Welcome guest</div>
                </div>
            )*/}

        }
        
    }


export default UserGreeting
