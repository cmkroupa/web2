import React from 'react';

interface LandingProps {
    className?: string;
}

const Landing: React.FC<LandingProps> = ({ className }) => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 bg-slate-50">
            {/* Background elements */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]"></div>
            </div>

            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 right-20 w-64 h-64 bg-blue-200/20 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
                <div className="absolute bottom-20 left-20 w-72 h-72 bg-teal-200/20 rounded-full mix-blend-multiply filter blur-xl animate-float-delay"></div>
                <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-emerald-200/20 rounded-full mix-blend-multiply filter blur-xl animate-float-slow"></div>
            </div>

            {/* Content */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                <div className="space-y-12">
                    {/* Animated text reveal */}
                    <div className="animate-fade-in-up">
                        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8">
                            <span className="bg-gradient-to-r from-blue-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent">
                                Hi, I'm{' '}
                                <span className="text-slate-800">
                                    Your Name
                                </span>
                            </span>
                        </h1>
                        <div className="h-0.5 w-32 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto mb-8 animate-subtle-pulse"></div>
                        <p className="text-2xl sm:text-3xl text-slate-600 font-light tracking-wide">
                            Full Stack Developer
                        </p>
                    </div>

                    {/* Animated buttons */}
                    <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-up-delay-2">
                        <a
                            href="#projects"
                            className="w-full sm:w-auto group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-bold text-lg"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <span className="relative flex items-center justify-center">
                                View Projects
                                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                                </svg>
                            </span>
                        </a>
                        <a
                            href="#contact"
                            className="w-full sm:w-auto group relative px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-bold text-lg"
                        >
                            <div className="absolute inset-0 bg-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <span className="relative flex items-center justify-center">
                                Contact Me
                                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                                </svg>
                            </span>
                        </a>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center z-10">
                        <p className="text-slate-600 mb-2 animate-bounce">Scroll to explore</p>
                        <svg className="w-6 h-6 text-slate-600 mx-auto animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Landing;