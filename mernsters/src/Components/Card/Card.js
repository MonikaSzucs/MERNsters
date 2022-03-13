import React from 'react';

const Card = (props) => {
    const title = props.title
    console.log("CARD HERE")
    console.log(props)
    return (
        <div>
            {title}
            {props.namingType}
        </div>
    )
}

export default Card