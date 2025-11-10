import React from 'react';
import { Globe } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white border-b border-google-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <span className="text-google-secondary text-sm">Om</span>
            <span className="text-google-secondary text-sm">Store</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-google-secondary text-sm hover:underline cursor-pointer">Gmail</span>
            <span className="text-google-secondary text-sm hover:underline cursor-pointer">Bilder</span>
            <div className="w-6 h-6 grid grid-cols-3 gap-0.5 cursor-pointer">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="w-1 h-1 bg-google-secondary rounded-sm"></div>
              ))}
            </div>
            <button className="google-button google-button-primary">
              Logga in
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;