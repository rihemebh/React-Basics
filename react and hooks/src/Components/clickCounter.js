import React, { Component } from 'react'
import withCounter from './withCounter'

class clickCounter extends Component {

    
    render() {
        const {count , incrementCount} = this.props;
        return (
            <div>
                <button onClick={incrementCount}>clicked {count} </button>
            </div>
        )
    }
}

export default withCounter(clickCounter,5)
