import React from 'react';
import Transition from './Transition';

interface EducationProps {
    className?: string;
}

interface Education {
    degree: string;
    school: string;
    location: string;
    period: string;
    gpa: string;
    description: string;
    courses: string[];
    icon: string;
}

const Education: React.FC<EducationProps> = ({ className }) => {
    const education: Education[] = [
        {
            degree: 'Master of Science in Computer Science',
            school: 'Stanford University',
            location: 'Stanford, CA',
            period: '2018 - 2020',
            gpa: '3.9/4.0',
            description: 'Specialized in Artificial Intelligence and Machine Learning. Conducted research in natural language processing and computer vision.',
            courses: [
                'Advanced Machine Learning',
                'Deep Learning Systems',
                'Natural Language Processing',
                'Computer Vision',
                'Distributed Systems'
            ],
            icon: '🎓'
        },
        {
            degree: 'Bachelor of Science in Computer Science',
            school: 'University of California, Berkeley',
            location: 'Berkeley, CA',
            period: '2014 - 2018',
            gpa: '3.8/4.0',
            description: 'Focused on software engineering and data structures. Participated in various hackathons and coding competitions.',
            courses: [
                'Data Structures and Algorithms',
                'Software Engineering',
                'Database Systems',
                'Operating Systems',
                'Computer Networks'
            ],
            icon: '📚'
        }
    ];

    return (
        <div className="fixed inset-0 -z-10 ">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50"></div>
                <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-purple-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
                <div className="absolute bottom-1/4 right-1/4 w-[40rem] h-[40rem] bg-blue-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-float-delay"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-indigo-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
            </div>
        </div>
    );
};

export default Education;