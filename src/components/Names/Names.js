import React from 'react';

// call from author
const Names = (props) => {
    const {name}=props;
    return (
        <div>
            <li class="p-2 mb-2 bg-dark text-white rounded">{name}</li>
        </div>
    );
};

export default Names;