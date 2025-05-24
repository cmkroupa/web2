import React, { useState } from 'react';

interface Project {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    features?: string[];
    challenges?: string[];
    solutions?: string[];
    link?: string;
}

interface ProjectsProps {
    className?: string;
}

const Projects: React.FC<ProjectsProps> = ({ className }) => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const projects: Project[] = [
        {
            title: 'E-Commerce Platform',
            description: 'A full-featured e-commerce platform with real-time inventory management and secure payment processing.',
            image: '/project1.jpg',
            technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            features: [
                'Real-time inventory tracking',
                'Secure payment processing',
                'User authentication and authorization',
                'Admin dashboard for order management'
            ],
            challenges: [
                'Implementing real-time updates across multiple users',
                'Ensuring secure payment processing',
                'Optimizing database queries for large inventories'
            ],
            solutions: [
                'Used WebSocket for real-time updates',
                'Implemented Stripe for secure payments',
                'Optimized MongoDB queries with proper indexing'
            ],
            link: 'https://github.com/yourusername/ecommerce'
        },
        {
            title: 'Task Management App',
            description: 'A collaborative task management application with real-time updates and team collaboration features.',
            image: '/project2.jpg',
            technologies: ['Vue.js', 'Express', 'PostgreSQL', 'Socket.io'],
            features: [
                'Real-time task updates',
                'Team collaboration tools',
                'Task prioritization and deadlines',
                'Progress tracking and reporting'
            ],
            challenges: [
                'Managing concurrent updates',
                'Implementing real-time notifications',
                'Handling offline functionality'
            ],
            solutions: [
                'Used optimistic updates for better UX',
                'Implemented WebSocket for notifications',
                'Added service workers for offline support'
            ],
            link: 'https://github.com/yourusername/taskmanager'
        },
        {
            title: 'Social Media Dashboard',
            description: 'A comprehensive social media analytics dashboard with data visualization and reporting tools.',
            image: '/project3.jpg',
            technologies: ['React', 'D3.js', 'Node.js', 'MongoDB'],
            features: [
                'Real-time analytics',
                'Custom data visualization',
                'Automated reporting',
                'Social media integration'
            ],
            challenges: [
                'Processing large amounts of data',
                'Creating responsive visualizations',
                'Integrating multiple social media APIs'
            ],
            solutions: [
                'Implemented data aggregation pipeline',
                'Used D3.js for custom visualizations',
                'Created unified API wrapper for social platforms'
            ],
            link: 'https://github.com/yourusername/social-dashboard'
        }
    ];

    return (
        <section id="projects" className="relative py-20 overflow-hidden">
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
                        Projects
                    </h2>
                    <div className="h-0.5 w-32 bg-gradient-to-r from-violet-400 to-fuchsia-400 mx-auto mt-4 animate-subtle-pulse"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedProject(project)}
                            className="w-full text-left"
                        >
                            <div className="relative bg-white/80 backdrop-blur-sm border border-violet-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up group"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="aspect-w-16 aspect-h-9 bg-violet-100">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-violet-700 mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-violet-600 mb-4">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-3 py-1 bg-violet-100 text-violet-600 rounded-full text-sm"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </button>
                    ))}
                </div>

                {/* Project details modal */}
                {selectedProject && (
                    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in">
                        <div className="bg-white/90 backdrop-blur-sm rounded-xl max-w-4xl w-full max-h-[80vh] overflow-y-auto shadow-2xl border border-violet-200">
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-violet-700">{selectedProject.title}</h3>
                                        <p className="text-violet-600 mt-2">{selectedProject.description}</p>
                                    </div>
                                    <button 
                                        onClick={() => setSelectedProject(null)}
                                        className="text-violet-400 hover:text-violet-600 transition-colors duration-300"
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                                        </svg>
                                    </button>
                                </div>

                                <div className="aspect-w-16 aspect-h-9 bg-violet-100 rounded-lg overflow-hidden mb-6">
                                    <img
                                        src={selectedProject.image}
                                        alt={selectedProject.title}
                                        className="object-cover w-full h-full"
                                    />
                                </div>

                                <div className="space-y-6">
                                    {/* Technologies */}
                                    <div>
                                        <h4 className="text-lg font-semibold text-violet-700 mb-3">Technologies Used</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.technologies.map((tech, idx) => (
                                                <span 
                                                    key={idx}
                                                    className="px-3 py-1 bg-violet-100 text-violet-600 rounded-full text-sm"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Features */}
                                    {selectedProject.features && (
                                        <div>
                                            <h4 className="text-lg font-semibold text-violet-700 mb-3">Key Features</h4>
                                            <ul className="space-y-2">
                                                {selectedProject.features.map((feature, idx) => (
                                                    <li key={idx} className="flex items-start">
                                                        <span className="w-1.5 h-1.5 bg-violet-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                                        <span className="text-violet-600">{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {/* Challenges */}
                                    {selectedProject.challenges && (
                                        <div>
                                            <h4 className="text-lg font-semibold text-violet-700 mb-3">Challenges</h4>
                                            <ul className="space-y-2">
                                                {selectedProject.challenges.map((challenge, idx) => (
                                                    <li key={idx} className="flex items-start">
                                                        <span className="w-1.5 h-1.5 bg-fuchsia-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                                        <span className="text-violet-600">{challenge}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {/* Solutions */}
                                    {selectedProject.solutions && (
                                        <div>
                                            <h4 className="text-lg font-semibold text-violet-700 mb-3">Solutions</h4>
                                            <ul className="space-y-2">
                                                {selectedProject.solutions.map((solution, idx) => (
                                                    <li key={idx} className="flex items-start">
                                                        <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                                        <span className="text-violet-600">{solution}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {/* Project Link */}
                                    {selectedProject.link && (
                                        <div className="mt-6">
                                            <a
                                                href={selectedProject.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-medium"
                                            >
                                                View Project
                                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                                                </svg>
                                            </a>
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

export default Projects; 