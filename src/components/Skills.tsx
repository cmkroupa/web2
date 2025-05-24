interface SkillsProps {
    className?: string;
}

interface Skill {
    name: string;
    level: number;
    icon?: string;
}

interface SkillCategory {
    name: string;
    skills: Skill[];
}

export default function Skills({ className = '' }: SkillsProps) {
    const skillCategories: SkillCategory[] = [
        {
            name: "Programming Languages",
            skills: [
                { name: "JavaScript/TypeScript", level: 90 },
                { name: "Python", level: 85 },
                { name: "Java", level: 80 },
                { name: "C++", level: 75 },
            ]
        },
        {
            name: "Web Technologies",
            skills: [
                { name: "React", level: 90 },
                { name: "Node.js", level: 85 },
                { name: "HTML/CSS", level: 90 },
                { name: "UnoCSS/Tailwind", level: 85 },
            ]
        },
        {
            name: "Tools & Frameworks",
            skills: [
                { name: "Git", level: 90 },
                { name: "Docker", level: 75 },
                { name: "AWS", level: 70 },
                { name: "MongoDB", level: 80 },
            ]
        }
    ];

    return (
        <section id="skills" className={`relative ${className}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                {/* Section header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">Skills & Expertise</h2>
                    <div className="h-1 w-20 bg-indigo-600 mx-auto rounded"></div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-20 right-0 w-72 h-72 bg-indigo-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
                <div className="absolute bottom-20 left-0 w-72 h-72 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float-delay"></div>

                {/* Skills grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, categoryIndex) => (
                        <div 
                            key={categoryIndex}
                            className="bg-white rounded-xl shadow-lg p-6 group hover:transform hover:scale-[1.02] transition-all duration-300 animate-fade-in-up"
                            style={{ animationDelay: `${categoryIndex * 200}ms` }}
                        >
                            {/* Category header */}
                            <h3 className="text-xl font-bold text-gray-900 mb-6">{category.name}</h3>

                            {/* Skills list */}
                            <div className="space-y-6">
                                {category.skills.map((skill, skillIndex) => (
                                    <div 
                                        key={skillIndex}
                                        className="group/skill"
                                    >
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-gray-700 font-medium">{skill.name}</span>
                                            <span className="text-gray-500 text-sm opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300">
                                                {skill.level}%
                                            </span>
                                        </div>
                                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                            <div 
                                                className="h-full bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full transform origin-left transition-transform duration-1000 ease-out scale-x-0 group-hover:scale-x-100"
                                                style={{ width: `${skill.level}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Hover effect overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl -z-10"></div>
                        </div>
                    ))}
                </div>

                {/* Additional skills tags */}
                <div className="mt-12">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 text-center animate-fade-in-up">Other Skills</h3>
                    <div className="flex flex-wrap justify-center gap-3 animate-fade-in-up-delay">
                        {[
                            "RESTful APIs", "GraphQL", "Agile", "UI/UX Design",
                            "Test-Driven Development", "CI/CD", "System Design",
                            "Problem Solving", "Team Leadership"
                        ].map((skill, index) => (
                            <span
                                key={index}
                                className="px-4 py-2 bg-white text-gray-700 rounded-full shadow-md hover:shadow-lg hover:scale-105 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-blue-50 transition-all duration-300 cursor-default"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}