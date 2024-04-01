import { components } from 'react-select';
import Icon from '../../Sprites/Icon';
import React from 'react';

export const DropdownIndicator = props => {
    return (
        components.DropdownIndicator && (
            <components.DropdownIndicator {...props}>
                <Icon width={20} height={20} name={'system-arrow-right'} style={{transform: 'rotate(90deg)'}} color={'var(--main-text)'}/>
            </components.DropdownIndicator>
        )
    );
};
