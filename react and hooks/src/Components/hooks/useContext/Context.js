import React , {useContext} from "react";
import { UserContext, ChannelContext } from "../../../App.js";

function ComponentC() {
  return (
    <div>
      I am Component C parent of
      <ComponentE />
    </div>
  );
}

export default ComponentC;
function ComponentE() {
  const user =  useContext(UserContext)
   const channel =  useContext(ChannelContext)
  return (
    <div>
      Component E parent of
      <ComponentF />
      {user } + {channel}
    </div>
  );
}

function ComponentF() {
  return (
    <div>
      Component F that says Hello to
      <UserContext.Consumer>
        {(user) => {
          return (
            <ChannelContext.Consumer>
            {
                channel => {
                    return <div>  <h2>{user}</h2> in the Channel {channel} </div>
                }
            }
            </ChannelContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
}
