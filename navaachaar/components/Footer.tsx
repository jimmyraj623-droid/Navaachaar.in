
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
          <div className="flex flex-col items-center md:items-start">
             <div className="flex items-center space-x-4">
                <span className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-white to-green-500">
                  Made in India 🇮🇳
                </span>
                <span className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-200">
                  Viksit Bharat
                </span>
            </div>
            <p className="mt-2 text-sm text-gray-400">Your trusted partner for local services.</p>
          </div>
          <div className="text-sm">
            <p>&copy; {new Date().getFullYear()} Holistic Team, Anglo Eastern International School.</p>
            <p className="text-gray-400">All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
