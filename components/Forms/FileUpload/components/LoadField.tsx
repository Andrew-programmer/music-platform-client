import React, {LegacyRef, ReactNode, useRef, useState} from 'react';

import styles from './LoadField.module.scss';

interface LoadFieldProps {
    children: ReactNode,
}

const LoadField: React.FC<LoadFieldProps> = ({children}) => {

    return (
        <div className={styles.Field}>
            {children}
        </div>
    );
};

export default LoadField;
