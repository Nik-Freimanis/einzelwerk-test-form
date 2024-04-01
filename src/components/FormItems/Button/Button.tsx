'use client'

import {ButtonHTMLAttributes, useState} from 'react';
import cn from 'classnames';
import s from './button.module.scss'

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
    variant?: 'fillSmall' | 'outlineSmall' | 'fillBig',
    onClick?: ((e: any) => any | Promise<any>),
    loading?: boolean
}

const Button = ({variant = 'fillSmall', onClick, disabled, loading = false, type = 'button', children, ...props}: ButtonProps) => {
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
                variant === 'fillSmall' && s.button_fillSmall,
                variant === 'outlineSmall' && s.button_outlineSmall,
                variant === 'fillBig' && s.button_fillBig,
                (loading || isLoading) && s.button_loading,
            )}
            onClick={clickHandler}
            disabled={loading || isLoading || disabled}
        >
            {children}
        </button>
    )
}


export default Button