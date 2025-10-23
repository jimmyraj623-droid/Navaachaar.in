
import React, { useState, useMemo } from 'react';
import { PROVIDERS } from '../constants';
import type { ServiceProvider } from '../types';

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
    </svg>
);

const LocationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
    </svg>
);


const ProviderCard: React.FC<{ provider: ServiceProvider }> = ({ provider }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out group">
    <img className="w-full h-48 object-cover" src={provider.imageUrl} alt={provider.name} />
    <div className="p-5">
      <h3 className="text-xl font-bold text-gray-800">{provider.name}</h3>
      <p className="text-orange-500 font-semibold mt-1">{provider.occupation}</p>
      <div className="mt-4 space-y-2 text-gray-600">
        <div className="flex items-center">
            <PhoneIcon />
            <span>{provider.phone}</span>
        </div>
        <div className="flex items-center">
            <LocationIcon />
            <span>{provider.area}</span>
        </div>
      </div>
       <button className="mt-5 w-full bg-orange-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transition-colors duration-300">
        Contact Now
      </button>
    </div>
  </div>
);

const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProviders = useMemo(() => {
    if (!searchTerm) {
      return PROVIDERS;
    }
    const lowercasedTerm = searchTerm.toLowerCase();
    return PROVIDERS.filter(
      (provider) =>
        provider.name.toLowerCase().includes(lowercasedTerm) ||
        provider.occupation.toLowerCase().includes(lowercasedTerm) ||
        provider.area.toLowerCase().includes(lowercasedTerm)
    );
  }, [searchTerm]);

  return (
    <div className="space-y-12">
      <section className="text-center bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">Find Local Experts Instantly</h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-6">
          Search for plumbers, electricians, carpenters, and more in your area.
        </p>
        <div className="relative max-w-xl mx-auto">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
            <SearchIcon />
          </div>
          <input
            type="text"
            placeholder="Search by occupation, name, or area..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full py-3 pl-12 pr-4 text-gray-700 bg-gray-100 border-2 border-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
          />
        </div>
      </section>

      <section>
        {filteredProviders.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProviders.map((provider) => (
              <ProviderCard key={provider.id} provider={provider} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl shadow-md">
            <h3 className="text-2xl font-semibold text-gray-700">No providers found</h3>
            <p className="text-gray-500 mt-2">Try a different search term or check back later.</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;
