import React, { useState } from 'react';
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
    courses: Course[];
    year: number;
}

interface Course {
    name: string;
    description: string;
    topics: string[];
}

const EducationContent: React.FC<EducationContentProps> = ({ className }) => {
    const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

    const education: Education[] = [
        {
            degree: 'Master of Science in Computer Science',
            school: 'Stanford University',
            location: 'Stanford, CA',
            period: '2018 - 2020',
            gpa: '3.9/4.0',
            description: 'Specialized in Artificial Intelligence and Machine Learning. Conducted research in natural language processing and computer vision.',
            courses: [
                {
                    name: 'Advanced Machine Learning',
                    description: 'Comprehensive study of modern machine learning techniques and their applications.',
                    topics: ['Neural Networks', 'Deep Learning', 'Reinforcement Learning', 'Natural Language Processing']
                },
                {
                    name: 'Deep Learning Systems',
                    description: 'Study of deep learning architectures and their implementation in production systems.',
                    topics: ['CNN', 'RNN', 'Transformer Models', 'Model Optimization']
                },
                {
                    name: 'Natural Language Processing',
                    description: 'Advanced techniques in processing and understanding human language.',
                    topics: ['Text Classification', 'Named Entity Recognition', 'Machine Translation', 'Question Answering']
                },
                {
                    name: 'Computer Vision',
                    description: 'Study of algorithms and techniques for processing visual information.',
                    topics: ['Image Classification', 'Object Detection', 'Image Segmentation', 'Video Analysis']
                },
                {
                    name: 'Distributed Systems',
                    description: 'Design and implementation of large-scale distributed computing systems.',
                    topics: ['Consistency Models', 'Fault Tolerance', 'Scalability', 'Distributed Algorithms']
                }
            ],
            year: 2018
        },
        {
            degree: 'Bachelor of Science in Computer Science',
            school: 'University of California, Berkeley',
            location: 'Berkeley, CA',
            period: '2014 - 2018',
            gpa: '3.8/4.0',
            description: 'Focused on software engineering and data structures. Participated in various hackathons and coding competitions.',
            courses: [
                {
                    name: 'Data Structures and Algorithms',
                    description: 'Comprehensive study of fundamental data structures and algorithmic techniques.',
                    topics: ['Sorting Algorithms', 'Graph Theory', 'Dynamic Programming', 'Complexity Analysis']
                },
                {
                    name: 'Software Engineering',
                    description: 'Principles and practices of modern software development.',
                    topics: ['Design Patterns', 'Testing', 'Version Control', 'Agile Methodologies']
                },
                {
                    name: 'Database Systems',
                    description: 'Study of database design, implementation, and optimization.',
                    topics: ['SQL', 'NoSQL', 'Transaction Management', 'Query Optimization']
                },
                {
                    name: 'Operating Systems',
                    description: 'Study of operating system concepts and implementation.',
                    topics: ['Process Management', 'Memory Management', 'File Systems', 'Concurrency']
                },
                {
                    name: 'Computer Networks',
                    description: 'Study of network protocols and distributed systems.',
                    topics: ['TCP/IP', 'Network Security', 'Routing', 'Distributed Applications']
                }
            ],
            year: 2014
        }
    ].sort((a, b) => b.year - a.year);

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
                        <div className="mt-4 flex items-center justify-center space-x-2">
                            <span className="text-yellow-500 text-2xl">★</span>
                            <span className="text-gray-700 font-medium">Overall GPA: 3.85/4.0</span>
                        </div>
                    </div>

                    {/* Education Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {education.map((edu) => (
                            <div key={edu.degree} className="bg-white/40 backdrop-blur-xl rounded-lg p-8 shadow-lg border border-white/20">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900">{edu.degree}</h3>
                                        <p className="text-xl text-purple-600 font-medium">{edu.school}</p>
                                    </div>
                                    <div className="inline-flex items-center px-4 py-2 bg-white/60 backdrop-blur-sm rounded-lg">
                                        <span className="text-sm font-medium text-purple-600">
                                            GPA: {edu.gpa}
                                        </span>
                                    </div>
                                </div>

                                {/* Location and Period */}
                                <div className="flex items-center space-x-6 mb-6">
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

                                {/* Description */}
                                <p className="text-gray-600 mb-8">
                                    {edu.description}
                                </p>

                                {/* Courses */}
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900 mb-4">
                                        Key Courses
                                    </h4>
                                    <div className="grid grid-cols-1 gap-4">
                                        {edu.courses.map((course, idx) => (
                                            <div
                                                key={idx}
                                                onClick={() => setSelectedCourse(course)}
                                                className="flex items-start space-x-3 text-gray-600 bg-white/40 backdrop-blur-sm px-4 py-3 rounded-lg cursor-pointer hover:bg-white/60 transition-colors duration-300"
                                            >
                                                <span className="text-purple-500 mt-1">•</span>
                                                <div>
                                                    <h5 className="font-medium text-gray-900">{course.name}</h5>
                                                    <p className="text-sm text-gray-600 line-clamp-2">{course.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Course Modal */}
                    {selectedCourse && (
                        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
                            <div className="bg-white/80 backdrop-blur-xl rounded-lg p-8 max-w-2xl w-full shadow-xl border border-white/20">
                                <div className="flex justify-between items-start mb-6">
                                    <h3 className="text-2xl font-bold text-gray-900">{selectedCourse.name}</h3>
                                    <button
                                        onClick={() => setSelectedCourse(null)}
                                        className="text-gray-400 hover:text-gray-600 transition-colors duration-300"
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                                        </svg>
                                    </button>
                                </div>

                                <p className="text-gray-700 mb-6">
                                    {selectedCourse.description}
                                </p>

                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                                        Key Topics
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedCourse.topics.map((topic, idx) => (
                                            <span
                                                key={idx}
                                                className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-lg text-gray-800 shadow-sm"
                                            >
                                                {topic}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </Transition>
    );
};

export default EducationContent; 