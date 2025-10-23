
import React from 'react';

interface IntroModalProps {
  onClose: () => void;
}

const IntroModal: React.FC<IntroModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-lg w-full p-6 sm:p-8 transform transition-all animate-fade-in-up">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 text-center">Welcome to Navaachaar!</h2>
        <div className="text-gray-600 space-y-4 text-base">
          <p className="font-semibold text-orange-600">
            This is a prototype of an online service that has been developed by students of Anglo Eastern International School.
          </p>
          <p>
            Our vision is to create a seamless platform connecting you with skilled local service providers. 
            By doing this, we aim to achieve two important goals:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li><span className="font-semibold">Reduce Unemployment:</span> Providing a stage for local talent to find work and grow their business.</li>
            <li><span className="font-semibold">Provide Fast Service:</span> Helping you find reliable help quickly and efficiently, right in your neighborhood.</li>
          </ul>
        </div>
        <div className="mt-8 text-center">
          <button
            onClick={onClose}
            className="bg-orange-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transform hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default IntroModal;
