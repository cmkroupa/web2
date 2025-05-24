import React from 'react';

const GlobalBackground: React.FC = () => {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden">
            {/* Base gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50"></div>
            
            {/* Animated blurry orbs */}
            <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-purple-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[40rem] h-[40rem] bg-blue-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-float-delay"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-indigo-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
            
            {/* Additional smaller orbs for more depth */}
            <div className="absolute top-1/3 right-1/3 w-[20rem] h-[20rem] bg-pink-200/20 rounded-full mix-blend-multiply filter blur-2xl animate-float-slow"></div>
            <div className="absolute bottom-1/3 left-1/3 w-[20rem] h-[20rem] bg-teal-200/20 rounded-full mix-blend-multiply filter blur-2xl animate-float-delay-slow"></div>
        </div>
    );
};

export default GlobalBackground; 