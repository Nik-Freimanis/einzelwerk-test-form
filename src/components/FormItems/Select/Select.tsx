'use client'

import Select, { Props } from "react-select";

const sampleOptions = [
    {
        label: "Finland",
        options: [
            {
                label: "Great Hotel",
                value: "Great Hotel",
            },
        ],
    },
    {
        label: "Sweden",
        options: [{ label: "Stockholm", value: "Stockholm" }],
    },
];



export const FormSelect = ({value, options = sampleOptions, ...props}: Props) => {
    return (
        <Select
            required={true}
            classNamePrefix="react-select"
            styles={{
                menu: (base) => ({...base, zIndex: 2}),
                control: (provided, state) => ({
                    ...provided,
                    boxShadow: "none",
                    border: "1px solid #E5E7EB",
                    borderRadius: "20px",
                    backgroundColor: "#fff",
                    color: "#000000",

                    height: 64,
                    "&:hover": {
                        border: "none"
                    },
                    "&:focus": {
                        border: "none"
                    }
                }),
                container: (provided, state) => ({
                    ...provided,
                    borderWidth: 0,
                    borderRadius: '20px'
                }),
                option: (provided, state) => ({
                    ...provided,
                    color: state.isSelected ? "#000" : "#000",
                    backgroundColor: state.isSelected ? "#F3F4F6" : "#fff",
                    cursor: "pointer",
                    transition: 'all 0.1s ease 0s',
                    "&:active": {
                        backgroundColor: "#fff",
                        color: "#000",
                    },
                    "&:hover": {
                        outline: "none"
                    },
                }),
                singleValue: (provided, state) => ({
                    ...provided,
                    color: '#000',
                    backgroundColor: "none"
                }),
                input: (provided, state) => ({
                    ...provided,
                    color: '#829AB1',
                    cursor: 'pointer'
                })
            }}
            placeholder={'Your skill'}
            isClearable={false}
            isMulti={false}
            options={options}
        />
    );
};