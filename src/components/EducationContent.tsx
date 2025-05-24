import React from 'react';
import Transition from './Transition';

interface EducationContentProps {
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

const EducationContent: React.FC<EducationContentProps> = ({ className }) => {
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
        <Transition>
            <section id="education" className="relative min-h-screen flex items-center justify-center py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Education
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            My academic achievements and expertise
                        </p>
                    </div>

                    {/* Education Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {education.map((edu) => (
                            <div
                                key={edu.degree}
                                className="bg-white/40 backdrop-blur-xl rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20"
                            >
                                {/* Icon and Degree */}
                                <div className="flex items-center space-x-4 mb-6">
                                    <div className="w-16 h-16 rounded-full bg-white/60 backdrop-blur-sm flex items-center justify-center shadow-lg">
                                        <span className="text-3xl">{edu.icon}</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900">
                                            {edu.degree}
                                        </h3>
                                        <p className="text-purple-600 font-medium">{edu.school}</p>
                                    </div>
                                </div>

                                {/* Location and Period */}
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className="flex items-center text-gray-600">
                                        <svg className="w-5 h-5 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                        </svg>
                                        {edu.location}
                                    </div>
                                    <div className="flex items-center text-gray-600">
                                        <svg className="w-5 h-5 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                                        </svg>
                                        {edu.period}
                                    </div>
                                </div>

                                {/* GPA */}
                                <div className="mb-4">
                                    <div className="inline-flex items-center px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full">
                                        <span className="text-sm font-medium text-purple-600">
                                            GPA: {edu.gpa}
                                        </span>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-gray-600 mb-6">
                                    {edu.description}
                                </p>

                                {/* Courses */}
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-900 mb-3">
                                        Key Courses
                                    </h4>
                                    <div className="grid grid-cols-1 gap-2">
                                        {edu.courses.map((course, idx) => (
                                            <div
                                                key={idx}
                                                className="flex items-center space-x-2 text-gray-600 bg-white/40 backdrop-blur-sm px-3 py-2 rounded-lg hover:bg-white/60 transition-colors duration-300"
                                            >
                                                <span className="text-purple-500">📚</span>
                                                <span className="text-sm">{course}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Transition>
    );
};

export default EducationContent; 