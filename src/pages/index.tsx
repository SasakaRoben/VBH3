import React from 'react';
import Link from 'next/link';
import styles from '../styles/globals.css';

const Home: React.FC = () => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Welcome to NextStep AI</h1>
                <p>Your AI-powered career guidance platform.</p>
            </header>
            <main className={styles.main}>
                <section className={styles.hero}>
                    <h2>Find Your Career Path</h2>
                    <Link href="/career">
                        <button className={styles.ctaButton}>Get Started</button>
                    </Link>
                </section>
                <section className={styles.links}>
                    <h3>Learn More</h3>
                    <ul>
                        <li>
                            <Link href="/about">About Us</Link>
                        </li>
                        <li>
                            <Link href="/career">Career Advisor</Link>
                        </li>
                    </ul>
                </section>
            </main>
            <footer className={styles.footer}>
                <p>&copy; {new Date().getFullYear()} NextStep AI. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;