import React, { useState } from 'react';

interface EducationProps {
    className?: string;
}

interface Course {
    code: string;
    name: string;
    description: string;
    topics: string[];
    skills: string[];
    projects?: string[];
}

interface Degree {
    period: string;
    degree: string;
    major: string;
    institution: string;
    location: string;
    gpa: string;
    description: string;
    courses: Course[];
}

const Education: React.FC<EducationProps> = ({ className }) => {
    const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

    const degrees: Degree[] = [
        {
            period: "2023 - Present",
            degree: "Bachelor of Science",
            major: "Specialization in Computer Science",
            institution: "Western University",
            location: "",
            gpa: "3.9/4.0",
            description: "This program provides a deep dive into foundational computing principles, including algorithms, data structures, software engineering, and systems-level programming. My coursework emphasizes both theoretical understanding and practical application, preparing me to tackle complex technical challenges.",
            courses: [
                {
                    code: "CS 2208",
                    name: "Computer Organization & Architecture",
                    description: "This course gives an understanding of what a modern computer can do. It covers the internal representation of various data types and focuses on the architectural components of computers (how these components are interconnected and the nature of the information flow between them). Assembly language is used to reinforce these issues.",
                    topics: [
                        "Memory Management",
                        "CPU",
                        "ARM Assembly",
                    ],
                    skills: ["Assembly"],
                    projects: [
                        "String C Memory Reallocation Implementation",
                    ]
                },
                {
                    code: "CS 2210",
                    name: "Data Structures and Algorithms",
                    description: "All sorts of Multiway search trees, graphs and their associated algorithms; file structures; sorting, searching such as Djikstra and Prim Jarnik Algorithms, and hashing techniques; time complexity.",
                    topics: [
                        "Binary Search Trees",
                        "Hash Tables",
                        "Graph Algorithms",
                        "Dynamic Programming",
                        "Time Complexity Analysis"
                    ],
                    skills: ["Java", "Algorithm Analysis", "Problem Solving"],
                    projects: [
                        "Implemented a Maze Graph Solver",
                    ]
                },
                {
                    code: "CS 2211",
                    name: "C & Unix",
                    description: "Understanding how programs execute (compilation, linking and loading); an introduction to Unix; scripting languages; the C programming language; system calls; memory management; libraries; multi-component program organization and builds; version control; debuggers and profilers.",
                    topics: [
                        "C Compilation",
                        "C Memory Management",
                        "C Libraries",
                        "C Debuggers",
                        "Unix Commands",
                        "Unix File System",
                        "Unix Secure File Transfer"
                    ],
                    skills: ["C", "Unix", "Bash Script"],
                    projects: [
                        "Built a C terminal calendar app where users can add, remove, and view events."
                    ]
                },
                {
                    code: "CS 2212",
                    name: "Software Engineering",
                    description: "A team project course that provides practical experience in the software engineering field. Introduction to the structure and unique characteristics of large software systems, and concepts and techniques in the design, management and implementation of large software systems.",
                    topics: [
                        "Design Patterns",
                        "UML Modeling",
                        "Software Architecture"
                    ],
                    skills: ["Java", "Design Patterns", "UML"],
                    projects: [
                        "Java Virtual Pet Team Project",
                    ]
                },
                {
                    code: "CS 3346",
                    name: "Artificial Intelligence",
                    description: "Introduction to Artificial Intelligence; logic programming; heuristic search; knowledge representation; expert systems.",
                    topics: [
                        "Search Algorithms",
                        "Heuristics",
                        "Various Bayes Nets",
                        "Transformer Model"
                    ],
                    skills: ["Python", "Artificial Intelligence"],
                    projects: [
                        "Created the basic logic gates from the transformer model.",
                    ]
                }
            ]
        },
        {
            period: "2023 - Present",
            degree: "Major",
            major: "Mathematics",
            institution: "Western University",
            location: "",
            gpa: "3.9/4.0",
            description: "Provides a robust quantitative and analytical foundation crucial for advanced computational fields, including Artificial Intelligence. My coursework delves into critical mathematical concepts such as linear algebra, essential for understanding data transformations and neural network architectures; calculus, vital for optimization algorithms and gradient-based learning; and differential equations, foundational for modeling dynamic systems and complex data behaviors. This rigorous mathematical training equips me with the tools to deeply comprehend, develop, and innovate within AI and data-driven domains.",
            courses: [
                {
                    code: "CALC 1501",
                    name: "Calculus II",
                    description: "Techniques of integration; The Mean Value Theorem and its consequences; series, Taylor series with applications; parametric and polar curves with applications; first order linear and separable differential equations with applications.",
                    topics: [
                        "Integration Methods",
                        "Taylor Series",
                        "Polar Curves",
                        "Differential Equations"
                    ],
                    skills: [],
                    projects: []
                },
                {
                    code: "CS 2209",
                    name: "Applied Computer Science Logic",
                    description: "Propositional and predicate logic; representing static and dynamic properties of real-world systems; logic as a tool for representation, reasoning and calculation; logic and programming.",
                    topics: [
                        "Propositional Logic",
                        "Predicate Logic",
                    ],
                    skills: [],
                    projects: []
                },
                {
                    code: "MATH 2700",
                    name: "Linear Algebra II",
                    description: "The Gram-Schmidt process; similarity and orthogonal diagonalization; abstract vector spaces and linear transformations over arbitrary fields; change of basis; inner product spaces; norms and distance; least squares and Fourier approximation; singular value decomposition. Applications to differential equations and other topics will be emphasized throughout the course.",
                    topics: [
                        "Abstract Vector Spaces {Vector,Function,Matrix,Complex}",
                        "Solving Differential Equations with Eigenvalues and Eigenvectors",
                        "Isomorphisms for Easing computation",
                        "Change of Basis",
                        "Inner Product Spaces",
                        "Fourier Approximation",
                        "Singular Value Decomposition",
                        "Least Squares & Curve of Best Fit",
                        "Unitarily Diagnolizing over Complex Vector Spaces"
                    ],
                    skills: [],
                    projects: []
                }
            ]
        }
    ];

    // Calculate combined GPA
    const calculateCombinedGPA = () => {
        let totalGPA = 0;
        let count = 0;
        
        degrees.forEach(degree => {
            const gpaValue = parseFloat(degree.gpa.split('/')[0]);
            if (!isNaN(gpaValue)) {
                totalGPA += gpaValue;
                count++;
            }
        });

        return count > 0 ? (totalGPA / count).toFixed(1) : "N/A";
    };

    const combinedGPA = calculateCombinedGPA();

    return (
        <section id="education" className="relative py-20 overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-fuchsia-50">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]"></div>
            </div>
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-violet-200/20 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
                <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-fuchsia-200/20 rounded-full mix-blend-multiply filter blur-xl animate-float-delay"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate-fade-in-up">
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-violet-600 via-fuchsia-600 to-indigo-600 bg-clip-text text-transparent">
                        Education
                    </h2>
                    <div className="h-0.5 w-32 bg-gradient-to-r from-violet-400 to-fuchsia-400 mx-auto mt-4 animate-subtle-pulse"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {degrees.map((degree, index) => (
                        <div
                            key={index}
                            className="relative bg-white/80 backdrop-blur-sm border border-violet-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Degree Icon */}
                            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full flex items-center justify-center shadow-lg">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"/>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"/>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14v7"/>
                                </svg>
                            </div>

                            {/* Content */}
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-2xl font-semibold text-violet-700">
                                        {degree.degree}
                                    </h3>
                                    <h4 className="text-lg text-violet-600">
                                        {degree.major}
                                    </h4>
                                    <p className="text-violet-500 font-medium">
                                        {degree.period}
                                    </p>
                                    <p className="text-violet-600 mt-2">
                                        {degree.institution}
                                    </p>
                                    <p className="text-violet-600">
                                        GPA: {degree.gpa}
                                    </p>
                                </div>

                                <p className="text-violet-600">
                                    {degree.description}
                                </p>

                                {/* Courses */}
                                <div>
                                    <h5 className="text-sm font-medium text-violet-700 mb-2">
                                        Key Courses
                                    </h5>
                                    <div className="space-y-2">
                                        {degree.courses.map((course, courseIndex) => (
                                            <button
                                                key={courseIndex}
                                                onClick={() => setSelectedCourse(course)}
                                                className="w-full text-left p-3 bg-violet-50 hover:bg-violet-100 rounded-lg transition-colors duration-300 group"
                                            >
                                                <div className="flex justify-between items-center">
                                                    <div>
                                                        <span className="text-sm font-semibold text-violet-600 block">{course.code}</span>
                                                        <span className="text-violet-700 font-medium">{course.name}</span>
                                                    </div>
                                                    <svg 
                                                        className="w-5 h-5 text-violet-400 group-hover:text-violet-600 transform group-hover:translate-x-1 transition-all duration-300" 
                                                        fill="none" 
                                                        stroke="currentColor" 
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                                                    </svg>
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Combined GPA Display */}
                <div className="text-center mt-12 animate-fade-in-up-delay-2">
                    <div className="inline-block bg-white/80 backdrop-blur-sm border border-violet-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                        <div className="flex items-center justify-center space-x-4">
                            <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                            </svg>
                            <div>
                                <h4 className="text-xl font-semibold text-violet-700">Combined GPA</h4>
                                <p className="text-3xl font-bold text-yellow-500">{combinedGPA}/4.0</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Course details modal */}
                {selectedCourse && (
                    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in">
                        <div className="bg-white/90 backdrop-blur-sm rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl border border-violet-100">
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <span className="text-sm font-semibold text-violet-600 block">{selectedCourse.code}</span>
                                        <h3 className="text-2xl font-bold text-violet-700">{selectedCourse.name}</h3>
                                    </div>
                                    <button 
                                        onClick={() => setSelectedCourse(null)}
                                        className="text-violet-400 hover:text-violet-600 transition-colors duration-300"
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                                        </svg>
                                    </button>
                                </div>

                                <p className="text-violet-600 mb-6">{selectedCourse.description}</p>

                                <div className="space-y-6">
                                    {selectedCourse.topics && selectedCourse.topics.length > 0 && (
                                        <div>
                                            <h4 className="text-lg font-semibold text-violet-700 mb-3">Key Topics</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedCourse.topics.map((topic, idx) => (
                                                    <span 
                                                        key={idx}
                                                        className="px-3 py-1 bg-violet-100 text-violet-600 rounded-full text-sm"
                                                    >
                                                        {topic}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {selectedCourse.skills && selectedCourse.skills.length > 0 && (
                                        <div>
                                            <h4 className="text-lg font-semibold text-violet-700 mb-3">Skills Developed</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedCourse.skills.map((skill, idx) => (
                                                    <span 
                                                        key={idx}
                                                        className="px-3 py-1 bg-fuchsia-100 text-fuchsia-600 rounded-full text-sm"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {selectedCourse.projects && selectedCourse.projects.length > 0 && (
                                        <div>
                                            <h4 className="text-lg font-semibold text-violet-700 mb-3">Notable Projects</h4>
                                            <ul className="space-y-2">
                                                {selectedCourse.projects.map((project, idx) => (
                                                    <li key={idx} className="flex items-start">
                                                        <span className="w-1.5 h-1.5 bg-violet-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                                        <span className="text-violet-600">{project}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Education;