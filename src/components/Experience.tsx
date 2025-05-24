import React, { useState } from 'react';

interface ExperienceProps {
  className?: string;
}

interface Job {
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
  achievements?: string[];
  responsibilities?: string[];
}

const Experience: React.FC<ExperienceProps> = ({ className }) => {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const experiences: Job[] = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Company',
      period: '2021 - Present',
      description: 'Led the development of enterprise-level applications using React, Node.js, and MongoDB.',
      skills: ['React', 'Node.js', 'MongoDB', 'AWS'],
      achievements: [
        'Reduced application load time by 40% through optimization',
        'Implemented CI/CD pipeline reducing deployment time by 60%',
        'Mentored 5 junior developers and improved team productivity'
      ],
      responsibilities: [
        'Architect and develop scalable web applications',
        'Lead technical discussions and code reviews',
        'Collaborate with product managers and designers',
        'Implement best practices and coding standards'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Agency',
      period: '2019 - 2021',
      description: 'Developed and maintained multiple client projects using modern web technologies.',
      skills: ['Vue.js', 'Express', 'PostgreSQL', 'Docker'],
      achievements: [
        'Delivered 15+ client projects on time and within budget',
        'Improved application performance by 30%',
        'Reduced bug reports by 50% through better testing'
      ],
      responsibilities: [
        'Develop full-stack web applications',
        'Work with clients to gather requirements',
        'Implement responsive designs',
        'Write unit and integration tests'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'Startup',
      period: '2018 - 2019',
      description: 'Built responsive web applications and implemented modern UI/UX practices.',
      skills: ['React', 'TypeScript', 'Sass', 'Jest'],
      achievements: [
        'Built 3 major features that increased user engagement by 25%',
        'Reduced bundle size by 35% through code optimization',
        'Implemented automated testing reducing manual QA time'
      ],
      responsibilities: [
        'Develop responsive user interfaces',
        'Implement UI/UX best practices',
        'Write clean and maintainable code',
        'Collaborate with backend developers'
      ]
    }
  ];

  return (
    <section id="experience" className="relative py-20 overflow-hidden bg-slate-50">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]"></div>
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-blue-200/20 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-teal-200/20 rounded-full mix-blend-multiply filter blur-xl animate-float-delay"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="h-0.5 w-32 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto mt-4 animate-subtle-pulse"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <button
              key={index}
              onClick={() => setSelectedJob(experience)}
              className="w-full text-left relative"
            >
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-4 top-16 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-teal-600"></div>
              )}
              
              <div className="relative bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up group ml-8"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute -left-8 top-8 w-8 h-8 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-sm font-medium">{experience.period.split(' - ')[0]}</span>
                </div>
                
                {/* Content */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                    <h3 className="text-2xl font-semibold text-slate-800">
                      {experience.title}
                    </h3>
                    <span className="text-slate-600 font-medium mt-2 sm:mt-0">
                      {experience.period}
                    </span>
                  </div>
                  
                  <h4 className="text-lg text-slate-600 mb-4">
                    {experience.company}
                  </h4>
                  
                  <p className="text-slate-600 mb-6">
                    {experience.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* View Details Arrow */}
                  <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg 
                      className="w-6 h-6 text-blue-400 group-hover:text-blue-600 transform group-hover:translate-x-1 transition-all duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                    </svg>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Download Resume Button */}
        <div className="text-center mt-12 animate-fade-in-up-delay-2">
          <a
            href="/resume.pdf"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-medium"
          >
            Download Resume
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
            </svg>
          </a>
        </div>

        {/* Job details modal */}
        {selectedJob && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl border border-slate-200">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800">{selectedJob.title}</h3>
                    <h4 className="text-lg text-slate-600">{selectedJob.company}</h4>
                    <p className="text-slate-500 font-medium">{selectedJob.period}</p>
                  </div>
                  <button 
                    onClick={() => setSelectedJob(null)}
                    className="text-slate-400 hover:text-slate-600 transition-colors duration-300"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                  </button>
                </div>

                <p className="text-slate-600 mb-6">{selectedJob.description}</p>

                <div className="space-y-6">
                  {/* Skills */}
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800 mb-3">Skills & Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedJob.skills.map((skill, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  {selectedJob.achievements && selectedJob.achievements.length > 0 && (
                    <div>
                      <h4 className="text-lg font-semibold text-slate-800 mb-3">Key Achievements</h4>
                      <ul className="space-y-2">
                        {selectedJob.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            <span className="text-slate-600">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Responsibilities */}
                  {selectedJob.responsibilities && selectedJob.responsibilities.length > 0 && (
                    <div>
                      <h4 className="text-lg font-semibold text-slate-800 mb-3">Key Responsibilities</h4>
                      <ul className="space-y-2">
                        {selectedJob.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            <span className="text-slate-600">{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience; 