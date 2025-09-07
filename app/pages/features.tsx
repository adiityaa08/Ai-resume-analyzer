import React from 'react';
import { Target, Brain, TrendingUp, Shield } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Target className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "ATS Score Analysis",
      description: "Get detailed ATS compatibility scores and see exactly what applicant tracking systems look for in your resume.",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: <Brain className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Role-Based Insights",
      description: "Match your resume against specific job descriptions and receive tailored recommendations for each position.",
      gradient: "from-teal-500 to-teal-600"
    },
    {
      icon: <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Resume Optimization Tips",
      description: "Get actionable suggestions to improve your resume's impact, including keyword optimization and formatting tips.",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: <Shield className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Industry Standards",
      description: "Benchmark your resume against industry standards and see how you stack up against other candidates.",
      gradient: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
            Powerful Features to{' '}
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Land Your Dream Job
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our AI-powered platform provides comprehensive resume analysis to help you stand out from the competition.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${feature.gradient} rounded-xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-4 group-hover:text-blue-600 transition-colors duration-200">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
