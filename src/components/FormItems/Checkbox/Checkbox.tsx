import React, {ChangeEvent, HTMLInputTypeAttribute, useState} from 'react';
import Icon from '@components/Icon';


interface CheckboxProps {
    id?: string
    name?: string
    type?: HTMLInputTypeAttribute
    label?: string
    checked: boolean
    onChange: (checked: boolean) => void
}

const Checkbox = ({name, type = 'checkbox', label, id, checked, onChange}: CheckboxProps) => {

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.checked);
    };

    return (
        <label
            tabIndex={0}
            htmlFor={id}
            className={'flex flex-row gap-[16px] items-center cursor-pointer'}
        >

            {checked ?
                <span
                    className={'flex w-[24px] h-[24px] rounded-[8px] justify-center items-center border-[1px] border-solid border-blue-600'}>
                    <Icon name={'system-check'} width={16} height={16}/>
                </span>
                :
                <span
                    className={'flex w-[24px] h-[24px] rounded-[8px] justify-center items-center border-[1px] border-solid border-gray-200'}>
                </span>
            }
            {label && (
                <span className={'text-[18px] text-grey-500 leading-[26px]'}>{label}</span>
            )}
            <input
                type={type}
                name={name}
                checked={checked}
                id={id}
                className={'w-0 h-0 opacity-0 hidden'}
                onChange={handleChange}
            />
        </label>
    );
};

export default Checkbox;
