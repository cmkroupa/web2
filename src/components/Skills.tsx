import React, { useState } from 'react';

interface SkillsProps {
    className?: string;
}

interface Skill {
    name: string;
    level: number;
    category: 'frontend' | 'backend' | 'tools' | 'other';
    icon: string;
    color: string;
    description: string;
}

const Skills: React.FC<SkillsProps> = ({ className }) => {
    const [activeCategory, setActiveCategory] = useState<string>('all');
    const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null);

    const skills: Skill[] = [
        {
            name: 'React',
            level: 90,
            category: 'frontend',
            icon: '⚛️',
            color: '#61DAFB',
            description: 'Building modern, responsive user interfaces with React and its ecosystem'
        },
        {
            name: 'TypeScript',
            level: 85,
            category: 'frontend',
            icon: '📘',
            color: '#3178C6',
            description: 'Writing type-safe, maintainable code with TypeScript'
        },
        {
            name: 'Node.js',
            level: 80,
            category: 'backend',
            icon: '🟢',
            color: '#339933',
            description: 'Developing scalable server-side applications with Node.js'
        },
        {
            name: 'Express',
            level: 85,
            category: 'backend',
            icon: '🚂',
            color: '#000000',
            description: 'Creating robust RESTful APIs with Express.js'
        },
        {
            name: 'Git',
            level: 90,
            category: 'tools',
            icon: '📦',
            color: '#F05032',
            description: 'Version control and collaborative development with Git'
        },
        {
            name: 'Docker',
            level: 75,
            category: 'tools',
            icon: '🐳',
            color: '#2496ED',
            description: 'Containerization and deployment with Docker'
        }
    ];

    const categories = [
        { id: 'all', name: 'All Skills' },
        { id: 'frontend', name: 'Frontend' },
        { id: 'backend', name: 'Backend' },
        { id: 'tools', name: 'Tools' }
    ];

    const filteredSkills = activeCategory === 'all' 
        ? skills 
        : skills.filter(skill => skill.category === activeCategory);

    return (
        <section id="skills" className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            {/* Animated background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-teal-500/10"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-400 to-emerald-400 mb-4">
                        Technical Expertise
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        A comprehensive showcase of my technical skills and proficiency levels
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
                                    ? 'bg-gradient-to-r from-blue-500 to-teal-500 text-white shadow-lg'
                                    : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                            }`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredSkills.map((skill, index) => (
                        <div
                            key={skill.name}
                            className="group relative"
                            onMouseEnter={() => setHoveredSkill(skill)}
                            onMouseLeave={() => setHoveredSkill(null)}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-teal-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                            <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center space-x-3">
                                        <span className="text-3xl">{skill.icon}</span>
                                        <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                                    </div>
                                    <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                                        {skill.level}%
                                    </span>
                                </div>

                                {/* Skill Level Visualization */}
                                <div className="relative h-2 bg-slate-700 rounded-full overflow-hidden mb-4">
                                    <div
                                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full transition-all duration-1000 ease-out"
                                        style={{ width: `${skill.level}%` }}
                                    ></div>
                                </div>

                                {/* Skill Description */}
                                <p className="text-slate-400 text-sm">
                                    {skill.description}
                                </p>

                                {/* Hover Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-teal-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Skill Details Modal */}
                {hoveredSkill && (
                    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
                        <div className="bg-slate-800 rounded-2xl p-8 max-w-lg w-full border border-slate-700/50">
                            <div className="flex items-center space-x-4 mb-6">
                                <span className="text-4xl">{hoveredSkill.icon}</span>
                                <div>
                                    <h3 className="text-2xl font-bold text-white">{hoveredSkill.name}</h3>
                                    <p className="text-slate-400">Proficiency Level: {hoveredSkill.level}%</p>
                                </div>
                            </div>
                            <p className="text-slate-300 mb-6">{hoveredSkill.description}</p>
                            <div className="flex justify-end">
                                <button
                                    onClick={() => setHoveredSkill(null)}
                                    className="px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors duration-300"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Skills;