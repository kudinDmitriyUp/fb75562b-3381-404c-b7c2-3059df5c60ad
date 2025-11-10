import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-google-light-gray border-t border-google-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center py-4">
          <div className="flex items-center space-x-6 mb-4 sm:mb-0">
            <span className="text-sm google-text-secondary">Sverige</span>
          </div>
          
          <div className="flex flex-wrap items-center justify-center sm:justify-end space-x-6">
            <span className="text-sm google-text-secondary hover:underline cursor-pointer">Annonsering</span>
            <span className="text-sm google-text-secondary hover:underline cursor-pointer">Företagslösningar</span>
            <span className="text-sm google-text-secondary hover:underline cursor-pointer">Så fungerar Sök</span>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-sm google-text-secondary">Koldioxidneutral sedan 2007</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-6 mt-4 sm:mt-0">
            <span className="text-sm google-text-secondary hover:underline cursor-pointer">Integritet</span>
            <span className="text-sm google-text-secondary hover:underline cursor-pointer">Villkor</span>
            <span className="text-sm google-text-secondary hover:underline cursor-pointer">Inställningar</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;