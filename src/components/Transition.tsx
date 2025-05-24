import React from 'react';

interface TransitionProps {
  children: React.ReactNode;
  className?: string;
}

const Transition: React.FC<TransitionProps> = ({ children, className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Top gradient fade */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent pointer-events-none" />
      
      {/* Content */}
      <div className="relative">
        {children}
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </div>
  );
};

export default Transition; 