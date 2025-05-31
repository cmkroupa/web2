import React, { useState } from 'react';

interface ProjectsProps {
    className?: string;
}

interface Project {
    title: string;
    description: string;
    src: string;
    technologies: string[];
    github: string;
}

const Projects: React.FC<ProjectsProps> = ({ className }) => {
    const [activeProject, setActiveProject] = useState<Project | null>(null);
    const [activeTech, setActiveTech] = useState<string>('all');

    const projects: Project[] = [
        {
            title: 'Virtual Pet Game',
            description: 'A term-long project where we designed and implemented a virtual pet game, including requirements gathering, UML diagrams, and UI mockups. Then in 2 weeks we coded the actual project.',
            src: '/virtual_pet.mov',
            technologies: ['Java', 'UML Diagrams'],
            github: 'https://github.com/cmkroupa/VirtualPet'
        },
        {
            title: 'LatticeTalk',
            description: "Current encryption methods, such as RSA, are vulnerable to quantum attacks using Shor's Algorithm. To address this, we leveraged research in post-quantum encryption to develop a JavaScript application that implements lattice-based encryption, ensuring quantum security. This application provides a highly secure, peer-to-peer messaging system.",
            src: '/lattice_talk.jpg',
            technologies: ['React', 'MongoDB', 'GitHub','Postman'],
            github: 'https://github.com/kalpipatel/LatticeTalk'
        },
        {
            title: 'GoFundUs',
            description: "Current encryption methods, such as RSA, are vulnerable to quantum attacks using Shor's Algorithm. To address this, we leveraged research in post-quantum encryption to develop a JavaScript application that implements lattice-based encryption, ensuring quantum security. This application provides a highly secure, peer-to-peer messaging system.",
            src: '/GoFundUs.jpg',
            technologies: ['React', 'Typescript', 'GitHub','Postman'],
            github: 'https://github.com/AlexanderKubarakos/CodenameGoFundUs'
        },
        {
            title: 'C Scripted Calendar App',
            description: "Developed a feature-rich calendar application in C, enabling users to seamlessly store, manage, and organize reminders. The calendar intelligently detects the current month and accurately aligns dates based on the starting day. Users can add multiple reminders per day, as well as edit or delete them as needed.",
            src: '/calendar.jpg',
            technologies: ['C', 'Bash'],
            github: 'https://github.com/cmkroupa/C_Calendar'
        },
        {
            title: 'Maze Solver',
            description: "This maze solver utilizes a Depth-First Search (DFS) algorithm to explore and find the first path out of the maze, ensuring an efficient and systematic approach. The maze is composed of hallways where coins are placed, and these coins are required to progress through each hallway. The solver is designed to navigate the maze while keeping the total coin usage below a predefined limit.",
            src: '/maze.jpg',
            technologies: ['Java', 'DFS'],
            github: 'https://github.com/cmkroupa/MazeGame'
        }
    ];

    // Get unique technologies from all projects
    const allTechnologies = Array.from(new Set(projects.flatMap(p => p.technologies)));
    const techFilters = ['all', ...allTechnologies];

    const filteredProjects = activeTech === 'all'
        ? projects
        : projects.filter(project => project.technologies.includes(activeTech));

    return (
        <section id="projects" className="relative min-h-screen flex items-center justify-center">
            {/* Top gradient fade for transition from Education */}
            <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-t from-transparent to-white pointer-events-none z-10" />
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

                {/* Technology Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {techFilters.map(tech => (
                        <button
                            key={tech}
                            onClick={() => setActiveTech(tech)}
                            className={`px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${
                                activeTech === tech
                                    ? 'bg-purple-600 text-white shadow-lg'
                                    : 'bg-white/40 backdrop-blur-sm text-gray-600 hover:bg-white/60'
                            }`}
                        >
                            {tech === 'all' ? 'All Projects' : tech}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.title}
                            onClick={() => setActiveProject(project)}
                            className="bg-white/20 backdrop-blur-xl rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                        >
                            {/* Project Media */}
                            <div className="relative h-48 overflow-hidden flex items-center justify-center">
                                {project.src.match(/\.(mp4|mov|webm)$/i) ? (
                                    <video
                                        src={project.src}
                                        className="w-full h-full object-cover mx-auto"
                                        autoPlay
                                        loop
                                        muted
                                        controls
                                        playsInline
                                        poster="/video_poster.jpg"
                                    />
                                ) : (
                                    <img
                                        src={project.src}
                                        alt={project.title}
                                        className="w-full h-full object-cover mx-auto"
                                    />
                                )}
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
                        <div className="bg-white/60 backdrop-blur-md rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-lg border border-white/20 relative">
                            {/* Red X Close Button */}
                            <button
                                onClick={() => setActiveProject(null)}
                                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-red-600 hover:bg-red-700 text-white text-2xl font-bold shadow-lg z-50 transition-colors duration-200"
                                aria-label="Close"
                            >
                                &times;
                            </button>
                            {/* Project Media */}
                            <div className="mb-6 flex items-center justify-center">
                                {activeProject.src.match(/\.(mp4|mov|webm)$/i) ? (
                                    <video
                                        src={activeProject.src}
                                        className="w-full max-h-96 object-cover rounded-xl mx-auto"
                                        autoPlay
                                        loop
                                        muted
                                        controls
                                        playsInline
                                        poster="/video_poster.jpg"
                                    />
                                ) : (
                                    <img
                                        src={activeProject.src}
                                        alt={activeProject.title}
                                        className="w-full max-h-96 object-cover rounded-xl mx-auto"
                                    />
                                )}
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-gray-900">{activeProject.title}</h3>
                                <p className="text-gray-800">{activeProject.description}</p>
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
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects; 