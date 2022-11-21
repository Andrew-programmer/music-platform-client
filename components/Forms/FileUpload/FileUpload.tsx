import React, {LegacyRef, ReactNode, useRef, useState} from 'react';

import styles from './FileUpload.module.scss';

interface FileUploadProps {
    setFile: Function,
    accept: string,
    children: ReactNode
}

const FileUpload: React.FC<FileUploadProps> = ({setFile, accept, children}) => {
    const ref: LegacyRef<any> = useRef<HTMLInputElement>();

    const handleClick = () => {
        return ref.current.click();
    }

    const onChange = (event: React.ChangeEvent<HTMLDivElement>) => {
        setFile(event.target.files[0]);
    }

    return (
        <div onClick={handleClick}>
            <input
                className={styles.DefaultInput}
                type={'file'}
                accept={accept}
                ref={ref}
                onChange={onChange}
            />
            {children}
        </div>
    );
};

export default FileUpload;
