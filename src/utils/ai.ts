import axios from 'axios';

const API_URL = 'https://api.example.com/ai'; // Replace with actual AI service endpoint

export const getCareerRecommendations = async (userInput) => {
    try {
        const response = await axios.post(`${API_URL}/recommendations`, {
            input: userInput,
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching career recommendations:', error);
        throw error;
    }
};

export const getLearningPaths = async (career) => {
    try {
        const response = await axios.post(`${API_URL}/learning-paths`, {
            career: career,
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching learning paths:', error);
        throw error;
    }
};