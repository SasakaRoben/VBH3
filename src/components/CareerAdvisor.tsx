import React, { useState } from 'react';
import styles from '../styles/CareerAdvisor.module.css';
import { getCareerRecommendations } from '../utils/ai';

const CareerAdvisor: React.FC = () => {
    const [userInput, setUserInput] = useState('');
    const [responses, setResponses] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserInput(event.target.value);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        setResponses([...responses, `You: ${userInput}`]);

        const recommendation = await getCareerRecommendations(userInput);
        setResponses([...responses, `You: ${userInput}`, `AI: ${recommendation}`]);
        setUserInput('');
        setLoading(false);
    };

    return (
        <div className={styles.container}>
            <h2>Career Advisor Chatbot</h2>
            <div className={styles.chatbox}>
                {responses.map((response, index) => (
                    <div key={index} className={styles.message}>
                        {response}
                    </div>
                ))}
                {loading && <div className={styles.loading}>Loading...</div>}
            </div>
            <form onSubmit={handleSubmit} className={styles.inputForm}>
                <input
                    type="text"
                    value={userInput}
                    onChange={handleInputChange}
                    placeholder="Enter your interests..."
                    className={styles.input}
                />
                <button type="submit" className={styles.button}>Send</button>
            </form>
        </div>
    );
};

export default CareerAdvisor;