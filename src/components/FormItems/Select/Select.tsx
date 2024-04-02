'use client'

import React, {forwardRef, useEffect, useState} from 'react';
import Select, { Props as SelectProps } from "react-select";
import { nanoid } from 'nanoid';

interface Option {
    value: string;
    label: string;
}

interface FormSelectProps {
    value?: Option | null;
    options: Option[];
    placeholder?: string;
}

export const FormSelect: React.FC<FormSelectProps & SelectProps> = forwardRef<HTMLSelectElement, FormSelectProps>(({ value, options, placeholder, ...props }, ref) => {
    const [isMounted, setIsMounted] = useState(false);
    const id = nanoid();

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <Select
            // @ts-ignore
            ref={ref}
            id={id}
            required={true}
            classNamePrefix="react-select"
            styles={{
                menu: (provided, state) => ({
                    ...provided,
                    borderRadius: '20px',
                    backgroundColor: 'var(--grey-100)',
                }),
                control: (provided) => ({
                    ...provided,
                    boxShadow: "none",
                    padding: "5px 20px",
                    border: "1px solid var(--grey-200)",
                    borderRadius: "20px",
                    backgroundColor: "var(--grey-100)",
                    color: "var(--grey-200)",
                    height: 64,
                    "&:hover": {
                        border: "1px solid var(--grey-200)",
                    },
                    "&:focus": {
                        border: "1px solid var(--grey-200)",
                    }
                }),
                container: (provided) => ({
                    ...provided,
                    borderWidth: 0,
                    borderRadius: '20px',
                }),
                placeholder: (provided) => ({
                    ...provided,
                    color: 'var(--grey-400)'
                }),
                valueContainer: (provider) => ({
                    ...provider,
                    padding: 'none',
                    "&:focused": {
                        color: 'var(--grey-950)'
                    }
                }),
                option: (provided, state) => ({
                    ...provided,
                    padding: '18px 24px',
                    color: state.isSelected ? "var(--grey-950)" : "var(--grey-400)",
                    backgroundColor: state.isSelected ? "var(--grey-100)" : "var(--grey-100)",
                    borderRadius: '50px 50px 0 0',
                    cursor: "pointer",
                    transition: 'all 0.1s ease 0s',
                    borderBottom: '1px solid var(--grey-200)',
                    "&:active": {
                        color: "var(--grey-950)",
                        backgroundColor: "var(--grey-100)",
                    },
                    "&:hover": {
                        outline: "none",
                        color: "var(--grey-700)",
                    },
                    "&:last-child": {
                        borderBottom: 'none',
                        borderRadius: '0 0 50px 50px'
                    }
                }),
                singleValue: (provided) => ({
                    ...provided,
                    color: 'var(--grey-950)',
                    padding: 'none',
                    backgroundColor: "none",
                }),
                indicatorSeparator: (provided) => ({
                    ...provided,
                    display: 'none'
                }),
                input: (provided) => ({
                    ...provided,
                    color: 'var(--grey-200)',
                    padding: 'none',
                    cursor: 'pointer',
                }),
            }}
            placeholder={placeholder}
            isClearable={false}
            isMulti={false}
            options={options}
            {...props}
        />
    );
});
