import React from 'react';
import styles from "../styles/main/indexPage.module.css";
import MainLayout from "../layouts/MainLayout/MainLayout";

const Index: React.FC = () => {
    return (
        <>
            <MainLayout>
                <div className={styles.center}>
                    <h1>Welcome!</h1>
                    <h3>Here you can find best music!</h3>
                </div>
            </MainLayout>

        </>

    );
};

export default Index;
