import React from 'react';

import './List.css';

const List = props => {

    return (
        <div className='List'>{props.words.join('\n')}</div>
    );
}

export default List;
