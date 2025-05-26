import React from 'react';

interface ExperienceProps {
  className?: string;
}

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
  year: number;
}

const Experience: React.FC<ExperienceProps> = ({ className }) => {
  const experiences: Experience[] = [
    {
      title: 'Senior Software Engineer',
      company: 'Tech Innovations Inc.',
      location: 'San Francisco, CA',
      period: '2021 - Present',
      description: 'Leading the development of cloud-native applications and microservices architecture.',
      achievements: [
        'Architected and implemented a scalable microservices platform serving 1M+ users',
        'Reduced system latency by 40% through optimization and caching strategies',
        'Mentored junior developers and conducted code reviews'
      ],
      technologies: ['React', 'Node.js', 'AWS', 'Docker', 'Kubernetes'],
      year: 2021
    },
    {
      title: 'Software Engineer',
      company: 'Digital Solutions Ltd.',
      location: 'Seattle, WA',
      period: '2019 - 2021',
      description: 'Developed and maintained enterprise-level web applications.',
      achievements: [
        'Built a real-time analytics dashboard processing 100K+ events daily',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
        'Collaborated with UX team to improve user engagement by 35%'
      ],
      technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Redis'],
      year: 2019
    },
    {
      title: 'Software Engineer',
      company: 'Digital Solutions Ltd.',
      location: 'Seattle, WA',
      period: '2019 - 2021',
      description: 'Developed and maintained enterprise-level web applications.',
      achievements: [
        'Built a real-time analytics dashboard processing 100K+ events daily',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
        'Collaborated with UX team to improve user engagement by 35%'
      ],
      technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Redis'],
      year: 2017
    }
  ].sort((a, b) => b.year - a.year);

  return (
    <section id="experience" className="relative min-h-screen flex items-center justify-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Professional Journey
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            My career path and key achievements
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-gradient-to-b from-purple-400 via-purple-200 to-blue-200 z-0"></div>

          <div className="flex flex-col gap-16">
            {experiences.map((exp, index) => (
              <div key={exp.title} className="relative flex flex-col md:flex-row md:items-center">
                {/* Left Side (Card or Spacer) */}
                <div className={`md:w-1/2 flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'} md:pr-8 md:pl-0 md:order-${index % 2 === 0 ? '1' : '3'} order-2`}> 
                  {index % 2 === 0 ? (
                    <div className="w-full md:max-w-3xl bg-white/20 backdrop-blur-xl rounded-xl p-10 shadow-lg hover:shadow-xl transition-all duration-300">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.title}</h3>
                      <p className="text-lg text-purple-600 font-medium mb-2">{exp.company}</p>
                      <div className="flex items-center text-gray-600 text-sm mb-2">
                        <svg className="w-4 h-4 mr-1 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                        {exp.location}
                        <svg className="w-4 h-4 mx-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                        </svg>
                        {exp.period}
                      </div>
                      <p className="text-gray-600 text-lg mb-4">{exp.description}</p>
                      <div className="mb-2">
                        <h4 className="text-xs font-semibold text-gray-900 mb-1">Key Achievements</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start space-x-2 text-gray-700 text-base">
                              <span className="text-purple-500 mt-1">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-gray-900 mb-1">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {exp.technologies.map((tech) => (
                            <span key={tech} className="px-3 py-1 bg-white/60 backdrop-blur-sm rounded-full text-gray-800 text-base">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="hidden md:block w-full md:max-w-3xl"></div>
                  )}
                </div>

                {/* Timeline Year Badge */}
                <div className="flex flex-col items-center z-10 order-1 md:order-2">
                  <div className="bg-purple-600 text-white px-6 py-2 rounded-full shadow-lg mb-4 md:mb-0">
                    {exp.year}
                  </div>
                  <div className="hidden md:block w-1 h-full bg-gradient-to-b from-purple-400 via-purple-200 to-blue-200"></div>
                </div>

                {/* Right Side (Card or Spacer) */}
                <div className={`md:w-1/2 flex ${index % 2 !== 0 ? 'justify-start' : 'justify-end'} md:pl-8 md:pr-0 md:order-${index % 2 !== 0 ? '3' : '1'} order-3`}>
                  {index % 2 !== 0 ? (
                    <div className="w-full md:max-w-3xl bg-white/20 backdrop-blur-xl rounded-xl p-10 shadow-lg hover:shadow-xl transition-all duration-300">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.title}</h3>
                      <p className="text-lg text-purple-600 font-medium mb-2">{exp.company}</p>
                      <div className="flex items-center text-gray-600 text-sm mb-2">
                        <svg className="w-4 h-4 mr-1 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                        {exp.location}
                        <svg className="w-4 h-4 mx-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                        </svg>
                        {exp.period}
                      </div>
                      <p className="text-gray-600 text-lg mb-4">{exp.description}</p>
                      <div className="mb-2">
                        <h4 className="text-xs font-semibold text-gray-900 mb-1">Key Achievements</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start space-x-2 text-gray-700 text-base">
                              <span className="text-purple-500 mt-1">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-gray-900 mb-1">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {exp.technologies.map((tech) => (
                            <span key={tech} className="px-3 py-1 bg-white/60 backdrop-blur-sm rounded-full text-gray-800 text-base">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="hidden md:block w-full md:max-w-3xl"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 