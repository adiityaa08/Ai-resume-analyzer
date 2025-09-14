import React from "react";
import { ArrowRight, Zap } from "lucide-react";
import { Link } from "react-router";
import Navigation from "./navigation";

const Hero: React.FC = () => {
  return (
    <div className="relative">
      <Navigation />
      <section className="bg-[url('/images/bg-main.svg')] bg-cover bg-center min-h-[85vh] flex items-start justify-center pt-20 sm:pt-24 px-4 sm:px-6 lg:px-8">



        <div className="relative max-w-7xl mx-auto text-center">
          {/* Badge */}
          <div className="mb-6 sm:mb-8">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full">
              <Zap className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span className="text-xs sm:text-sm font-medium">
                AI-Powered Resume Analysis
              </span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-snug sm:leading-tight">
            Boost Your Resume with{" "}
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              AI-Powered Analysis
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed">
            Get instant feedback on your resume with our advanced ATS scoring
            system. Optimize for any job description and land more interviews
            with confidence.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Link to="/auth" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto group bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Get Started Free</span>
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
