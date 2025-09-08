import React from "react";
import { FileText } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        {/* Container */}
        <div className="flex flex-col items-center sm:flex-row sm:justify-between gap-4 sm:gap-0 text-center sm:text-left">
          {/* Brand */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-2 rounded-lg">
              <FileText className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </div>
            <span className="text-lg sm:text-xl font-bold whitespace-nowrap">
              Resume Analyzer
            </span>
          </div>

          {/* Short message */}
          <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed sm:leading-normal">
            Made with <span className="text-red-500">❤️</span> by Resume Analyzer team.{" "}
            <br className="sm:hidden" /> 
            All rights reserved © 2025.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
