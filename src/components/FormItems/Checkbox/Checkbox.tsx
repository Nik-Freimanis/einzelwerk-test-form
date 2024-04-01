import React, { ChangeEvent, HTMLInputTypeAttribute, useState } from 'react';
import cn from 'classnames';
import s from './checkbox.module.scss';
import Icon from '../../Sprites/Icon';


interface CheckboxProps {
    id?: string
    name?: string
    type?: HTMLInputTypeAttribute
    label?: string
    value?: string
    checked: boolean
    onChange: (e: ChangeEvent<HTMLInputElement>) => Promise<void>
}

const Checkbox = <T extends string>({name, type = 'checkbox', value, label, id, checked, onChange,}: CheckboxProps) => {
    const [disabled,setDisabled] = useState(false);

    const changeHandler = async (e: ChangeEvent<HTMLInputElement>) => {
        if(disabled) return
        setDisabled(true)
        await onChange(e)
        setDisabled(false)
    };

    return (
        <label
            tabIndex={0}
            htmlFor={id}
            className={cn(
                s.checkbox,
                checked && s._active,
                disabled && s._disabled,
            )}
        >
            <span className={s.checkbox__indicator}>
                {checked && <Icon name={'system-check'} width={18} height={18} color={'var(--new-light)'}/>}
            </span>
            {label && (
                <span className={s.checkbox__text}>{label}</span>
            )}
            <input
                type={type}
                name={name}
                checked={checked}
                value={value}
                id={id}
                onChange={changeHandler}
                className={s.checkbox__input}
            />
        </label>
    );
};

export default Checkbox;
