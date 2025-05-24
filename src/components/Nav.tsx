import React, { useState, useEffect } from 'react';

interface NavProps {
    className?: string;
}

const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
];

const Nav: React.FC<NavProps> = ({ className }) => {
    const [activeSection, setActiveSection] = useState('home');
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 50);

            const sections = navItems.map(item => document.getElementById(item.id));
            const currentSection = sections.find(section => {
                if (!section) return false;
                const rect = section.getBoundingClientRect();
                return rect.top <= 100 && rect.bottom >= 100;
            });

            if (currentSection) {
                setActiveSection(currentSection.id);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled 
                ? 'bg-white/80 backdrop-blur-lg shadow-sm border-b border-sage-100' 
                : 'bg-transparent'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <span className="text-xl font-bold bg-gradient-to-r from-sage-600 to-terracotta-600 bg-clip-text text-transparent">
                            Portfolio
                        </span>
                    </div>
                    <div className="hidden md:flex items-center space-x-1">
                        {navItems.map(item => (
                            <button
                                key={item.id}
                                onClick={() => {
                                    const element = document.getElementById(item.id);
                                    if (element) {
                                        element.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                                    activeSection === item.id
                                        ? 'bg-sage-50 text-sage-700 border border-sage-200'
                                        : 'text-sage-600 hover:text-sage-700 hover:bg-sage-50/50'
                                }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button className="p-2 rounded-lg text-sage-600 hover:bg-sage-50 transition-colors duration-200">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav; 