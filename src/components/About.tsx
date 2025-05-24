import React from 'react';

interface AboutProps {
  className?: string;
}

const About: React.FC<AboutProps> = ({ className }) => {
  return (
    <section id="about" className="relative py-20 overflow-hidden bg-slate-50">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]"></div>
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-200/20 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-teal-200/20 rounded-full mix-blend-multiply filter blur-xl animate-float-delay"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="h-0.5 w-32 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto mt-4 animate-subtle-pulse"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image section */}
          <div className="relative animate-fade-in-up">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/path-to-your-image.jpg"
                alt="Profile"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
          </div>

          {/* Content section */}
          <div className="space-y-6 animate-fade-in-up-delay">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">My Journey</h3>
                  <p className="text-slate-600">
                    I'm a passionate full-stack developer with a strong foundation in both frontend and backend technologies. My journey in software development began with a curiosity about how things work, which led me to explore various aspects of web development and software engineering.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">Technical Expertise</h3>
                  <p className="text-slate-600">
                    On the frontend, I specialize in creating responsive and intuitive user interfaces using React, TypeScript, and modern CSS frameworks. For backend development, I work with Node.js, Express, and various databases to build scalable and efficient server-side applications.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">Problem Solving</h3>
                  <p className="text-slate-600">
                    I enjoy tackling complex problems and finding elegant solutions. My approach combines analytical thinking with practical implementation, ensuring that the solutions I create are both efficient and maintainable.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">Continuous Learning</h3>
                  <p className="text-slate-600">
                    The tech industry is constantly evolving, and I'm committed to staying at the forefront of new technologies and best practices. I regularly participate in coding challenges, contribute to open-source projects, and explore new frameworks and tools.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">Collaboration</h3>
                  <p className="text-slate-600">
                    I believe in the power of collaboration and knowledge sharing. Working in teams has taught me the importance of clear communication, code reviews, and mentoring others. I enjoy participating in tech communities and helping fellow developers grow.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">Future Goals</h3>
                  <p className="text-slate-600">
                    I'm excited about the future of technology and my role in shaping it. My goals include mastering cloud technologies, contributing to impactful open-source projects, and helping build the next generation of web applications.
                  </p>
                </div>
              </div>
            </div>

            {/* Skills preview */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="text-slate-800 font-semibold mb-2">Frontend</h3>
                <p className="text-slate-600">React, TypeScript, Tailwind CSS</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="text-slate-800 font-semibold mb-2">Backend</h3>
                <p className="text-slate-600">Node.js, Express, MongoDB</p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-medium"
              >
                Let's Connect
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 