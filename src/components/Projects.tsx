import React, { useState } from 'react';

interface ProjectsProps {
    className?: string;
}

interface Project {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    features: string[];
    challenges: string[];
    solutions: string[];
    color: string;
    category: 'web' | 'mobile' | 'ai' | 'other';
    icon: string;
    github: string;
}

const Projects: React.FC<ProjectsProps> = ({ className }) => {
    const [activeProject, setActiveProject] = useState<Project | null>(null);
    const [activeCategory, setActiveCategory] = useState<string>('all');

    const projects: Project[] = [
        {
            title: 'AI-Powered Analytics Dashboard',
            description: 'A real-time analytics platform with machine learning predictions and interactive visualizations.',
            image: '/path-to-project-image.jpg',
            technologies: ['React', 'TensorFlow.js', 'D3.js', 'Node.js'],
            features: [
                'Real-time data processing',
                'ML-powered predictions',
                'Interactive visualizations',
                'Custom reporting'
            ],
            challenges: [
                'Processing large datasets in real-time',
                'Implementing accurate ML models',
                'Optimizing visualization performance'
            ],
            solutions: [
                'Used WebWorkers for data processing',
                'Implemented transfer learning for faster ML',
                'Created custom D3.js optimizations'
            ],
            color: '#6366F1',
            category: 'ai',
            icon: '🤖',
            github: 'https://github.com/yourusername/project1'
        },
        {
            title: 'E-Commerce Platform',
            description: 'A full-stack e-commerce solution with real-time inventory and payment processing.',
            image: '/path-to-project-image.jpg',
            technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
            features: [
                'Real-time inventory tracking',
                'Secure payment processing',
                'User authentication',
                'Admin dashboard'
            ],
            challenges: [
                'Handling concurrent transactions',
                'Implementing secure payments',
                'Managing real-time updates'
            ],
            solutions: [
                'Used optimistic locking',
                'Implemented Stripe integration',
                'Utilized WebSocket for real-time'
            ],
            color: '#EC4899',
            category: 'web',
            icon: '🛍️',
            github: 'https://github.com/yourusername/project2'
        },
        {
            title: 'Mobile Fitness App',
            description: 'A cross-platform fitness application with workout tracking and social features.',
            image: '/path-to-project-image.jpg',
            technologies: ['React Native', 'Firebase', 'Redux', 'Node.js'],
            features: [
                'Workout tracking',
                'Social features',
                'Progress analytics',
                'Custom workout plans'
            ],
            challenges: [
                'Cross-platform compatibility',
                'Offline functionality',
                'Real-time social features'
            ],
            solutions: [
                'Used React Native for cross-platform',
                'Implemented local storage',
                'Utilized Firebase for real-time'
            ],
            color: '#10B981',
            category: 'mobile',
            icon: '💪',
            github: 'https://github.com/yourusername/project3'
        }
    ];

    const categories = [
        { id: 'all', name: 'All Projects', icon: '✨' },
        { id: 'web', name: 'Web Apps', icon: '🌐' },
        { id: 'mobile', name: 'Mobile Apps', icon: '📱' },
        { id: 'ai', name: 'AI/ML', icon: '🤖' }
    ];

    const filteredProjects = activeCategory === 'all' 
        ? projects 
        : projects.filter(project => project.category === activeCategory);

    return (
        <section id="projects" className="relative min-h-screen flex items-center justify-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        A showcase of my most impactful and innovative projects
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex justify-center space-x-4 mb-12">
                    {categories.map(category => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${
                                activeCategory === category.id
                                    ? 'bg-purple-600 text-white shadow-lg'
                                    : 'bg-white/40 backdrop-blur-sm text-gray-600 hover:bg-white/60'
                            }`}
                        >
                            <span className="mr-2">{category.icon}</span>
                            {category.name}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.title}
                            onClick={() => setActiveProject(project)}
                            className="bg-white/40 backdrop-blur-xl rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 group cursor-pointer"
                        >
                            {/* Project Image */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            {/* Project Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-3 py-1 bg-white/60 backdrop-blur-sm rounded-full text-sm text-gray-700"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex space-x-4">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 px-4 py-2 bg-purple-600 text-white text-center rounded-lg hover:bg-purple-700 transition-colors duration-300"
                                    >
                                        View Project
                                    </a>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 px-4 py-2 bg-white/60 backdrop-blur-sm text-gray-900 text-center rounded-lg hover:bg-white/80 transition-all duration-300"
                                    >
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Project Modal */}
                {activeProject && (
                    <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center p-4 z-50">
                        <div className="bg-white/60 backdrop-blur-md rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-lg border border-white/20">
                            <div className="flex justify-between items-start mb-6">
                                <h3 className="text-2xl font-bold text-gray-900">{activeProject.title}</h3>
                                <button
                                    onClick={() => setActiveProject(null)}
                                    className="text-gray-500 hover:text-gray-700"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <div className="space-y-6">
                                <p className="text-gray-800">{activeProject.description}</p>

                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h4>
                                    <ul className="list-disc list-inside space-y-2 text-gray-800">
                                        {activeProject.features.map((feature, idx) => (
                                            <li key={idx}>{feature}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {activeProject.technologies.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 bg-white/70 backdrop-blur-sm text-purple-700 rounded-full text-sm"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Challenges & Solutions</h4>
                                    <div className="space-y-4">
                                        {activeProject.challenges.map((challenge, idx) => (
                                            <div key={idx} className="bg-white/70 backdrop-blur-sm p-4 rounded-lg">
                                                <h5 className="font-medium text-gray-900 mb-2">Challenge {idx + 1}</h5>
                                                <p className="text-gray-800 mb-2">{challenge}</p>
                                                <p className="text-gray-800">
                                                    <span className="font-medium text-purple-600">Solution:</span> {activeProject.solutions[idx]}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
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