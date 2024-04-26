import { useState } from 'react';

// SVG code for the "on" and "off" states
const switchOnSvg = (
    <svg width="64" height="32" viewBox="0 0 64 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="63" height="31" rx="15.5" fill="#6A6A6A"/>
<rect x="0.5" y="0.5" width="63" height="31" rx="15.5" stroke="#BABABA"/>
<circle cx="16" cy="16" r="12" fill="white"/>
</svg>

);

const switchOffSvg = (
    <svg width="64" height="33" viewBox="0 0 64 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.51709" width="63" height="31" rx="15.5" fill="#FDAF33"/>
<rect x="0.5" y="0.51709" width="63" height="31" rx="15.5" stroke="#FEDAA1"/>
<circle cx="48" cy="16.0171" r="12" fill="white"/>
</svg>

);

const SwitchToggle = () => {
    const [isOn, setIsOn] = useState(true);

    const handleClick = () => {
        setIsOn(prevState => !prevState);
    };

    return (
        <div onClick={handleClick}>
            {isOn ? switchOnSvg : switchOffSvg}
        </div>
    );
};

const OnAndOffIcon = () => {
    return (
        <div>
            <SwitchToggle />
        </div>
    );
};

export default OnAndOffIcon;
