import React from 'react'
import Counter from './ui/Counter';
import Controls from './ui/Controls';

const Left = () => {
    return (
        <div className="left">
            <h2>Blue team</h2>
            <Counter which='blue' />
            <Controls which='blue' />
        </div>
    )
}

export default Left
