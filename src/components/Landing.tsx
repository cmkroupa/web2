import React, { useEffect, useState } from 'react';
import Typewriter from './Typewriter';

interface LandingProps {
    className?: string;
}

const Landing: React.FC<LandingProps> = ({ className }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const skills = [
        { name: 'Low Level Programming' },
        { name: 'Networks' },
        { name: 'Linux' },
    ];

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    {/* Main Content */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h1 className="text-6xl font-bold text-gray-900">
                                Hi, I'm <span className="text-purple-600">Cameron Kroupa</span>
                            </h1>
                            <p className="text-2xl text-gray-600">
                                Problem Solving with Innovation
                            </p>

                        </div>

                        {/* Skills */}
                        <div className="flex flex-wrap justify-center gap-3">
                            {skills.map((skill) => (
                                <div
                                    key={skill.name}
                                    className="px-6 py-3 bg-white/40 backdrop-blur-sm rounded-lg text-gray-700 hover:bg-white/60 transition-all duration-300 shadow-sm hover:shadow-md"
                                >
                                    {skill.name}
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex justify-center gap-6 pt-8">
                            <a
                                href="#projects"
                                className="px-8 py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
                            >
                                View Projects
                            </a>
                            <a
                                href="#contact"
                                className="px-8 py-4 bg-white/40 backdrop-blur-sm text-gray-700 rounded-lg hover:bg-white/60 transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                Contact Me
                            </a>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                    <a
                        href="#about"
                        className="flex flex-col items-center text-gray-700 hover:text-purple-600 transition-colors duration-300"
                    >
                        <span className="text-sm font-medium mb-2">View more</span>
                        <svg
                            className="w-6 h-6 animate-bounce"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Landing;