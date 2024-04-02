'use client'

import React, {useId, useState} from 'react';
import { useForm, Controller } from 'react-hook-form';
import Input from "@components/FormItems/Input/Input";
import Button from "@components/FormItems/Button/Button";
import FileItem from "@components/FormItems/FileItem";
import Icon from "@components/Icon";
import Checkbox from "@components/FormItems/Checkbox/Checkbox";
import {FormSelect} from "@components/FormItems/Select/Select";
import { nanoid } from "nanoid";


interface File {
    name: string;
    size: number;
    type: string;
}

const options = [
    { value: 'junior', label: 'Junior' },
    { value: 'middle', label: 'Middle' },
    { value: 'senior', label: 'Senior' },
    { value: 'lead', label: 'Lead' },
    { value: 'cto', label: 'CTO' },
];

export default function Home() {
    const [files, setFiles] = useState<File[]>([]);
    const [isDragging, setIsDragging] = useState(false);
    const [isUnsupportedFormat, setIsUnsupportedFormat] = useState(false);
    const { control, handleSubmit, formState: { errors } } = useForm();

    const selectKey = nanoid();

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = event.target.files;
        if (selectedFiles) {
            setFiles(Array.from(selectedFiles));
        }
    };

    const handleDragEnter = (event: React.DragEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsDragging(true);
    };

    const handleDragOver = (event: React.DragEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (event: React.DragEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsDragging(false);

        const droppedFiles = event.dataTransfer.files;
        if (droppedFiles) {
            const allowedFormats = ['.pdf', '.docx', '.png'];
            const filteredFiles = Array.from(droppedFiles).filter(file => {
                const extension = file.name.split('.').pop();
                return allowedFormats.includes(`.${extension}`);
            });
            setFiles(filteredFiles);
            setIsUnsupportedFormat(filteredFiles.length !== droppedFiles.length);
        }
    };

    const handleRemoveFile = (index: number) => {
        const newFiles = [...files];
        newFiles.splice(index, 1);
        setFiles(newFiles);
    };

    const [isChecked, setIsChecked] = useState(false);
    const handleChange = (checked: boolean) => {
        setIsChecked(checked);
    };

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <main className="flex min-h-screen items-center justify-center p-24">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className={'flex min-w-[640px] w-[560px] min-h-[732px] bg-white rounded-[32px]'}
                onDragEnter={handleDragEnter}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                {isDragging ? (
                    <div className={'m-[40px] rounded-[24px] w-full p-[24px] border-dashed border-2 border-gray-400'}>
                        <div className="flex flex-col gap-[16px] flex items-center justify-center w-full h-full">
                            <span className="text-gray-950 text-[24px] font-medium">Drop files here</span>
                            <p className="text-gray-700 text-[20px]">Put your files in this field</p>
                        </div>
                    </div>
                ) : (
                    <div className={'flex flex-col p-[40px] gap-[32px]'}>
                        <div className={'flex flex-col gap-[16px]'}>
                            <h1 className={'font-semibold leading-[44px] text-grey-950'}>Drop us a line</h1>
                            <h2 className={'text-grey-700'}>Our documentary campaigns feature leading figures,
                                organisations and leaders, in open and candid discussions.</h2>
                        </div>
                        <div className={'flex flex-col gap-[24px]'}>
                            <div className={'flex flex-col gap-[16px]'}>
                                <Controller
                                    control={control}
                                    name="name"
                                    rules={{ required: true }}
                                    render={({ field }) => (
                                        <div className={'flex flex-col gap-[4px] w-full'}>
                                            <Input {...field} placeholder="Name" error={errors.name} />
                                            {errors.name && <p className={'text-red-500'}>Name is required</p>}
                                        </div>
                                    )}
                                />
                                <div className={'flex flex-row gap-[16px]'}>
                                    <Controller
                                        control={control}
                                        name="phone"
                                        rules={{ required: true }}
                                        render={({ field }) => (
                                            <div className={'flex flex-col gap-[4px] w-full'}>
                                                <Input {...field} placeholder="Phone" error={errors.phone}/>
                                                {errors.phone && <p className={'text-red-500'}>Phone is required</p>}
                                            </div>
                                        )}
                                    />

                                    <Controller
                                        control={control}
                                        name="email"
                                        rules={{ required: true }}
                                        render={({ field }) => (
                                            <div className={'flex flex-col gap-[4px] w-full'}>
                                                <Input {...field} placeholder="E-mail" error={errors.email}/>
                                                {errors.email && <p className={'text-red-500'}>E-mail is required</p>}
                                            </div>
                                        )}
                                    />
                                </div>
                                <Controller
                                    control={control}
                                    name="skill"
                                    render={({ field }) => (
                                        <FormSelect instanceId={useId()} placeholder={'Your skill'}  {...field} options={options} />
                                    )}
                                />
                                <div className={'flex flex-row gap-[16px]'}>
                                    <div className={'flex flex-col max-w-[310px] gap-[12px]'}>
                                        <h3 className={'font-medium text-grey-950'}>Dokument hochladen</h3>
                                        <p className={'text-grey-400 text-[12px]'}>Klicken Sie auf die Schaltfläche oder ziehen Sie
                                            ein
                                            Dokument im PDF-, DOCX-, PNG.</p>
                                        {files.length > 0 && (
                                            <div className={'flex max-w-[310px] gap-[8px] flex-wrap'}>
                                                {files.map((file, index) => (
                                                    <FileItem key={index} file={file} index={index}
                                                              handleRemoveFile={handleRemoveFile}/>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                    <label htmlFor="file-upload" className={'cursor-pointer'}>
                                        {isUnsupportedFormat ? (
                                            <div className={'flex flex-col gap-[4px]'}>
                                                <Icon width={236} height={122} name={'warning'}/>
                                                <p className={'text-[16px] text-red-500'}>Unsupported file format</p>
                                            </div>
                                        ) : (
                                            <Icon width={236} height={122} name={'plus'}/>
                                        )}
                                    </label>
                                    <input id="file-upload" type="file" accept=".pdf,.docx,.png"
                                           onChange={handleFileChange}
                                           multiple className={'hidden'} />
                                </div>
                            </div>
                            <div>
                                <Controller
                                    control={control}
                                    render={({ field }) => (
                                        <Checkbox
                                            {...field}
                                            // @ts-ignore
                                            checked={field.value === 'true'}
                                            label={'I’m agree with every data you collect'}
                                            value={field.value === 'true' ? 'true' : 'false'}
                                        />
                                    )}
                                    defaultValue={false}
                                    name='checkbox'
                                    rules={{
                                        validate: (value: string) => value === 'true'
                                    }}
                                />
                            </div>
                            <div>
                                <Button type={'submit'}>Send</Button>
                            </div>
                        </div>
                    </div>
                )}
            </form>
        </main>
    );
}
