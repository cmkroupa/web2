import React from 'react';

interface AboutProps {
  className?: string;
}

const About: React.FC<AboutProps> = ({ className }) => {
  const interests = [
    {
      title: 'Artificial Intelligence',
      description: 'Creating smart systems that can learn, adapt, and solve real-world problems.',
      icon: '🤖'
    },
    {
      title: 'Low Level Systems',
      description: 'Designing and optimizing the core software that powers computers and devices.',
      icon: '⚙️'
    },
    {
      title: 'Software Security',
      description: 'Building safe, reliable software to protect data from all sorts of cyber threats.',
      icon: '🔒'
    }
  ];

  const stats = [
    { label: 'Jobs', value: '4' },
    { label: 'University Year', value: '3' },
    { label: 'GPA', value: '3.9' },
    { label: 'Practical Projects', value: '10+' }
  ];

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Get to know more about me!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Story */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">My Story</h3>
            <div className="bg-white/40 backdrop-blur-xl rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20">
              <p className="text-gray-600 mb-6 text-lg ">
                I'm a third-year Computer Science and Math student at the University of Western, with a strong focus on low-level systems, artificial intelligence, and software security.
                Beyond my studies, I've enjoyed playing chess since I was 3 which gives me a unique perspective for stragtegical thinking through problems. 
                I'm driven by a desire to learn and tackle complex challenges, always looking for opportunities to deepen my understanding and practical skills. 
                Below, you'll find a selection of my projects. 
                Feel free to send me a message via the contact form.
              </p>
            </div>
          </div>

          {/* Interests */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Interests</h3>
            {interests.map((interest) => (
              <div
                key={interest.title}
                className="bg-white/40 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20"
              >
                <div className="flex items-start">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2 flex items-center">
                      <span className="mr-2 text-2xl">{interest.icon}</span>
                      {interest.title}
                    </h4>
                    <p className="text-gray-600">
                      {interest.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/40 backdrop-blur-xl rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20"
            >
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About; 