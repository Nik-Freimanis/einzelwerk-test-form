'use client'

import React, {InputHTMLAttributes, SVGProps} from 'react';

import s from './input.module.scss'
import cn from 'classnames';

import { IconsEnumKeys } from '@specs/icons';
import Icon from '@components/Icon';
import { IIcon } from '@specs/helpers';



interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    icon?: IIcon
    iconPosition?: 'left' | 'right',
    error?: any,
    iconColor?: string
    boxClassName?: string
}

// eslint-disable-next-line react/display-name
const Input = React.forwardRef<HTMLDivElement, InputProps>(({icon, iconColor, iconPosition = 'right', boxClassName, value = '', error, ...props}: InputProps, ref) => {
    return (
        <div
            className={cn(
                s.inputBox,
                boxClassName, {
                    '!border-red-500': error,
                }
            )}>
            {icon && iconPosition === 'left' && (
                <Icon className={cn(s.inputBox__icon)} {...icon} color={iconColor}/>
            )}
            <input
                {...props}
                value={value}
                className={s.inputBox__input}
            />
            {icon && iconPosition === 'right' && (
                <Icon className={s.inputBox__icon} {...icon} color={iconColor}/>
            )}
        </div>
    )
});


export default Input

