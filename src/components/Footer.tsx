import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} NextStep AI. All rights reserved.</p>
                <div className="flex justify-center space-x-4 mt-2">
                    <a href="https://twitter.com/NextStepAI" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://linkedin.com/company/NextStepAI" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://facebook.com/NextStepAI" target="_blank" rel="noopener noreferrer">Facebook</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;