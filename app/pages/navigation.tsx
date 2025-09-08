import React from "react";
import { FileText } from "lucide-react";
import { Link } from "react-router";

const Navigation: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[url('/images/bg-main.svg')] bg-center border-b border-gray-900/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-2 rounded-lg">
              <FileText className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Resumind</span>
          </div>

          {/* CTA Button (visible on all screens, adjusts size on mobile) */}
          <div>
            <Link
              to="/auth"
              className="px-4 py-2 sm:px-6 sm:py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-teal-600 shadow-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,99,235,0.6)] hover:scale-105 text-sm sm:text-base"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
