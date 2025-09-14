import React from 'react';
import { Target, Brain, TrendingUp, Shield } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Target className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8" />,
      title: "ATS Score Analysis",
      description:
        "Get detailed ATS compatibility scores and see exactly what applicant tracking systems look for in your resume.",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: <Brain className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8" />,
      title: "Role-Based Insights",
      description:
        "Match your resume against specific job descriptions and receive tailored recommendations for each position.",
      gradient: "from-teal-500 to-teal-600",
    },
    {
      icon: <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8" />,
      title: "Optimization Tips",
      description:
        "Get actionable suggestions to improve your resume's impact, including keyword optimization and formatting tips.",
      gradient: "from-green-500 to-green-600",
    },
    {
      icon: <Shield className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8" />,
      title: "Industry Standards",
      description:
        "Benchmark your resume against industry standards and see how you stack up against other candidates.",
      gradient: "from-purple-500 to-purple-600",
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-snug">
            Powerful Features to{" "}
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Land Your Dream Job
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Our AI-powered platform provides comprehensive resume analysis to help you stand out from the competition.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8">
          {features.map((feature, index) => (
           <div
           key={index}
           className="group bg-white p-5 sm:p-6 md:p-8 rounded-2xl 
                      border border-gray-200 
                      hover:border-2 hover:border-purple-500 
                      hover:shadow-[0_0_20px_rgba(168,85,247,0.7),0_0_35px_rgba(255,255,255,0.4)] 
                      transition-all duration-300 transform 
                      hover:-translate-y-1 sm:hover:-translate-y-2"
           >
         
         
         
              {/* Icon */}
              <div
                className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-r ${feature.gradient} rounded-xl mb-3 sm:mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                <div className="text-white">{feature.icon}</div>
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1 sm:mb-3 group-hover:text-blue-600 transition-colors duration-200">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
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
