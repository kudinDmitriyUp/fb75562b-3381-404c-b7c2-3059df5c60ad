import React from 'react';
import Header from './components/Header';
import PrivacyModal from './components/PrivacyModal';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="flex items-center justify-center min-h-screen px-4 py-8">
        <PrivacyModal />
      </main>
      <Footer />
    </div>
  );
}

export default App;