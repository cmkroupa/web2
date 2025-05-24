import React, { useEffect, useState } from 'react';

interface LandingProps {
    className?: string;
}

const Landing: React.FC<LandingProps> = ({ className }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const skills = [
        { name: 'React', icon: '⚛️' },
        { name: 'TypeScript', icon: '📘' },
        { name: 'Node.js', icon: '🟢' },
        { name: 'Python', icon: '🐍' },
        { name: 'AWS', icon: '☁️' },
        { name: 'Docker', icon: '🐳' }
    ];

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Text Content */}
                    <div className="space-y-6">
                        <div className="space-y-4">
                            <h1 className="text-5xl font-bold text-gray-900">
                                Hi, I'm <span className="text-purple-600">Your Name</span>
                            </h1>
                            <p className="text-xl text-gray-600">
                                A passionate software engineer crafting elegant solutions to complex problems
                            </p>
                        </div>

                        {/* Skills */}
                        <div className="flex flex-wrap gap-3">
                            {skills.map((skill) => (
                                <div
                                    key={skill.name}
                                    className="px-4 py-2 bg-white/40 backdrop-blur-sm rounded-full text-gray-700 hover:bg-white/60 transition-all duration-300"
                                >
                                    <span className="mr-2">{skill.icon}</span>
                                    {skill.name}
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex gap-4 pt-4">
                            <a
                                href="#projects"
                                className="px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors duration-300"
                            >
                                View Projects
                            </a>
                            <a
                                href="#contact"
                                className="px-6 py-3 bg-white/40 backdrop-blur-sm text-gray-700 rounded-full hover:bg-white/60 transition-all duration-300"
                            >
                                Contact Me
                            </a>
                        </div>
                    </div>

                    {/* Right Column - Profile Image */}
                    <div className="relative">
                        <div className="relative w-80 h-80 mx-auto">
                            {/* Gradient Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full opacity-20 blur-xl"></div>
                            
                            {/* Profile Image */}
                            <img
                                src="/your-photo.jpg"
                                alt="Your Name"
                                className="relative w-full h-full object-cover rounded-full border-4 border-white/20 shadow-2xl"
                            />
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                    <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Landing;