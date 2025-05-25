import React from 'react';

interface AboutProps {
  className?: string;
}

const About: React.FC<AboutProps> = ({ className }) => {
  const interests = [
    {
      title: 'Artificial Intelligence',
      description: 'Exploring the frontiers of artificial intelligence and its applications',
      icon: '🤖'
    },
    {
      title: 'Cybersecurity',
      description: 'Building modern, responsive, and user-friendly web applications',
      icon: '🌐'
    },
    {
      title: 'Some other big thing',
      description: 'Designing scalable and efficient cloud-based solutions',
      icon: '☁️'
    }
  ];

  const stats = [
    { label: 'Years Experience', value: '5+' },
    { label: 'Projects Completed', value: '50+' },
    { label: 'Happy Clients', value: '30+' },
    { label: 'GitHub Stars', value: '1k+' }
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
            Get to know more about my journey and expertise
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Story */}
          <div className="bg-white/40 backdrop-blur-xl rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              My Story
            </h3>
            <p className="text-gray-600 mb-6">
              I'm a passionate software engineer with a strong foundation in computer science and a keen eye for creating elegant solutions. My journey in tech began with a curiosity about how things work, which evolved into a deep love for building impactful software.
            </p>
            <p className="text-gray-600">
              With expertise in full-stack development, cloud architecture, and artificial intelligence, I strive to create solutions that not only solve problems but also provide exceptional user experiences.
            </p>
          </div>

          {/* Interests */}
          <div className="space-y-6">
            {interests.map((interest) => (
              <div
                key={interest.title}
                className="bg-white/40 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-white/60 backdrop-blur-sm flex items-center justify-center shadow-lg">
                    <span className="text-2xl">{interest.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
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