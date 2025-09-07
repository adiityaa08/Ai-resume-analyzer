import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router';
import Navigation from './navigation';

const Hero: React.FC = () => {
  return (
    <div className="relative">
      <Navigation />
    <section className="bg-[url('/images/bg-main.svg')] bg-cover bg-center min-h-screen flex items-center justify-center">
      {/* Background decorative elements */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-40 w-80 h-80 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full opacity-10 blur-3xl"></div>
      </div> */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-6">
            <Zap className="h-4 w-4" />
            <span className="text-sm font-medium">AI-Powered Resume Analysis</span>
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Boost Your Resume with{' '}
          <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
            AI-Powered Analysis
          </span>
        </h1>

        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Get instant feedback on your resume with our advanced ATS scoring system. 
          Optimize for any job description and land more interviews with confidence.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/auth">
          <button className="group bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2">
            <span>Get Started Free</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
          </Link>
        </div>

      </div>
    </section>
    </div>
  );
};

export default Hero;