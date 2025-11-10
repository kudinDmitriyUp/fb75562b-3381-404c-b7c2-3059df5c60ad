import React from 'react';
import { Globe } from 'lucide-react';

const PrivacyModal = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full mx-4 p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <div className="w-8 h-8 mr-4">
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Globe className="w-4 h-4 text-google-secondary" />
            <span className="text-sm text-google-blue font-medium">SV</span>
          </div>
          <button className="google-button google-button-secondary">
            Logga in
          </button>
        </div>
      </div>

      {/* Title */}
      <h1 className="text-2xl font-normal google-text mb-6">
        Innan du fortsätter till Google
      </h1>

      {/* Content */}
      <div className="space-y-4 mb-6">
        <p className="text-sm google-text-secondary">
          Vi använder cookies och data för att
        </p>
        
        <div className="space-y-3">
          <div className="flex items-start space-x-3">
            <div className="w-4 h-4 mt-0.5 flex-shrink-0">
              <svg viewBox="0 0 24 24" className="w-full h-full text-google-secondary">
                <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <p className="text-sm google-text-secondary">
              leverera och underhålla Googles tjänster
            </p>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="w-4 h-4 mt-0.5 flex-shrink-0">
              <svg viewBox="0 0 24 24" className="w-full h-full text-google-secondary">
                <path fill="currentColor" d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
              </svg>
            </div>
            <p className="text-sm google-text-secondary">
              spåra avbrott och skydda mot spam, bedrägerier och otillåten användning
            </p>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="w-4 h-4 mt-0.5 flex-shrink-0">
              <svg viewBox="0 0 24 24" className="w-full h-full text-google-secondary">
                <path fill="currentColor" d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-1 16H9V7h9v14z"/>
              </svg>
            </div>
            <p className="text-sm google-text-secondary">
              mäta målgruppsengagemang och webbplatsstatistik så att vi kan analysera hur våra tjänster används och förbättra tjänsternas kvalitet.
            </p>
          </div>
        </div>
        
        <p className="text-sm google-text-secondary mt-4">
          Om du väljer knappen Godkänn alla använder vi även cookies och data för att
        </p>
        
        <div className="space-y-3">
          <div className="flex items-start space-x-3">
            <div className="w-4 h-4 mt-0.5 flex-shrink-0">
              <svg viewBox="0 0 24 24" className="w-full h-full text-google-secondary">
                <path fill="currentColor" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <p className="text-sm google-text-secondary">
              utveckla och förbättra nya tjänster
            </p>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="w-4 h-4 mt-0.5 flex-shrink-0">
              <svg viewBox="0 0 24 24" className="w-full h-full text-google-secondary">
                <path fill="currentColor" d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-1 16H9V7h9v14z"/>
              </svg>
            </div>
            <p className="text-sm google-text-secondary">
              leverera annonser och mäta hur effektiva de är
            </p>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="w-4 h-4 mt-0.5 flex-shrink-0">
              <svg viewBox="0 0 24 24" className="w-full h-full text-google-secondary">
                <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <p className="text-sm google-text-secondary">
              visa anpassat innehåll utifrån dina inställningar
            </p>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="w-4 h-4 mt-0.5 flex-shrink-0">
              <svg viewBox="0 0 24 24" className="w-full h-full text-google-secondary">
                <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <p className="text-sm google-text-secondary">
              visa anpassade annonser utifrån dina inställningar
            </p>
          </div>
        </div>
        
        <p className="text-sm google-text-secondary mt-4">
          Om du väljer knappen Avvisa alla använder vi inte cookies i dessa ytterligare syften.
        </p>
        
        <p className="text-sm google-text-secondary mt-4">
          Innehåll utan anpassning påverkas bland annat av vad du tittar på för tillfället, aktivitet i din aktiva söksession och din plats. Innehåll utan anpassning påverkas bland annat av vad du tittar på för tillfället och din ungefärliga plats. Innehåll och annonser med anpassning kan även omfatta mer relevanta resultat, rekommendationer och anpassade annonser utifrån tidigare aktivitet i webbläsaren, till exempel tidigare sökningar på Google. Vi använder även cookies och data för att anpassa upplevelsen efter lämplighet för din målgrupp, om tillämpligt.
        </p>
        
        <p className="text-sm google-text-secondary mt-4">
          Välj knappen Fler alternativ för mer information, till exempel om hur du hanterar dina integritetsinstallningar. Du kan även besöka g.co/privacytools när som helst.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
        <button className="google-button google-button-secondary w-full sm:w-auto">
          Avvisa alla
        </button>
        <button className="google-button google-button-primary w-full sm:w-auto">
          Godkänn alla
        </button>
      </div>
      
      <div className="text-center mt-4">
        <button className="google-link text-sm">
          Fler alternativ
        </button>
      </div>
      
      <div className="flex justify-center space-x-8 mt-6 pt-4 border-t border-google-border">
        <button className="google-link text-sm">
          Integritet
        </button>
        <button className="google-link text-sm">
          Villkor
        </button>
      </div>
    </div>
  );
};

export default PrivacyModal;