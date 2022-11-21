import React from 'react';
import {Container} from "@mui/material";
import styles from './MainLayout.module.css';
import Navbar from "../../components/Navbar/Navbar";
import Player from "../../components/Player/Player";

interface MainLayoutProps {
    children: React.ReactNode;
    externalClasses?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({children, externalClasses = ''}) => {
    return (
        <>
            <Navbar/>
            <Container className={styles.Main + ' ' + externalClasses}>
                {children}
            </Container>
            <Player/>
        </>
    );
};

export default MainLayout;
