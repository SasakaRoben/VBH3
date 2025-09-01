export interface User {
    id: string;
    name: string;
    email: string;
    interests: string[];
}

export interface CareerRecommendation {
    title: string;
    description: string;
    requiredSkills: string[];
    learningPaths: LearningPath[];
}

export interface LearningPath {
    title: string;
    resources: string[];
    duration: string; // e.g., "3 months", "6 weeks"
}