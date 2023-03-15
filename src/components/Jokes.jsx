import React from 'react'

const Jokes = ({ setup, delivery }) => {
    return (
        <div className='jokes-main'>
            <div className="setup">{setup}</div>
            <div className="delivery">{delivery}</div>

        </div>
    )
}

export default Jokes