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
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>

          {/* Experience Cards */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                {/* Year Label */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-600 text-white px-4 py-1 rounded-lg shadow-lg">
                  {exp.year}
                </div>

                {/* Experience Card */}
                <div 
                  className={`w-5/12 ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}
                >
                  <div className="bg-white/40 backdrop-blur-xl rounded-lg p-6 shadow-lg border border-white/20">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                        <p className="text-lg text-purple-600 font-medium">{exp.company}</p>
                      </div>
                    </div>

                    {/* Location and Period */}
                    <div className="flex items-center space-x-6 mb-4">
                      <div className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                        {exp.location}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                        </svg>
                        {exp.period}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-4">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">
                        Key Achievements
                      </h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, idx) => (
                          <li
                            key={idx}
                            className="flex items-start space-x-2 text-gray-600 text-sm"
                          >
                            <span className="text-purple-500 mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-white/60 backdrop-blur-sm rounded-lg text-gray-700 text-sm shadow-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
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