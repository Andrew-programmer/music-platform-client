import React from 'react';
import styles from "../styles/indexPage.module.css";
import Navbar from "../components/Navbar/Navbar";

const Index = () => {
    return (
        <>
            <Navbar/>
            <div className={styles.center}>
                <h1>Welcome!</h1>
                <h3>Here you can find best music!</h3>
            </div>
        </>

    );
};

export default Index;
