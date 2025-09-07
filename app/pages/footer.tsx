import React from "react";
import { FileText } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Container */}
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:gap-0">
          {/* Brand */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-2 rounded-lg">
              <FileText className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold">Resume Analyzer</span>
          </div>

          {/* Short message */}
          <p className="text-gray-400 text-sm sm:text-base text-center sm:text-right">
            Made with <span className="text-red-500">❤️</span> by Resume Analyzer
            team. <br className="sm:hidden" /> All rights reserved © 2025.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
