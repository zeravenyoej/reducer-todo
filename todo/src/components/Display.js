import React from 'react';

const Display = ({task, toggleItem}) => {
    return (
        <div>
            <h3 
                onClick={toggleItem}
                // className={task.completed === false ? null : 'toggled'}
                >
                {task.item}
            </h3>
        </div>
    )
};

export default Display;