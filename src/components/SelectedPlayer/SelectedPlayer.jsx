import React from 'react';

const SelectedPlayer = ({selectedPlayer}) => {
    const {name}= selectedPlayer
    return (
        <div>
            <p>Name:{name}</p>
        </div>
    );
};

export default SelectedPlayer;