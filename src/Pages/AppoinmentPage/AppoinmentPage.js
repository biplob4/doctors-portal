import React, { useState } from 'react';
import AppoinmentBanner from './AppoinmentBanner';
import AvailableAppoinment from './AvailableAppoinment';


const AppoinmentPage = () => {
    const [selected, setSelected] = useState(new Date());

    return (
        <div>
            <AppoinmentBanner selected={selected} setSelected={setSelected} />
            <AvailableAppoinment selected={selected} />
        </div>
    );
};

export default AppoinmentPage;