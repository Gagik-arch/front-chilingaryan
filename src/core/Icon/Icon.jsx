import React from 'react';
import * as Icons from '../../assets/icons';

const Icon = ({
    name = 'Eye',
    stroke = 'none',
    fill = 'none',
    size = 16,

}) => {
    if (!name && !Icons.hasOwnProperty(name)) {
        return null;
    }
    const I = Icons[name.charAt(0).toUpperCase() + name.slice(1)];

    return (
        <I width={size} height={size} stroke={stroke} fill={fill} />
    )

};

export default Icon;