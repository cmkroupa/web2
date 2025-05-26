import React from 'react';

interface AboutProps {
  className?: string;
}

const About: React.FC<AboutProps> = ({ className }) => {
  const interests = [
    {
      title: 'Artificial Intelligence',
      description: 'Designing and implementing intelligent algorithms for data analysis, pattern recognition, and advanced decision-making systems.',
      icon: '🤖'
    },
    {
      title: 'Systems Engineering',
      description: 'Building robust and efficient foundational software, optimizing performance, and working with operating system internals and compilers.',
      icon: '⚙️'
    },
    {
      title: 'Software Security',
      description: 'Applying secure coding principles and best practices to develop resilient and trustworthy software applications.',
      icon: '🔒'
    }
  ];

  const stats = [
    { label: 'Job Experience', value: '4' },
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
          <div className="bg-white/40 backdrop-blur-xl rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              My Story
            </h3>
            <p className="text-gray-600 mb-6 text-lg ">
            My drive for strategic problem-solving and effective teamwork has been shaped by years of engagement with activities like chess and soccer. 
            These experiences have instilled in me a dedication to strategic thinking and collaborating, qualities I directly apply to software engineering. 
            As an intern, I bring a robust foundation in computer science and math with a deep fascination for how software powers our world. 
            I'm eager to dive into diverse areas, from the intricacies of artificial intelligence to the core of low-level systems and the complexities of security software, always striving to transform challenging problems into elegant and high-performing solutions.
             I'm committed to continuous learning and incredibly excited to make an impactful contribution as part of a forward-thinking team.
            </p>
            <p className="text-gray-600">
              
            </p>
          </div>

          {/* Interests */}
          <div className="space-y-6">
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