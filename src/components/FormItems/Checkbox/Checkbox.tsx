import React, { ChangeEvent, forwardRef, HTMLInputTypeAttribute } from 'react';
import Icon from '@components/Icon';

interface CheckboxProps {
    id?: string;
    name?: string;
    type?: HTMLInputTypeAttribute;
    label?: string;
    value: string;
    onChange: (value: string) => void;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
    ({ name, type = 'checkbox', label, id, value, onChange }: CheckboxProps, ref) => {
        const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
            onChange(event.target.value);
        };

        return (
            <label
                tabIndex={0}
                htmlFor={id}
                className={'flex flex-row gap-[16px] items-center cursor-pointer'}
            >
                {value === 'true' ? ( // Check if the value is 'true' as a string
                    <span className={'flex w-[24px] h-[24px] rounded-[8px] justify-center items-center border-[1px] border-solid border-blue-600'}>
                        <Icon name={'system-check'} width={16} height={16} />
                    </span>
                ) : (
                    <span className={'flex w-[24px] h-[24px] rounded-[8px] justify-center items-center border-[1px] border-solid border-gray-200'}>
                    </span>
                )}
                {label && <span className={'text-[18px] text-grey-500 leading-[26px]'}>{label}</span>}
                <input
                    type={type}
                    name={name}
                    checked={value === 'true'}
                    ref={ref}
                    id={id}
                    className={'w-0 h-0 opacity-0 hidden'}
                    onChange={handleChange}
                    value="true"
                />
            </label>
        );
    }
);

export default Checkbox;
