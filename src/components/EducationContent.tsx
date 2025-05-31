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
            degree: 'Specialization in Computer Science',
            school: 'Western University',
            location: 'London, ON',
            period: '2023 - 2028',
            gpa: '3.9/4.0',
            description: 'Gives a strong foundation in all aspects of computer science.',
            courses: [
                {
                    name: 'Computer Organization & Architecture',
                    description: 'This course gives an understanding of what a modern computer can do. It covers the internal representation of various data types and focuses on the architectural components of computers (how these components are interconnected and the nature of the information flow between them). Assembly language is used to reinforce these issues.',
                    topics: ['Assembly', 'Low Level Memory Management']
                },
                {
                    name: 'Deep Learning Systems',
                    description: 'Study of deep learning architectures and their implementation in production systems.',
                    topics: ['CNN', 'RNN', 'Transformer Models', 'Model Optimization']
                },
                {
                    name: 'Data Structures & Algorithms',
                    description: 'Lists, stacks, queues, priority queues, trees, graphs, and their associated algorithms; file structures; sorting, searching, and hashing techniques; time and space complexity.',
                    topics: ['Stacks & Queues', 'B Trees', '2-4 Trees', 'Graphs', 'Hashing', 'Sorting', 'Searching']
                },
                {
                    name: 'Unix & C',
                    description: 'An introduction to software tools and systems programming. Topics include: understanding how programs execute (compilation, linking and loading); an introduction to a complex operating system (UNIX); scripting languages; the C programming language; system calls; memory management; libraries; multi-component program organization and builds; version control; debuggers and profilers.',
                    topics: ['Unix', 'C', 'System Calls', 'Memory Management', 'Libraries', 'Debuggers and Profilers']
                },
                {
                    name: 'Software Engineering',
                    description: 'A team project course that provides practical experience in the software engineering field. Introduction to the structure and unique characteristics of large software systems, and concepts and techniques in the design, management and implementation of large software systems.',
                    topics: ['Software Engineering', 'Software Design', 'Software Development', 'Software Testing', 'Software Maintenance']
                },
                {
                    name: 'Artificial Intelligence',
                    description: 'Introduction to Artificial Intelligence; logic programming; heuristic search; knowledge representation; expert systems.',
                    topics: ['Learning Agents', 'Heuristic Search', 'kMeans', 'kNN', 'Decision Trees', 'Naive Bayes', 'Neural Networks', 'Transformer Model']
                }
            ],
            year: 2028
        },
        {
            degree: 'Major in Mathematics',
            school: 'Western University',
            location: 'London, ON',
            period: '2023 - 2028',
            gpa: '3.9/4.0',
            description: 'Courses taken focus on uses in artificial intelligence and cybersecurity.',
            courses: [
                {
                    name: 'Calculus II',
                    description: 'Techniques of integration; The Mean Value Theorem and its consequences; series, Taylor series with applications; parametric and polar curves with applications; first order linear and separable differential equations with applications.',
                    topics: ['Integration', 'MVT', 'Taylor Series', 'Parametric and Polar Curves', 'Differential Equations']
                },
                {
                    name: 'Applied Logic',
                    description: 'Propositional and predicate logic; representing static and dynamic properties of real-world systems; logic as a tool for representation, reasoning and calculation; logic and programming.',
                    topics: ['Propositional Logic', 'Predicate Logic', 'Logic as a Tool', 'Logic and Programming']
                },
                {
                    name: 'Linear Algebra II',
                    description: 'The Gram-Schmidt process; similarity and orthogonal diagonalization; abstract vector spaces and linear transformations over arbitrary fields; change of basis; inner product spaces; norms and distance; least squares and Fourier approximation; singular value decomposition. Applications to differential equations and other topics will be emphasized throughout the course.',
                    topics: ['Abstract Vector Spaces', 'Linear Transformations', 'Change of Basis', 'Inner Product Spaces', 'Norms and Distance', 'Least Squares and Fourier Approximation', 'Singular Value Decomposition']
                },
            ],
            year: 2028
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
                            <span className="text-gray-700 font-medium">Overall GPA: 3.9/4.0</span>
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
                        <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center p-4 z-50 transition-all duration-300">
                            <div className="bg-white/60 backdrop-blur-md rounded-lg p-8 max-w-2xl w-full shadow-lg border border-white/20 transform transition-all duration-300">
                                <div className="flex justify-between items-start mb-6">
                                    <h3 className="text-2xl font-bold text-gray-900">{selectedCourse.name}</h3>
                                    <button
                                        onClick={() => setSelectedCourse(null)}
                                        className="text-gray-500 hover:text-gray-700 transition-colors duration-300"
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
                                                className="px-4 py-2 bg-white/70 backdrop-blur-sm text-purple-700 rounded-lg text-sm font-medium"
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