import React, { useState } from 'react';
import CareerAdvisor from '../components/CareerAdvisor';
import styles from '../styles/CareerAdvisor.module.css';

const CareerPage = () => {
    const [loading, setLoading] = useState(false);

    return (
        <div className={styles.container}>
            <h1>Career Guidance</h1>
            <p>Welcome to the NextStep AI career guidance platform. Please interact with our AI advisor below to find your ideal career path.</p>
            <CareerAdvisor setLoading={setLoading} />
            {loading && <p>Loading recommendations...</p>}
        </div>
    );
};

export default CareerPage;