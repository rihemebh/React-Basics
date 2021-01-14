import React from 'react'

function memoComp({name}) {
    console.log("memo");
    return (
        <div>
            Memo {name}
        </div>
    )
}

export default React.memo(memoComp)
