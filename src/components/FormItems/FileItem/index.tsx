import React from 'react';
import Icon from '@components/Icon';

interface FileItemProps {
    file: File;
    index: number;
    handleRemoveFile: (index: number) => void;
}

const FileItem: React.FC<FileItemProps> = ({ file, index, handleRemoveFile }) => {
    return (
        <label className={'py-[2px] px-[6px] flex flex-row gap-[8px] max-w-[205px] items-center rounded-full bg-grey-100'}>
            <span className={'flex items-center whitespace-nowrap overflow-hidden flex-row gap-[4px]'}>
                <div>
                    <Icon className={'w-[16px] h-[16px]'} name={'file'} width={16} height={16}/>
                </div>
                <p className={'block max-w-[165px] text-[12px] overflow-hidden overflow-ellipsis text-gray-950'}>
                    {file.name}
                </p>
            </span>

            <button type={'button'} onClick={() => handleRemoveFile(index)}>
                <Icon name={'delete'} width={20} height={20}/>
            </button>
        </label>
    );
}

export default FileItem;
