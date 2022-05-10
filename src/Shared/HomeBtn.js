import React from 'react';

const HomeBtn = ({children}) => {
    return (
        <button class="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">{children}</button>
    );
};

export default HomeBtn;