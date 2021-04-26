import React from 'react';

function PropertyList({properties}) {

    console.log(properties[0]);

    const content = properties.map((el) => {
        return (<div>{el.name}</div>)
    });

    return (
        <div>
            {content}
        </div>
    )
}

export default PropertyList;
