import React, { PureComponent } from 'react'

export class PureComp extends PureComponent {
    
    render() {
        console.log("pure");
        return (
            <div>
                Pure {this.props.name}
            </div>
        )
    }
}

export default PureComp
