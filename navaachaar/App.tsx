
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import AddService from './components/AddService';
import Query from './components/Query';
import IntroModal from './components/IntroModal';

type View = 'home' | 'add' | 'query';

const App: React.FC = () => {
  const [view, setView] = useState<View>('home');
  const [showIntro, setShowIntro] = useState<boolean>(true);

  const renderView = () => {
    switch (view) {
      case 'home':
        return <Home />;
      case 'add':
        return <AddService />;
      case 'query':
        return <Query />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-orange-50/50">
      {showIntro && <IntroModal onClose={() => setShowIntro(false)} />}
      <Header setView={setView} currentView={view} />
      <main className="flex-grow container mx-auto px-4 py-8">
        {renderView()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
