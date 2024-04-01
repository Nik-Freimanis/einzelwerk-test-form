'use client'

import {ButtonHTMLAttributes, useState} from 'react';
import cn from 'classnames';
import s from './button.module.scss'
import Icon from "@components/Icon";
import { IconsEnumKeys } from '@specs/icons';

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
    variant?: 'primary',
    onClick?: ((e: any) => any | Promise<any>),
    icon?: IconsEnumKeys,
    loading?: boolean
}

const Button = ({variant = 'primary', onClick, icon, disabled, loading = false, type = 'button', children, ...props}: ButtonProps) => {
    const [isLoading, setIsLoading] = useState(false);

    const clickHandler = async (e: any) => {
        if (typeof onClick === 'undefined') return
        setIsLoading(true)
        await onClick(e)
        setIsLoading(false)
    }

    return (
        <button
            {...props}
            type={type}
            className={cn(
                props.className,
                s.button,
                variant === 'primary' && s.button_primary,
                (loading || isLoading) && s.button_loading,
            )}
            onClick={clickHandler}
            disabled={loading || isLoading || disabled}
        >
            {icon && <div className={s.button_icon}><Icon name={icon} /></div>}
            {children}
        </button>
    )
}


export default Button