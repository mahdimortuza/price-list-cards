import React from 'react';

const Link = (props) => {
    const {path, name} = props.route
    return (
        <li className='mr-12 hover:bg-purple-600'>
            <a href={path}>{name}</a>
        </li>
    );
};

export default Link;