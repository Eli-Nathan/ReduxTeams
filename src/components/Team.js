import React from 'react'
import Counter from './ui/Counter';
import Controls from './ui/Controls';

const Team = (props) => {
    const title = props.name.charAt(0).toUpperCase() + props.name.slice(1)
    return (
        <div className={`team team--${props.name}`}>
            <h2>{`${title} team`}</h2>
            <Counter which={props.name} />
            <Controls which={props.name} />
        </div>
    )
}

export default Team
