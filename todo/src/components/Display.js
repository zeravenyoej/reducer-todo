import React, { useReducer } from 'react';
import { reducer, initialState } from '../reducers/reducer';

const Display = () => {

    const [todoState, dispatch] = useReducer(reducer, initialState );

    return (
        <div>
            <h3>{todoState.item}</h3>
        </div>
    )
};

export default Display;