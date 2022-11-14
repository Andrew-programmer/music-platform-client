import React from 'react';
import {Container} from "@mui/material";
import styles from './MainLayout.module.css';
import Navbar from "../../components/Navbar/Navbar";

const MainLayout: React.FC = ({children}) => {
    return (
        <>
            <Navbar/>
            <Container className={styles.Main}>
                {children}
            </Container>
        </>
    );
};

export default MainLayout;
