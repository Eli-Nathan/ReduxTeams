import React from 'react'
import Counter from './ui/Counter';
import Controls from './ui/Controls';

const Right = () => {
    return (
        <div className="right">
            <h2>Red team</h2>
            <Counter which='red' />
            <Controls which='red' />
        </div>
    )
}

export default Right
