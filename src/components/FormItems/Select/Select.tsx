import React from 'react';
import ReactSelect from 'react-select';
import { DropdownIndicator } from './DropdownIndicator';
import { StateManagerProps } from 'react-select/dist/declarations/src/stateManager';

interface NewSelectProps extends StateManagerProps {
    options: Array<{ value: string, label: string }> | any
    name?: string
    changeHandler?: (name: string, value: string) => void
    defaultValue?: { value: string, label: string }
}

export const Select = ({options, name, defaultValue, changeHandler, ...props}: NewSelectProps) => {
    return (
        <ReactSelect
            {...props}
            className={'select'}
            classNamePrefix={'select'}
            components={{DropdownIndicator}}
            options={options}
            defaultValue={defaultValue}
            name={name}
            instanceId={name}
            isSearchable={false}
            //@ts-ignore
            onChange={({value}: { value: string, label: string }) => {
                if (!value || !name || !changeHandler) return
                changeHandler && changeHandler(name, value)
            }}
        />
    )
}
